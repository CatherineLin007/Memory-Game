# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Zhiying Lin**

Time spent: **4.5** hours spent in total

Link to project: (https://glitch.com/edit/#!/purring-six-amaryllis)

## Required Functionality

The following **required** functionality is complete:

* [v] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [v] "Start" button toggles between "Start" and "Stop" when clicked. 
* [v] Game buttons each light up and play a sound when clicked. 
* [v] Computer plays back sequence of clues including sound and visual cue for each button
* [v] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [v] User wins the game after guessing a complete pattern
* [v] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [v] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [v] Buttons use a pitch (frequency) other than the ones in the tutorial
* [v] More than 4 functional game buttons
* [v] Playback speeds up on each turn
* [v] Computer picks a different pattern each time the game is played
* [v] Player only loses after 3 mistakes (instead of on the first mistake)
* [v] Game button appearance change goes beyond color (e.g. add an image)
* [v] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [v] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [v] Game title small animation
- [v] Added a cute GIF
- [v] Gradient styled background

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](gif1-link-here)
![](gif2-link-here)
![](gif3-link-here)
![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
    - `Google` for HTML/JS/CSS syntax
    - `https://www.w3schools.com/` for example
    - `https://cssgradient.io/` for gradient generation
    - `https://unsplash.com` for buttons' background

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
    
    When developing the project, one big obstacle was a bug that the `clueHoldTime` seems to be too small sometimes I start the game so that the audio doesn’t play at all. It was so weird that the problem occurs sometimes and does not occur sometimes. After trying a few modifications without progress, I tried to `console.log` the variable and I observed that the ` clueHoldTime` is not 1000(default) when I started the game. Later I found out it was because I didn’t reset the variable to 1000 when the game starts. However, sometimes the `clueHoldTime` is still too small even if I only deduct them 30 each time. After reading the console logs, I found out that on each level of the game, `clueHoldTime` is deducted multiple times instead of one time. It turns out that I should not deduct it for every iteration inside the for loop. After resolving the bug, the program is good to go! One key takeaway I learned is that instead of reading the code trying to find the bug, sometimes we can try observing the intermediate states of the program and see if anything is off.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
    
    After creating this game, I start wondering if it is possible to make this game an online game where each user who comes to the site can put in a username when playing the game and we can have a rank of all users from the world. To achieve this, I believe we will need to have a server or some service to store the data of all users, but currently I am wondering how to use this kind of service and how to connect the website with it. Also, although I put some effort to make the website looks better, it still a little sketchy compared to some other popular websites. I am curious about how can I make the website look more modern and intriguing.
4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
    
    If I have more time to work on this project I would like to:
    - refactor my code to make it more organized and clean
    - expand the game to infinite length(instead of 8) and users can have a highest score record
    - increase the number of buttons the game have as the level increases
    - add animations to the game buttons to make the game more interesting



## Interview Recording URL Link

[My 5-minute Interview Recording](https://usc.zoom.us/rec/share/FxbSHNbCYzwevFLCRX__6eISjoSpGoC_AxgE77JSU3Kgy5juW1nuy-ZsZlhgttWW.Bc9qv_q10ydD0j1y?startTime=1650683387000)


## License

    Copyright [Zhiying Lin]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.