import React from "react"
import { Link } from "react-router-dom"

import "./styles/PageError.css"

function PageError(props) {
	return (
		<div className="PageError">
			<span role="img" aria-label="icono de error">❌</span>{props.error.message} <span role="img" aria-label="icono de error">😱</span>
			<Link to="/" className="btn btn-primary">Come back</Link>
		</div>
	)
}

export default PageError
