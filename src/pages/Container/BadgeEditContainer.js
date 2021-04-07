import React, { Component } from "react"
import "../styles/BadgeEdit.css"
import BadgeEdit from "../BadgeEdit"
import api from "../../api"
import PageLoading from "../../components/PageLoading"

class BadgeEditContainer extends Component {
	state = {
		loading: true,
		error: null,
		form: {
			firstName: "",
			lastName: "",
			email: "",
			jobTitle: "",
			twitter: "",
		},
	}

	componentDidMount() {
		this.fetchData()
	}

	fetchData = async e => {
		this.setState({
			loading: true,
			error: null,
		})

		try {
			const data = await api.badges.read(this.props.match.params.badgeId)

			this.setState({
				loading: false,
				form: data,
			})
		} catch (error) {
			this.setState({
				loading: false,
				error,
			})
		}
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
			await api.badges.update(this.props.match.params.badgeId, this.state.form)
			this.setState({ loading: false })

			this.props.history.push("/badges")
		} catch (error) {
			this.setState({ loading: false, error: error })
		}
	}

	render() {
		const form = this.state.form
		if (this.state.loading) {
			return <PageLoading />
		}
		return (
			<>
				<BadgeEdit
					firstName={form.firstName}
					lastName={form.lastName}
					email={form.email}
					jobTitle={form.jobTitle}
					twitter={form.twitter}
					onChange={this.handleChange}
					onSubmit={this.handleSubmit}
					error={this.state.error}
					formValues={this.state.form}
				/>
			</>
		)
	}
}

export default BadgeEditContainer
