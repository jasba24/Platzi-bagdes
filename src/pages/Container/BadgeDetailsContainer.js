import React, { useEffect, useState } from 'react'

import PageLoading from '../../components/PageLoading'
import PageError from '../../components/PageError'
import api from '../../api'
import BadgeDetails from '../BadgeDetails'

function BadgeDetailsContainer(props) {
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
      const data = await api.badges.read(props.match.params.badgeId)

      setLoading(false)
      setData(data)
    } catch (error) {
      setLoading(false)
      setError(error)
    }
  }

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
      await api.badges.remove(props.match.params.badgeId)
      setLoading(false)

      props.history.push('/badges')
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

  if (data === undefined) {
    return null
  }

  console.log('container', props)
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
