import React, { Component } from "react"

import "./styles/Badges.css"

import Navbar from "../components/NavBar"
import confLogo from "../images/badge-header.svg"

export class Badges extends Component {
  state = {
    data: [],
  }
  render() {
    return (
      <div>
        <Navbar />

        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                src={confLogo}
                alt="Conf logo"
                className="Badges__conf-logo"
              />
            </div>
          </div>
        </div>

        <div className="Badge__container">
          <div className="Badges__buttons"></div>
          <a href="/badges/new" className="btn btn-primary">
            New Badge
          </a>
        </div>

        <div className="Bagdes__list">
          <div className="Bagdes__container">
            <ul className="list-unstyled">
              {this.state.data.map(badge => {
                return (
                  <li key={badge.id}>
                    <p>
                      {badge.firstName} {badge.lastName}
                    </p>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Badges
