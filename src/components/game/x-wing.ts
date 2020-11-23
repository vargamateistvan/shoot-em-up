import * as PIXI from 'pixi.js'
import xWingImage from '../../assets/images/x-wing.png'
import bulletImage from '../../assets/images/bullet.png'

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
            if (xWing.x >= app.screen.width - 50) return;
            xWing.x += 10
        }

        if (e.code === 'ArrowLeft') {
            if (xWing.x <= 50) return;
            xWing.x -= 10
        }

        if (e.code === 'ArrowDown') {
            if (xWing.y >= app.screen.height - 50) return;
            xWing.y += 10
        }

        if (e.code === 'ArrowUp') {
            if (xWing.y <= 50) return;
            xWing.y -= 10
        }
    })

    return xWing;
}

export const handleShooting = (app: PIXI.Application): PIXI.Sprite[] => {
    const bulletSpeed = 2.5;
    const bulletTexture = PIXI.Texture.from(bulletImage);
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
            let bullet = new PIXI.Sprite(bulletTexture);
            bullet.x = xWing.x + 20;
            bullet.y = xWing.y - 20;
            app.stage.addChild(bullet);
            bullets.push(bullet);

            bullet = new PIXI.Sprite(bulletTexture);
            bullet.x = xWing.x + 20;
            bullet.y = xWing.y + 10;
            app.stage.addChild(bullet);
            bullets.push(bullet);
        }
    })

    return bullets;
}
