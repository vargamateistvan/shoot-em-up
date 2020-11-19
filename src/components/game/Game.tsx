import React from 'react';
import * as PIXI from 'pixi.js'
import { Layout } from 'antd';

import { setBackground } from './background';
import { addXWing, handleShooting } from './x-wing';

const app = new PIXI.Application({
    width: 800, height: 600, backgroundColor: 0x082B32, resolution: window.devicePixelRatio || 1,
});

document.body.appendChild(app.view);

setBackground(app);
addXWing(app);
handleShooting(app);

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
