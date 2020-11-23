import * as PIXI from 'pixi.js'
import xWingImage from '../../assets/images/x-wing.png'
import { space, arrowUp, arrowDown, arrowLeft, arrowRight } from './keyEvents';

let xWing;

export const addXWing = (app: PIXI.Application): PIXI.Sprite => {
    // Create a new texture
    const xWingTexture = PIXI.Texture.from(xWingImage);

    xWing = new PIXI.Sprite(xWingTexture);
    xWing.anchor.set(0.5);
    app.stage.addChild(xWing);

    // Move xWingContainer to the center
    xWing.x = app.screen.width - (app.screen.width - 50);
    xWing.y = app.screen.height / 2;

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

    return xWing;
}

export const handleShooting = (app: PIXI.Application): PIXI.Sprite[] => {
    const bulletSpeed = 2.5;
    const bullets: PIXI.Sprite[] = [];

    app.ticker.add((delta) => {
        bullets.forEach((bullet, index, object) => {
            if (bullet.x > app.screen.width) {
                object.splice(index, 1);
                app.stage.removeChild(bullet);
            }
            bullet.x += delta * bulletSpeed;
        })
    })

    // Listen for shooting
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space') {
            space(bullets, xWing, app);
        }
    })

    return bullets;
}
