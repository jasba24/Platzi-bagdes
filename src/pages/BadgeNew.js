import React, { Component } from "react"
import "./styles/BadgeNew.css"
import header from "../images/badge-header.svg"
import Badge from "../components/Badge"
import BadgeForm from "../components/BadgeForm"

class BadgeNew extends Component {
	state = {
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

	render() {
		return (
			<>
				<div className="BadgeNew__hero">
					<img src={header} alt="logo" className="img-fluid" />
				</div>

				<div className="container">
					<div className="row">
						<div className="col-6">
							<Badge
								firstName={this.state.form.firstName}
								lastName={this.state.form.lastName}
								twitter={this.state.form.twitter}
								jobTitle={this.state.form.jobTitle}
								email={this.state.form.email}
								avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
							/>
						</div>
						<div className="col-6">
							<BadgeForm
								onChange={this.handleChange}
								formValues={this.state.form}
							/>
						</div>
					</div>
				</div>
			</>
		)
	}
}

export default BadgeNew
