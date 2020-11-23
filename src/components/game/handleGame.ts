import * as PIXI from 'pixi.js'
import explosionImage from '../../assets/images/explosion.png'

export const handleGame = (app: PIXI.Application, xWing: PIXI.Sprite, bullets: PIXI.Sprite[], tieFighters: PIXI.Sprite[]) => {
    const explosionTexture = PIXI.Texture.from(explosionImage);
    const explosions: PIXI.Sprite[] = [];

    function addExplosion(x, y) {
        const explosion = new PIXI.Sprite(explosionTexture);
        explosion.x = x;
        explosion.y = y;
        app.stage.addChild(explosion);
        explosions.push(explosion);
        setTimeout(removeExplosion, 2000)
    }

    function removeExplosion() {
        const explosion = explosions.shift();
        if (explosion) {
            app.stage.removeChild(explosion);
        }
    }

    app.ticker.add((delta) => {
        // If bullet hits Tie Fighter
        bullets.forEach((bullet, bulletIndex, bulletObject) => {
            tieFighters.forEach((tieFighter, index, object) => {
                if (bullet.x >= tieFighter.x - 25 && bullet.x <= tieFighter.x + 25 && bullet.y >= tieFighter.y - 25 && bullet.y <= tieFighter.y + 25) {
                    // Remove Tie Fighter
                    object.splice(index, 1);
                    app.stage.removeChild(tieFighter);
                    // Remove Bullet
                    bulletObject.splice(bulletIndex, 1);
                    app.stage.removeChild(bullet);
                    addExplosion(tieFighter.x, tieFighter.y);
                }
            })
        })
    })
}