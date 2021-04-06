import React, { Component } from "react"

import api from "../api"
import "./styles/Badges.css"
import logoTwitter from "../images/twitter.svg"

import { Link } from "react-router-dom"

import confLogo from "../images/platziconf-logo.svg"
import BadgesList from "../components/BadgesList"
import PageLoading from "../components/PageLoading"
import PageError from "../components/PageError"
import MiniLoader from '../components/MiniLoader';

export class Badges extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loading: true,
			error: null,
			data: undefined,
		}
	}
	componentDidMount() {
		this.intervalId = this.fetchData()

		setInterval(this.fetchData, 5000)
	}

	componentWillMount() {
		clearInterval(this.intervalId)
	}

	fetchData = async () => {
		this.setState({ loading: true, error: null })

		try {
			const data = await api.badges.list()
			this.setState({ loading: false, data: data })
		} catch (error) {
			this.setState({ loading: false, error: error })
		}
	}

	render() {
		if (this.state.loading === true && !this.state.data) {
			return <PageLoading />
		}

		if (this.state.error) {
			return <PageError error={this.state.error} />
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
							<MiniLoader />
						)}
					</div>
				</div>
			</>
		)
	}
}

export default Badges
