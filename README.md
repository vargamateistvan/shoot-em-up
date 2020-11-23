# Shoot'em up game

## Live preview
https://space-shoot-em-up.herokuapp.com/
## How it works

### Install dependencies

```
npm install
```

### Run game

```
npm run start-dev
```

## Task

Client Developer Test Task – Shoot&#39;em up game

### Description

Create a browser game with JavaScript or TypeScript, without using any third-party game frameworks (i.e. Unity, Phaser, Construct, RPG Maker, etc.). The only exception is PixiJS which is recommended, but not mandatory.

### Specification

* the game should work on most modern browsers on desktop

* the game should be 800x600 px in size, it is not necessary to handle resizing • at the start, a _Splash screen_ is shown for 2 seconds, then fades out and the game continues to the main screen

* the _Main screen_ contains the following elements:
    * background with some animation to make the view more interesting

    * 4 buttons placed in the middle, from top to bottom: GAME1, GAME2, GAME3 and EXIT

    * clicking the EXIT button navigates somewhere

    * clicking any of the GAME buttons takes the user to the game

    * a logo above the buttons

* the _Game screen_ is a simple side scroller Shoot&#39;em up with spaceships

    * the player&#39;s spaceship can move around the game area

    * it can shoot rockets

    * the background moves from right to left, with a parallax scrolling effect o every 2 seconds, an enemy spaceship arrives

    * the enemy spaceships move in some randomized way

    * if the projectile of the player&#39;s spaceship hits an enemy, its spaceship blows up and disappears, emitting particles

    * if the player&#39;s spaceship collides with an enemy object, it blows up, and the game ends, going back to the main menu

### Scoring

The quality of the graphics is not counted towards the score. An additional score is awarded for using ES6+, TypeScript, PixiJS, and/or any source and resource optimization. You can submit the task by uploading it to GitHub or by simply sending us the source by e-mail.
