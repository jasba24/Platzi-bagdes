import React, { Component } from "react"

import "./styles/BadgeList.css"

export class BadgesList extends Component {
	render() {
		return (
			<ul className="list-unstyled">
				{this.props.badges.results.map(badge => {
					return (
						<li key={badge.id} className="list__container">
							<div className="list__icon">
								<img src={badge.image} alt="avatar del usuario" />
							</div>
							<div className="list__detais">
								<h1 className="list__title">
									{badge.name}
								</h1>
								<a href="https://twitter.com/@jasba24" target="_blank" rel="noopener noreferrer" className="list__social">
									<img src={this.props.img} alt="logo de la red social" /> <span>@{badge.origin.name}</span>
								</a>
								<p>{badge.location.name}</p>
							</div>
						</li>
					)
				})}
			</ul>
		)
	}
}

export default BadgesList
