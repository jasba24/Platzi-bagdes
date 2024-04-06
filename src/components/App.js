import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import BadgeNew from '../pages/Container/BadgeNewContainer'
import Badges from '../pages/Container/BadgesContainer'
import NotFound from '../pages/NotFound'
import NavBar from './NavBar'
import BadgeEdit from '../pages/Container/BadgeEditContainer'
import BadgeDetails from '../pages/Container/BadgeDetailsContainer'

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/badges" element={<Badges />}></Route>
        <Route exact path="/badges/new" element={<BadgeNew />}></Route>
        <Route exact path="/badges/:badgeId" element={<BadgeDetails />}></Route>
        <Route
          exact
          path="/badges/:badgeId/edit"
          element={<BadgeEdit />}
        ></Route>
        <Route component={NotFound} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
