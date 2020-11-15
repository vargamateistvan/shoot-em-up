import React from 'react';
import { Layout, Button } from 'antd';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

const MainMenu: React.FC = () => {

    return (
        <Router>
            <Button type="primary" shape="round" size="large">
                GAME1
                <Link to='/game' />
            </Button>
            <Button type="primary" shape="round" size="large">
                GAME2
                <Link to='/game' />
            </Button>
            <Button type="primary" shape="round" size="large">
                GAME3
                <Link to='/game' />
            </Button>
            <Button type="primary" shape="round" size="large">
                Exit
                <Link to='/exit' />
            </Button>
        </Router>
    )
}

export default MainMenu;
