import React, { useEffect } from 'react';
import * as PIXI from 'pixi.js'
import { Layout, Row, Col, Image, Space, Typography, Button } from 'antd';

import { setBackground } from './background';
import { addXWing, handleShooting } from './x-wing';
import { addTieFighters } from './tie-figter';
import { handleGame } from './handleGame';

const { Title, Text } = Typography;

const Game: React.FC = () => {
    const app = new PIXI.Application({
        width: 800,
        height: 600,
        backgroundColor: 0x030F12,
        resolution: window.devicePixelRatio || 1,
        forceCanvas: false,
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

    return (
        <Layout style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', bottom: 0 }}>
            <div id="playground"></div>

            <Title>Controls</Title>
            <Space size={200}>
                <Text>Shoot</Text>
                <Text>Movement</Text>
            </Space>
            <Row align="bottom" justify="space-around">
                <Col>
                    <Image
                        width={300}
                        src="https://www.wpclipart.com/dl.php?img=/computer/keyboard_keys/large_keys/computer_key_Space_bar_T.png"
                    />
                </Col>
                <Col>
                    <Row justify="center">
                        <Image
                            width={50}
                            src="https://www.wpclipart.com/dl.php?img=/computer/keyboard_keys/arrow_keys/computer_key_Arrow_Up_T.png"
                        />
                    </Row>
                    <Row>
                        <Image
                            width={50}
                            src="https://www.wpclipart.com/dl.php?img=/computer/keyboard_keys/arrow_keys/computer_key_Arrow_Left_T.png"
                        /><Image
                            width={50}
                            src="https://www.wpclipart.com/dl.php?img=/computer/keyboard_keys/arrow_keys/computer_key_Arrow_Down_T.png"
                        /><Image
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
