import React, { Component } from 'react';
import {
	Route,
	NavLink,
	HashRouter
} from 'react-router-dom';
import Home from './Home';
import Stuff from './Stuff';
import Contact from './Contact';
import './index.css';

class SPA extends Component {
	render() {
		return (
			// Routing region
			// Here we will have our components linked
			<HashRouter>
				<div>
					<h1>Single Page App</h1>
					<ul className="header">
						<li>
							<NavLink exact to="/">Início</NavLink>
						</li>
						<li>
							<NavLink to="/stuff">Posts</NavLink>
						</li>
						<li>
							<NavLink to="/contact">Contato</NavLink>
						</li>
					</ul>
					<div className="content">
						<Route exact path="/" component={Home}/>
						<Route path="/stuff" component={Stuff}/>
						<Route path="/contact" component={Contact}/>
					</div>
				</div>
			</HashRouter>
		)
	}
}

export default SPA;