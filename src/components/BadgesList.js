import React, { Component } from "react"

export class BadgesList extends Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badges.map(badge => {
          return (
            <li key={badge.id}>
              <div>
                <img src={badge.avatarUrl} alt=""/>
              </div>
              <div>
                <h1>
                  {badge.firstName} {badge.lastName}
                </h1>
                <a>
                  <img src="" alt="" /> <span>@{badge.twitter}</span>
                </a>
                <p>{badge.jobTitle}</p>
              </div>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default BadgesList
