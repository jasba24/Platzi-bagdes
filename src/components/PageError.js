import React from "react"
import { Link } from "react-router-dom"

import "./styles/PageError.css"

function PageError(props) {
	return (
		<div className="PageError">
			❌{props.error.message}😱
			<Link to="/" className="btn btn-primary">Come back</Link>
		</div>
	)
}

export default PageError
