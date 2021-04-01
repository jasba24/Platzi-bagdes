import React, { Component } from "react"

import "./styles/Badges.css"

import Navbar from "../components/NavBar"
import confLogo from "../images/badge-header.svg"
import BadgesList from "../components/BadgesList"

export class Badges extends Component {
	state = {
		data: [],
	}
	render() {
		return (
			<div>
				<Navbar />

				<div className="Badges">
					<div className="Badges__hero">
						<div className="Badges__container">
							<img
								src={confLogo}
								alt="Conf logo"
								className="Badges__conf-logo"
							/>
						</div>
					</div>
				</div>

				<div className="Badges__container">
					<div className="Badges__buttons"></div>
					<a href="/badges/new" className="btn btn-primary">
						New Badge
					</a>
				</div>

				<div className="Badges__list">
					<div className="Badges__container">
						<BadgesList badges={this.state.data} />
					</div>
				</div>
			</div>
		)
	}
}

export default Badges
