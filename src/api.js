const BASE_URL = 'https://platzi-badges-api.herokuapp.com/api/badges'

async function callApi(endpoint, options) {
  const url = BASE_URL + endpoint
  const response = await fetch(url, options)
  const data = await response.json()

  return data
}

const api = {
  badges: {
    list() {
      // throw new Error("500: Server Error")
      return callApi('/')
    },
    create(badge) {
      // throw new Error("500: Server Error")
      return callApi('/', {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(badge)
      })
    },
    read(badgeId) {
      return callApi(`/${badgeId}`)
    },
    update(badgeId, updates) {
      return callApi(`/${badgeId}`, {
        method: 'PUT',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updates)
      })
    },
    // Lo hubiera llamado `delete`, pero `delete` es un keyword en JavaScript asi que no es buena idea :P
    remove(badgeId) {
      return callApi(`/${badgeId}`, {
        method: 'DELETE'
      })
    }
  }
}

export default api
