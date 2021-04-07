import React, { Component } from "react"
import api from "../../api"
import PageLoading from "../../components/PageLoading"
import BadgeNew from "../BadgeNew"

class BadgeNewContainer extends Component {
	state = {
		loading: false,
		error: null,
		form: {
			firstName: "",
			lastName: "",
			email: "",
			jobTitle: "",
			twitter: "",
		},
	}

	handleChange = e => {
		// const nextForm = this.state.form
		// nextForm[e.target.name] = e.target.value

		this.setState({
			form: {
				...this.state.form,
				[e.target.name]: e.target.value,
			},
		})
	}

	handleSubmit = async e => {
		e.preventDefault()
		this.setState({ loading: true, error: null })

		try {
			await api.badges.create(this.state.form)
			this.setState({ loading: false })

			this.props.history.push("/badges")
		} catch (error) {
			this.setState({ loading: false, error: error })
		}
	}

	render() {
		if (this.state.loading) {
			return <PageLoading />
		}
		return (
			<>
				<BadgeNew
					form={this.state.form}
					onChange={this.handleChange}
					onSubmit={this.handleSubmit}
				/>
			</>
		)
	}
}

export default BadgeNewContainer
