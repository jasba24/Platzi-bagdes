import React from "react"
import "./styles/NotFound.css"
import img404 from "../images/img404.jpg"

function NotFound() {
	return (
		<div className="error__container">
			<img src={img404} alt=""/>
			<h1>Ups! error 404</h1>
		</div>
	)
}

export default NotFound
