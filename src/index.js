import React from "react"
import ReactDOM from "react-dom"
import md5 from "md5"
import "bootstrap/dist/css/bootstrap.css"

import "./global.css"
import Badge from "./components/Badge"

const container = document.getElementById("app")

ReactDOM.render(
	<Badge
		firstName="Richard"
		lastName="Kaufman"
		jobTitle="Frontend Enginner"
		twitter="sparragus"
	/>, container)