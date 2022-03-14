import React, { useEffect, useState } from 'react'

import api from '../../api'
import PageLoading from '../../components/PageLoading'
import PageError from '../../components/PageError'
import Badges from '../Badges'

function BadgesContainer() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [data, setData] = useState(undefined)
  // const [intervalId, setIntervalId] = useState(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    setLoading(true)
    setError(null)

    try {
      const dataList = await api.badges.list()
			console.log({dataList});
      setLoading(false)
      setData(dataList)
			console.log({data});
    } catch (error) {
      setLoading(false)
      setError(error)
    }
  }

  if (loading === true && !data) {
    return <PageLoading />
  }

  if (error) {
    return <PageError error={error} />
  }

  return (
    <>
      <Badges data={data} loading={loading} />
    </>
  )
}

export default BadgesContainer
