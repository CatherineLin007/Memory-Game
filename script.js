/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0

var pattern = [2, 5, 4, 3, 5, 1, 2, 4];
var progress = 0;
var gamePlaying = false;

const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

var clueHoldTime = 1000; //how long to hold each clue's light/sound

var guessCounter = 0;
var lifeCounter = 3;
var timeLeft = 5000;
var interval;
var gameStop = false;
var timeout = null;

function startTimer() {
  timeLeft = 5000;
  document.getElementById("timeDisplay").classList.remove("hidden");
  interval = setInterval(function () {
    document.getElementById("timeCount").innerHTML = timeLeft;
    timeLeft -= 100;
  }, 100);
}

function stopTimer() {
  if(gameStop){
    return;
  }
  clearInterval(interval);
  document.getElementById("timeCount").innerHTML = 5000;
  document.getElementById("timeDisplay").classList.add("hidden");
  if (guessCounter == progress) {
    lifeCounter -= 1;

    if (lifeCounter > 0) {
      alert("Time out! You have " + lifeCounter + " chances left.");
      document.getElementById("lifeCount").innerHTML = lifeCounter;
      playClueSequence();
    } else {
      document.getElementById("lifeCount").innerHTML = lifeCounter;
      loseGame();
    }
  }
}

function startGame() {
  //initialize game variables
  timeLeft = 5000;
  gameStop = false;
  pattern = Array(8)
    .fill()
    .map(() => Math.round(Math.random() * 4 + 1));
  console.log("random pattern: ", pattern);
  progress = 0;
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("lifeDisplay").classList.remove("hidden");
  playClueSequence();
  lifeCounter = 3;
  document.getElementById("lifeCount").innerHTML = lifeCounter;
  clueHoldTime = 1000;
}

function stopGame() {
  gameStop = true;
  timeLeft = 5000;
  clearInterval(interval);
  clearTimeout(timeout);
  document.getElementById("timeDisplay").classList.add("hidden");
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("lifeDisplay").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 528,
};

function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}

function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}

function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  clearTimeout(timeout);
  context.resume();
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  setTimeout(startTimer, delay);
  timeout = setTimeout(stopTimer, delay + 5200);
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }

  if (pattern[guessCounter] == btn) {
    if (guessCounter == progress) {
      clearInterval(interval);
      document.getElementById("timeCount").innerHTML = 5000;
      document.getElementById("timeDisplay").classList.add("hidden");
      if (progress != pattern.length - 1) {
        clueHoldTime -= 30;
        console.log("clueHoldTime: ", clueHoldTime);
        progress++;
        playClueSequence();
      } else {
        winGame();
      }
    } else {
      guessCounter++;
    }
  } else {
    clearInterval(interval);
    document.getElementById("timeCount").innerHTML = 5000;
    document.getElementById("timeDisplay").classList.add("hidden");
    lifeCounter -= 1;

    if (lifeCounter > 0) {
      alert("Wrong! You have " + lifeCounter + " chances left.");
      document.getElementById("lifeCount").innerHTML = lifeCounter;
      playClueSequence();
    } else {
      document.getElementById("lifeCount").innerHTML = lifeCounter;
      loseGame();
    }
  }
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
