import React from 'react'
import './styles/Home.css'
import logo from '../images/platziconf-logo.svg'
import astronauts from '../images/astronauts.svg'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="home__container">
      <div className="home__description">
        <img src={logo} alt="Logo" />
        <h1>Print your badges</h1>
        <small>The easiest way to manage your conference</small>
        <Link to="/badges" className="btn btn-primary">
          Start now
        </Link>
      </div>
      <div className="home__img">
        <img src={astronauts} alt="decoration" />
      </div>
    </div>
  )
}


