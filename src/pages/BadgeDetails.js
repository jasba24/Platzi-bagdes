import React from 'react'
import { Link } from 'react-router-dom'

import './styles/BadgeDetails.css'
import Badge from '../components/Badge'
import confLogo from '../images/platziconf-logo.svg'
import DeleteBadgeModal from '../components/DeleteBadgeModal'

function BadgeDetails(props) {
  const { badge } = props
  return (
    <>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={confLogo} alt="Logo de la Conferencia" />
            </div>
            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>
                {badge.firstName} {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <Badge
              firstName={badge.firstName}
              lastName={badge.lastName}
              email={badge.email}
              twitter={badge.twitter}
              jobTitle={badge.jobTitle}
            />
          </div>
          <div className="col">
            <h1>Actions</h1>
            <div>
              <Link
                className="btn btn-primary mr-4 mt-4"
                to={`/badges/${badge.id}/edit`}
              >
                Edit
              </Link>
              <button
                onClick={props.onOpenModal}
                className="btn btn-danger mt-4"
              >
                Delete
              </button>
              <DeleteBadgeModal
                isOpen={props.modalIsOpen}
                onClose={props.onCloseModal}
                onDeleteBadge={props.onDeleteBadge}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BadgeDetails
