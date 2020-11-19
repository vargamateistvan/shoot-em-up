import React from 'react';
import * as PIXI from 'pixi.js'
import { Layout } from 'antd';

import { setBackground } from './background';
import { addXWing, handleShooting } from './x-wing';
import { addTieFighters } from './tie-figter';

const app = new PIXI.Application({
    width: 800, height: 600, backgroundColor: 0x030F12, resolution: window.devicePixelRatio || 1,
});

document.body.appendChild(app.view);

setBackground(app);
addXWing(app);
handleShooting(app);
addTieFighters(app);

const playground = document.getElementById('pxrender');
if (playground) {
    playground.appendChild(app.view);
}

const Game: React.FC = () => {

    return (
        <Layout>
            <div id="pxrender"></div>
        </Layout>
    )
}

export default Game;
