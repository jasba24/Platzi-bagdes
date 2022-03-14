import React, { useState } from 'react'
import api from '../../api'
import PageLoading from '../../components/PageLoading'
import BadgeNew from '../BadgeNew'

function BadgeNewContainer() {
  const [loading, setLoading] = useState(true)
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
      ...this.state.form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      await api.badges.create(this.state.form)
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
  return (
    <BadgeNew form={form} onChange={handleChange} onSubmit={handleSubmit} />
  )
}

export default BadgeNewContainer
