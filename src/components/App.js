import React from "react"
import { BrowserRouter, Route, Redirect } from "react-router-dom"

import Home from "../pages/Home"
import BadgeNew from "../pages/BadgeNew"
import Badges from "../pages/Badges"
import NotFound from "../pages/NotFound"
import NavBar from "./NavBar"

function App() {
	return (
		<BrowserRouter>
			<NavBar></NavBar>
			<Route exact path="/" component={Home}></Route>
			<Route exact path="/badges" component={Badges}></Route>
			<Route exact path="/badges/new" component={BadgeNew}></Route>
			<Route path="/404" component={NotFound} />
			<Redirect from="*" to="/404"></Redirect>
		</BrowserRouter>
	)
}

export default App
