import * as PIXI from 'pixi.js'
import bulletImage from '../../assets/images/bullet.png'

export const space = (bullets: PIXI.Sprite[], xWing: PIXI.Sprite, app: PIXI.Application) => {
    const bulletTexture = PIXI.Texture.from(bulletImage);

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

export const arrowUp = (xWing: PIXI.Sprite) => {
    if (xWing.y <= 50) return;
    xWing.y -= 10
}

export const arrowDown = (xWing: PIXI.Sprite, app: PIXI.Application) => {
    if (xWing.y >= app.screen.height - 50) return;
    xWing.y += 10
}

export const arrowLeft = (xWing: PIXI.Sprite) => {
    if (xWing.x <= 50) return;
    xWing.x -= 10
}
export const arrowRight = (xWing: PIXI.Sprite, app: PIXI.Application) => {
    if (xWing.x >= app.screen.width - 50) return;
    xWing.x += 10
}