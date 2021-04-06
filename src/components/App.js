import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Home from "../pages/Home"
import BadgeNew from "../pages/BadgeNew"
import Badges from "../pages/Badges"
import NotFound from "../pages/NotFound"
import NavBar from "./NavBar"
import BadgeEdit from '../pages/BadgeEdit';
import BadgeDetails from '../pages/BadgeDetails';

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
