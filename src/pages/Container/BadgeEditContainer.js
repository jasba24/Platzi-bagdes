import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../styles/BadgeEdit.css'
import BadgeEdit from '../BadgeEdit'
import api from '../../api'
import PageLoading from '../../components/PageLoading'

function BadgeEditContainer(props) {
  const location = useLocation()
  const navigate = useNavigate()
  const badgeId = location.pathname.split('/')[2]
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    twitter: ''
  })

  const fetchData = async e => {
    setLoading(true)
    setError(null)

    try {
      const data = await api.badges.read(badgeId)

      setLoading(false)
      setForm(data)
    } catch (error) {
      setLoading(false)
      setError(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleChange = e => {
    // const nextForm = this.state.form
    // nextForm[e.target.name] = e.target.value
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      await api.badges.update(badgeId, form)
      setLoading(false)

      navigate("/badges")
    } catch (error) {
      setLoading(false)
      setError(error)
    }
  }

  if (loading) {
    return <PageLoading />
  }
  if (form === undefined) {
    return null
  }

  return (
    <>
      <BadgeEdit
        firstName={form.firstName}
        lastName={form.lastName}
        email={form.email}
        jobTitle={form.jobTitle}
        twitter={form.twitter}
        onChange={handleChange}
        onSubmit={handleSubmit}
        error={error}
        formValues={form}
      />
    </>
  )
}

export default BadgeEditContainer
