import React, { Component } from 'react'

export class BadgesList extends Component {
	render() {
		return (
			<ul className="list-unstyled">
              {this.props.badges.map(badge => {
                return (
                  <li key={badge.id}>
                    <p>
                      {badge.firstName} {badge.lastName}
                    </p>
                  </li>
                )
              })}
            </ul>
		)
	}
}

export default BadgesList
