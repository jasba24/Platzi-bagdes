import React from 'react'

import './styles/Badges.css'
import logoTwitter from '../images/twitter.svg'

import { Link } from 'react-router-dom'

import confLogo from '../images/platziconf-logo.svg'
import BadgesList from '../components/BadgesList'
import MiniLoader from '../components/MiniLoader'

function Badges(props) {
  console.log({props})
  return (
    <>
      <div className="Badges">
        <div className="Badges__hero">
          <div className="Badges__container">
            <img src={confLogo} alt="Conf logo" className="Badges__conf-logo" />
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
					<BadgesList badges={props.data} img={logoTwitter} />
					{props.loading && <MiniLoader />}
				</div>
			</div>
    </>
  )
}

export default Badges
