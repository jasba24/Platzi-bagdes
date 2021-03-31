import React from "react"
import "./styles/BadgeNew.css"
import header from "../images/badge-header.svg"
import NavBar from "../components/NavBar"
import Badge from "../components/Badge"

class BadgeNew extends React.Component {
	render() {
		return (
			<div>
				<NavBar />
				<div className="BadgeNew__hero">
					<img src={header} alt="logo" className="img-fluid"/>
				</div>

				<div className="container">
					<div className="row">
						<div className="col">
							<Badge firstName="Richard" lastName="Kaufman" twitter="sparragus" jobTitle="Fronted Enginner" avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default BadgeNew