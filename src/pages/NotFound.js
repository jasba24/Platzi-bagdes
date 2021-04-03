import React from "react"
import "./styles/NotFound.css"
import logo from "../images/badge-header.svg"

function NotFound() {
	return (
		<div className="error__container">
			<img src={logo} alt=""/>
			<h1>404 not found</h1>
		</div>
	)
}

export default NotFound
