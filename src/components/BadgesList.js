import React, { Component } from "react"
import { Link } from "react-router-dom"

import "./styles/BadgeList.css"
import Gravatar from "./Gravatar"

export class BadgesList extends Component {
	render() {
		if (this.props.badges.length === 0) {
			return (
				<div>
					<h3>No badges were found</h3>
					<Link className="btn btn-primary" to="/badges/new">
						Create new badge
					</Link>
				</div>
			)
		}
		return (
			<ul className="list-unstyled">
				{this.props.badges.map(badge => {
					return (
						<Link
							to={`/badges/${badge.id}`}
							key={badge.id}
							className="list__container text-reset text-decoration-none"
						>
							<div className="list__icon">
								<Gravatar email={badge.email} alt="avatar del usuario" />
							</div>
							<div className="list__detais">
								<h1 className="list__title">
									{badge.firstName} {badge.lastName}
								</h1>
								<Link
									to="https://twitter.com/@jasba24"
									target="_blank"
									rel="noopener noreferrer"
									className="list__social"
								>
									<img src={this.props.img} alt="logo de la red social" />{" "}
									<span>@{badge.twitter}</span>
								</Link>
								<p>{badge.jobTitle}</p>
							</div>
						</Link>
					)
				})}
			</ul>
		)
	}
}

export default BadgesList
