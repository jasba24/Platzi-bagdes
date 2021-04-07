import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Home from "../pages/Home"
import BadgeNew from "../pages/Container/BadgeNewContainer"
import Badges from "../pages/Container/BadgesContainer"
import NotFound from "../pages/NotFound"
import NavBar from "./NavBar"
import BadgeEdit from '../pages/Container/BadgeEditContainer';
import BadgeDetails from '../pages/Container/BadgeDetailsContainer';

function App() {
	return (
		<BrowserRouter>
			<NavBar></NavBar>
			<Switch>
				<Route exact path="/" component={Home}></Route>
				<Route exact path="/badges" component={Badges}></Route>
				<Route exact path="/badges/new" component={BadgeNew}></Route>
				<Route exact path="/badges/:badgeId" component={BadgeDetails}></Route>
				<Route exact path="/badges/:badgeId/edit" component={BadgeEdit}></Route>
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	)
}

export default App
