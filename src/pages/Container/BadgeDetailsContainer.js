import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import PageLoading from '../../components/PageLoading'
import PageError from '../../components/PageError'
import api from '../../api'
import BadgeDetails from '../BadgeDetails'

function BadgeDetailsContainer(props) {
  const location = useLocation()
  const navigate = useNavigate()
  const badgeId = location.pathname.split('/')[2]
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [data, setData] = useState(undefined)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const fetchData = async () => {
    setLoading(true)
    setError(null)

    try {
      const data = await api.badges.read(badgeId)

      setLoading(false)
      setData(data)
    } catch (error) {
      setLoading(false)
      setError(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleOpenModal = e => {
    setModalIsOpen(true)
  }

  const handleCloseModal = e => {
    setModalIsOpen(false)
  }

  const handleDeleteBadge = async e => {
    setLoading(true)
    setError(null)

    try {
      const res = await api.badges.remove(badgeId)
      console.log(res)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setError(error)
    }
    navigate('/badges')
  }

  if (loading) {
    return <PageLoading />
  }

  if (error) {
    return <PageError error={error} />
  }

  if (data === undefined) {
    return null
  }

  return (
    <BadgeDetails
      onCloseModal={handleCloseModal}
      onOpenModal={handleOpenModal}
      modalIsOpen={modalIsOpen}
      onDeleteBadge={handleDeleteBadge}
      badge={data}
    />
  )
}

export default BadgeDetailsContainer
