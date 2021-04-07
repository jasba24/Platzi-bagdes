import React, { Component } from "react"

import api from "../../api"
import PageLoading from "../../components/PageLoading"
import PageError from "../../components/PageError"
import Badges from "../Badges"

class BadgesContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loading: true,
			error: null,
			data: undefined,
		}
	}
	componentDidMount() {
		this.fetchData()

		this.intervalId = setInterval(this.fetchData, 5000)
	}

	componentWillUnmount() {
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
				<Badges data={this.state.data} loading={this.props.loading} />
			</>
		)
	}
}

export default BadgesContainer
