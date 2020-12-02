import React, { useEffect } from 'react';
import * as PIXI from 'pixi.js'
import { Layout, Row, Col, Space, Typography, Button } from 'antd';

import { setBackground } from './background';
import { addXWing, handleShooting } from './x-wing';
import { addTieFighters } from './tie-figter';
import { handleGame } from './handleGame';
import { arrowDown, arrowLeft, arrowRight, arrowUp, space } from '../utils/keyEvents';

const { Title, Text } = Typography;

const Game: React.FC = () => {
    const app = new PIXI.Application({
        width: 800,
        height: 600,
        backgroundColor: 0x030F12,
        resolution: window.devicePixelRatio || 1,
        forceCanvas: false
    });

    useEffect(() => {
        const playground = document.getElementById('playground');
        if (playground) {
            playground.appendChild(app.view);
            app.start();
        }
    }, [app]);

    setBackground(app);
    const xWing = addXWing(app);
    const bullets = handleShooting(app);
    const tieFighters = addTieFighters(app);
    handleGame(app, xWing, bullets, tieFighters);

    function resize() {
        const ratio = 800 / 600;
        let width = 0;
        let height = 0;
        if (window.innerWidth / window.innerHeight >= ratio) {
            width = window.innerHeight * ratio;
            height = window.innerHeight;

            app.view.style.position = 'absolute';
            app.view.style.width = width + 'px';
            app.view.style.height = height + 'px';

            app.view.style.left = (window.innerWidth - width) / 2 + 'px';
            app.view.style.top = '0px';
        } else {
            width = window.innerWidth;
            height = window.innerWidth / ratio;

            app.view.style.position = 'absolute';
            app.view.style.width = width + 'px';
            app.view.style.height = height + 'px';

            app.view.style.left = 0 + 'px';
            app.view.style.top = (window.innerWidth - (height / 2)) + 'px';
        }
    }

    window.onresize = resize;

    return (
        <Layout style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', bottom: 0, backgroundColor: 'black' }}>
            <div id="playground"></div>

            <Title>Controls</Title>
            <Space size={200}>
                <Text>Shoot</Text>
                <Text>Movement</Text>
            </Space>
            <Row align="bottom" justify="space-around">
                <Col>
                    <img
                        onClick={() => { space(bullets, xWing, app) }}
                        id="button-space"
                        alt="Space"
                        width={300}
                        src="https://www.wpclipart.com/dl.php?img=/computer/keyboard_keys/large_keys/computer_key_Space_bar_T.png"
                    />
                </Col>
                <Col>
                    <Row justify="center">
                        <img
                            onClick={() => { arrowUp(xWing) }}
                            id="button-arrow-up"
                            alt="Arrow_Up"
                            width={50}
                            src="https://www.wpclipart.com/dl.php?img=/computer/keyboard_keys/arrow_keys/computer_key_Arrow_Up_T.png"
                        />
                    </Row>
                    <Row>
                        <img
                            onClick={() => { arrowLeft(xWing) }}
                            id="button-arrow-left"
                            alt="Arrow_Left"
                            width={50}
                            src="https://www.wpclipart.com/dl.php?img=/computer/keyboard_keys/arrow_keys/computer_key_Arrow_Left_T.png"
                        /><img
                            onClick={() => { arrowDown(xWing, app) }}
                            id="button-arrow-down"
                            alt="Arrow_Down"
                            width={50}
                            src="https://www.wpclipart.com/dl.php?img=/computer/keyboard_keys/arrow_keys/computer_key_Arrow_Down_T.png"
                        /><img
                            onClick={() => { arrowRight(xWing, app) }}
                            id="button-arrow-right"
                            alt="Arrow_Right"
                            width={50}
                            src="https://www.wpclipart.com/dl.php?img=/computer/keyboard_keys/arrow_keys/computer_key_Arrow_Right_T.png"
                        />
                    </Row>
                </Col>
            </Row>
            <Row style={{ paddingTop: 50 }}>
                <Button type="primary" shape="round" size="large" href="/">
                    BACK TO MENU
			    </Button>
            </Row>
        </Layout>
    )
}

export default Game;
