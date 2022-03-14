import React, { useEffect, useState } from 'react'

import PageLoading from '../../components/PageLoading'
import PageError from '../../components/PageError'
import api from '../../api'
import BadgeDetails from '../BadgeDetails'

function BadgeDetailsContainer() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [data, setData] = useState(undefined)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    setLoading(true)
    setError(null)

    try {
      const data = await api.badges.read(this.props.match.params.badgeId)

      setLoading(false)
      setData(data)
    } catch (error) {
      setLoading(false)
      setError(error)
    }
  }

  const handleOpenModal = (e) => {
    setModalIsOpen(true)
  }

  const handleCloseModal = (e) => {
    setModalIsOpen(false)
  }

  const handleDeleteBadge = async (e) => {
    setLoading(true)
    setError(null)

    try {
      await api.badges.remove(this.props.match.params.badgeId)
      setLoading(false)

      this.props.history.push('/badges')
    } catch (error) {
      setLoading(false)
      setError(error)
    }
  }

  if (loading) {
    return <PageLoading />
  }

  if (error) {
    return <PageError error={error} />
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
