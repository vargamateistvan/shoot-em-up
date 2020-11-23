import * as PIXI from 'pixi.js'
import tieFighterImage from '../../assets/images/tie-fighter.png'

export const addTieFighters = (app: PIXI.Application): PIXI.Sprite[] => {
    const tieFighterSpeed = 2.5;
    const tieFighterTexture = PIXI.Texture.from(tieFighterImage);
    const tieFighters: PIXI.Sprite[] = [];

    window.setInterval(() => {
        const tieFighter = new PIXI.Sprite(tieFighterTexture);
        tieFighter.x = app.screen.width;
        tieFighter.y = Math.floor(Math.random() * app.screen.height);
        app.stage.addChild(tieFighter);
        tieFighters.push(tieFighter);
    }, 2000)

    app.ticker.add((delta) => {
        tieFighters.forEach((tieFighter, index, object) => {
            if (tieFighter.x < 0 - tieFighter.width) {
                object.splice(index, 1);
                app.stage.removeChild(tieFighter);
            }
            tieFighter.x -= delta * tieFighterSpeed;
            tieFighter.y = tieFighter.y + (Math.floor(Math.random() * 10) % 2 === 0 ? -1 : 1 * delta * tieFighterSpeed / 10);
        })
    })

    return tieFighters;
}
