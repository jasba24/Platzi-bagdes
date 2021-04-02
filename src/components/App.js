import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import BadgeNew from "../pages/BadgeNew"
import Badges from "../pages/Badges"

function App() {
	return (
		<BrowserRouter>
				<Route exact path="/badges" component={Badges}></Route>
				<Route exact path="/badges/new" component={BadgeNew}></Route>
		</BrowserRouter>
	)
}

export default App
