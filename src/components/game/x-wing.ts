import * as PIXI from 'pixi.js'
import xWingImage from '../../assets/images/x-wing.png'

export const addXWing = (app, container) => {
    // Create a new texture
    const texture = PIXI.Texture.from(xWingImage);

    const xWing = new PIXI.Sprite(texture);
    xWing.anchor.set(0.5);
    container.addChild(xWing);

    // Move container to the center
    container.x = app.screen.width - (app.screen.width - 50);
    container.y = app.screen.height / 2;

    // Center X-wing sprite in local container coordinates
    container.pivot.x = container.width / 2;
    container.pivot.y = container.height / 2;

    // Listen for X-wing movement
    document.addEventListener('keydown', (e) => {
        if (e.code === 'ArrowRight') {
            if (container.x >= app.screen.width - 50) return;
            container.x += 5
        }

        if (e.code === 'ArrowLeft') {
            if (container.x <= 50) return;
            container.x -= 5
        }

        if (e.code === 'ArrowDown') {
            if (container.y >= app.screen.height - 50) return;
            container.y += 5
        }

        if (e.code === 'ArrowUp') {
            if (container.y <= 50) return;
            container.y -= 5
        }
    })
}