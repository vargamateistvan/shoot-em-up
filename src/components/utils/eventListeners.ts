import * as PIXI from 'pixi.js'
import { space, arrowUp, arrowDown, arrowLeft, arrowRight } from './keyEvents';

export const xWingMovement = (xWing: PIXI.Sprite, app: PIXI.Application) => {
    // Listen for X-wing movement
    document.addEventListener('keydown', (e) => {
        if (e.code === 'ArrowRight') {
            arrowRight(xWing, app);
        }

        if (e.code === 'ArrowLeft') {
            arrowLeft(xWing);
        }

        if (e.code === 'ArrowDown') {
            arrowDown(xWing, app);
        }

        if (e.code === 'ArrowUp') {
            arrowUp(xWing);
        }
    })
}

export const xWingShooting = (bullets: PIXI.Sprite[], xWing: PIXI.Sprite, app: PIXI.Application) => {
    // Listen for shooting
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space') {
            space(bullets, xWing, app);
        }
    })
}