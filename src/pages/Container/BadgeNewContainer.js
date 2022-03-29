import React, { useState } from 'react'
import api from '../../api'
import PageLoading from '../../components/PageLoading'
import BadgeNew from '../BadgeNew'

function BadgeNewContainer(props) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    twitter: ''
  })

  const handleChange = (e) => {
    // const nextForm = this.state.form
    // nextForm[e.target.name] = e.target.value

    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      await api.badges.create(form)
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
  if(error) {
    throw new Error(error)
  }
  return (
    <BadgeNew form={form} onChange={handleChange} onSubmit={handleSubmit} />
  )
}

export default BadgeNewContainer
