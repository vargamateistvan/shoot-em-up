import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import './App.css';
import MainMenu from './components/mainMenu/MainMenu';
import Game from './components/game/Game';
import Exit from './components/exit/Exit';

const { Content } = Layout;

function App() {
  return (
    <Router>
      <Layout>
        <Content className="site-layout-background" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Route exact path="/">
            <Redirect to="/menu" />
          </Route>
          <Route exact path='/menu' component={MainMenu} />
          <Route exact path='/game' component={Game} />
          <Route exact path='/exit' component={Exit} />
        </Content>
      </Layout>
    </Router>);
}

export default App;
