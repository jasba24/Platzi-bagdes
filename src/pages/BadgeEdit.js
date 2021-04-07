import React from "react"
import "./styles/BadgeEdit.css"
import confLogo from "../images/platziconf-logo.svg"
import Badge from "../components/Badge"
import BadgeForm from "../components/BadgeForm"

function BadgeEdit(props) {
	const { firstName, lastName, jobTitle, twitter, email } = props
	return (
		<>
			<div className="BadgeEdit__hero">
				<img
					src={confLogo}
					alt="logo"
					className="BadgeEdit__hero--image img-fluid"
				/>
			</div>

			<div className="container">
				<div className="row">
					<div className="col-6">
						<Badge
							firstName={firstName || "FIRST_NAME"}
							lastName={lastName || "LAST_NAME"}
							twitter={twitter || "twitter"}
							jobTitle={jobTitle || "JOB_TITLE"}
							email={email || "EMAIL"}
						/>
					</div>
					<div className="col-6">
						<h1>Edit Attendant</h1>
						<BadgeForm
							onChange={props.handleChange}
							onSubmit={props.handleSubmit}
							formValues={props.formValues}
							error={props.error}
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default BadgeEdit
