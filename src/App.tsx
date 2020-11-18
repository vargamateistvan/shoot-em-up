import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Layout, Button } from 'antd';
import './App.css';
import Game from './components/game/Game';
import Exit from './components/exit/Exit';

function App() {
  return (
    <Router>
      <Layout className="site-layout" >
        <Route exact path="/">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Button type="primary" shape="round" size="large" href="/game">
              GAME1
                </Button>
            <Button type="primary" shape="round" size="large" href="/game">
              GAME2
                </Button>
            <Button type="primary" shape="round" size="large" href="/game">
              GAME3
                </Button>
            <Button type="primary" shape="round" size="large" href="/exit">
              Exit
                </Button>
          </div>
        </Route>
        <Route exact path='/game' component={Game} />
        <Route exact path='/exit' component={Exit} />
      </Layout>
    </Router>);
}

export default App;
