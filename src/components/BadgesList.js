import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

import './styles/BadgeList.css'
import Gravatar from './Gravatar'

function useSearchBadges(badges) {
  const [query, setQuery] = useState('')
  const [filteredBadges, setFilteredBadges] = useState(badges)

  useMemo(() => {
    const result = badges.filter((badge) => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase())
    })

    setFilteredBadges(result)
  }, [badges, query])

  return { query, setQuery, filteredBadges }
}

function BadgesList(props) {
  const badges = props.badges

  const { query, setQuery, filteredBadges } = useSearchBadges(badges)

  if (filteredBadges.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label>Filter Badges</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
            }}
          />
        </div>
        <h3>No badges were found</h3>
        <Link className="btn btn-primary" to="/badges/new">
          Create new badge
        </Link>
      </div>
    )
  }
  return (
    <div className="BadgesList">
      <div className="form-group">
        <label>Filter Badges</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
          }}
        />
      </div>
      <ul className="list-unstyled">
        {filteredBadges.map((badge) => {
          return (
            <Link
              to={`/badges/${badge.id}`}
              key={badge.id}
              className="list__container text-reset text-decoration-none"
            >
              <div className="list__icon">
                <Gravatar email={badge.email} alt="avatar del usuario" />
              </div>
              <div className="list__detais">
                <h1 className="list__title">
                  {badge.firstName} {badge.lastName}
                </h1>
                <Link
                  to="https://twitter.com/@jasba24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="list__social"
                >
                  <img src={props.img} alt="logo de la red social" />{' '}
                  <span>@{badge.twitter}</span>
                </Link>
                <p>{badge.jobTitle}</p>
              </div>
            </Link>
          )
        })}
      </ul>
    </div>
  )
}

export default BadgesList
