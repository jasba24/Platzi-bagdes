import React from 'react'

function BadgeForm(props) {
  const { onSubmit, onChange, formValues, error } = props

  const handleClick = (e) => {
    console.log('button was clicked')
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input
            required
            onChange={onChange}
            className="form-control"
            name="firstName"
            type="text"
            value={formValues.firstName}
          />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input
            required
            onChange={onChange}
            className="form-control"
            name="lastName"
            type="text"
            value={formValues.lastName}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            required
            onChange={onChange}
            className="form-control"
            name="email"
            type="email"
            value={formValues.email}
          />
        </div>

        <div className="form-group">
          <label>Job Title</label>
          <input
            required
            onChange={onChange}
            className="form-control"
            name="jobTitle"
            type="text"
            value={formValues.jobTitle}
          />
        </div>

        <div className="form-group">
          <label>Twitter</label>
          <input
            required
            onChange={onChange}
            className="form-control"
            name="twitter"
            type="text"
            value={formValues.twitter}
          />
        </div>

        <button onClick={handleClick} className="btn btn-primary">
          Save
        </button>

        {error && (
          <p className="alert alert-danger mb-3" role="alert">
            {error.message}
          </p>
        )}
      </form>
    </>
  )
}

export default BadgeForm
