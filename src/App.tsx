import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Layout, Button, Row, Image } from 'antd';
import './App.css';
import Game from './components/game/Game';
import Exit from './components/exit/Exit';
import LoadingScreen from './components/loadingScreen/LoadingScreen';

function App() {
	const [loading, setLoading] = React.useState(true);

	React.useEffect(() => {
		setTimeout(() => setLoading(false), 2000)
	}, [])
	return (
		loading ?
			<LoadingScreen />
			: <Router>
				<Layout className="site-layout" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'black' }}>
					<Route exact path="/">
						<Row>
							<Image
								width={500}
								src="https://media.cdn.teamtailor.com/images/s3/teamtailor-production/gallery_picture-v1/image_uploads/e5260240-b2e6-462c-8310-aa5088e0bb5e/original.png"
							/>
						</Row>
						<Row>
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
						</Row>
					</Route>
					<Route exact path='/game' component={Game} />
					<Route exact path='/exit' component={Exit} />
				</Layout>
			</Router>
	);
}

export default App;
