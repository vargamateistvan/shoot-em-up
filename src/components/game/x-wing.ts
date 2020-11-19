import * as PIXI from 'pixi.js'
import xWingImage from '../../assets/images/x-wing.png'
import bulletImage from '../../assets/images/bullet.png'

let xWingContainer;

export const addXWing = (app: PIXI.Application) => {
    xWingContainer = new PIXI.Container();
    app.stage.addChild(xWingContainer);

    // Create a new texture
    const xWingTexture = PIXI.Texture.from(xWingImage);

    const xWing = new PIXI.Sprite(xWingTexture);
    xWing.anchor.set(0.5);
    xWingContainer.addChild(xWing);

    // Move xWingContainer to the center
    xWingContainer.x = app.screen.width - (app.screen.width - 50);
    xWingContainer.y = app.screen.height / 2;

    // Center X-wing sprite in local xWingContainer coordinates
    xWingContainer.pivot.x = xWingContainer.width / 2;
    xWingContainer.pivot.y = xWingContainer.height / 2;

    // Listen for X-wing movement
    document.addEventListener('keydown', (e) => {
        if (e.code === 'ArrowRight') {
            if (xWingContainer.x >= app.screen.width - 50) return;
            xWingContainer.x += 5
        }

        if (e.code === 'ArrowLeft') {
            if (xWingContainer.x <= 50) return;
            xWingContainer.x -= 5
        }

        if (e.code === 'ArrowDown') {
            if (xWingContainer.y >= app.screen.height - 50) return;
            xWingContainer.y += 5
        }

        if (e.code === 'ArrowUp') {
            if (xWingContainer.y <= 50) return;
            xWingContainer.y -= 5
        }
    })
}

export const handleShooting = (app: PIXI.Application) => {
    const bulletSpeed = 2.5;
    const bulletTexture = PIXI.Texture.from(bulletImage);
    const bullets: PIXI.Sprite[] = [];

    app.ticker.add((delta) => {
        bullets.forEach((bullet, index, object) => {
            // TODO Remove bullet
            // if (bullet.sprite.x > app.screen.width) {
            //     console.log('Bullet removed', bullet);
            //     object.splice(index, 1);
            //     bullet.sprite.destroy();
            // }
            bullet.x += delta * bulletSpeed;
        })
    })

    // Listen for shooting
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space') {
            const bullet = new PIXI.Sprite(bulletTexture);
            bullet.x = xWingContainer.x + 20;
            bullet.y = xWingContainer.y;
            app.stage.addChild(bullet);
            bullets.push(bullet);
        }
    })
}