import React, { Component } from "react"

import "./styles/Badges.css"
import logoTwitter from "../images/twitter.svg"

import { Link } from "react-router-dom"

import confLogo from "../images/platziconf-logo.svg"
import BadgesList from "../components/BadgesList"

export class Badges extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: {
				results: []
			},
		}
		console.log("1. constructor()")
	}
	componentDidMount() {
		this.fetchCharacters()
	}

	fetchCharacters = async () => {
		const response = await fetch("https://rickandmortyapi.com/api/character")
		const data = await response.json()

		this.setState({
			data
		})
	}

	componentDidUpdate(prevProps, prevState) {
		console.log("5, componentDidUpdate")
		console.log({
			prevProps: prevProps,
			prevState: prevState,
		})

		console.log({
			pros: this.props,
			state: this.state,
		})
	}

	componentWillUnmount() {
		console.log("6, componentWillUnmount");
		clearTimeout(this.timeoutID)
	}

	render() {
		console.log("2, render()")
		return (
			<>
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
					<div className="Badges__buttons">
						<Link to="/badges/new" className="btn btn-primary">
							New Badge
						</Link>
					</div>
				</div>

				<div className="Badges__list">
					<div className="Badges__container">
						<BadgesList badges={this.state.data} img={logoTwitter} />
					</div>
				</div>
			</>
		)
	}
}

export default Badges
