import React, { Component } from "react"

import Skeleton from "react-loading-skeleton"

import "./styles/Badges.css"
import logoTwitter from "../images/twitter.svg"

import { Link } from "react-router-dom"

import confLogo from "../images/platziconf-logo.svg"
import BadgesList from "../components/BadgesList"

export class Badges extends Component {
	constructor(props) {
		super(props)
		this.state = {
			nextPage: 1,
			loading: true,
			error: null,
			data: {
				results: [],
			},
		}
	}
	componentDidMount() {
		this.fetchCharacters()
	}

	fetchCharacters = async () => {
		this.setState({ loading: true, error: null })

		try {
			const response = await fetch(
				`https://rickandmortyapi.com/api/character?page=${this.state.nextPage}`
			)
			const data = await response.json()

			this.setState({
				loading: false,
				data: {
					info: data.info,
					results: [].concat(this.state.data.results, data.results),
				},
				nextPage: this.state.nextPage + 1,
			})
		} catch (error) {
			this.setState({ loading: false, error })
		}
	}

	render() {
		if (this.state.error) {
			return `Error: ${this.state.error.message}`
		}
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
						{this.state.loading && (
							<Skeleton count={5} height="120px"></Skeleton>
						)}
						{!this.state.loading && (
							<>
								<button
									onClick={() => this.fetchCharacters()}
									className="btn btn-primary load"
								>
									Load More
								</button>
							</>
						)}
					</div>
				</div>
			</>
		)
	}
}

export default Badges
