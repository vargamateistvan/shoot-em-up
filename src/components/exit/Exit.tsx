import React from 'react';
import { Layout, Button } from 'antd';

const Exit: React.FC = () => {
    return (
        <Layout>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Button type="primary" shape="round" size="large" href="/game">
                    BACK TO GAME
                </Button>
                <Button type="primary" shape="round" size="large" href="/">
                    BACK TO MENU
                </Button>
                <Button type="primary" shape="round" size="large" onClick={() => window.close()}>
                    CLOSE
                </Button>
            </div>
        </Layout>
    )
}

export default Exit;
