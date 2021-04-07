import React from "react"
import "./styles/BadgeNew.css"
import confLogo from "../images/platziconf-logo.svg"
import Badge from "../components/Badge"
import BadgeForm from "../components/BadgeForm"

function BadgeNew (props) {
		return (
			<>
				<div className="BadgeNew__hero">
					<img
						src={confLogo}
						alt="logo"
						className="BadgeNew__hero--image img-fluid"
					/>
				</div>

				<div className="container">
					<div className="row">
						<div className="col-6">
							<Badge
								firstName={props.form.firstName || "FIRST_NAME"}
								lastName={props.form.lastName || "LAST_NAME"}
								twitter={props.form.twitter || "twitter"}
								jobTitle={props.form.jobTitle || "JOB_TITLE"}
								email={props.form.email}
							/>
						</div>
						<div className="col-6">
							<h1>New Attendant</h1>
							<BadgeForm
								onChange={props.onChange}
								onSubmit={props.onSubmit}
								formValues={props.form}
								error={props.error}
							/>
						</div>
					</div>
				</div>
			</>
		)
}

export default BadgeNew
