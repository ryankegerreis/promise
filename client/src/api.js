import axios from 'axios'
const baseURL = process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:5000/api'
export { baseURL }
const service = axios.create({
  baseURL: baseURL,
  withCredentials: true
})

const errHandler = err => {
  console.error(err)
  if (err.response && err.response.data) {
    console.error("API response", err.response.data)
    throw err.response.data.message
  }
  throw err
}

export default {
  service: service,

  // This method is synchronous and returns true or false
  // To know if the user is connected, we just check if we have a value for localStorage.getItem('user')
  isLoggedIn() {
    return localStorage.getItem('user') != null
  },

  // This method returns the user from the localStorage
  // Be careful, the value is the one when the user logged in for the last time
  getLocalStorageUser() {
    return JSON.parse(localStorage.getItem('user'))
  },

  // This method signs up and logs in the user
  signup(userInfo) {
    return service
      .post('/signup', userInfo)
      .then(res => {
        // If we have localStorage.getItem('user') saved, the application will consider we are loggedin
        localStorage.setItem('user', JSON.stringify(res.data))
        return res.data
      })
      .catch(errHandler)
  },

  login(username, password) {
    return service
      .post('/login', {
        username,
        password,
      })
      .then(res => {
        // If we have localStorage.getItem('user') saved, the application will consider we are loggedin
        localStorage.setItem('user', JSON.stringify(res.data))
        return res.data
      })
      .catch(errHandler)
  },

  //Logout
  logout() {
    localStorage.removeItem('user')
    return service
      .get('/logout')
  },

  // This is an example on how to use this method in a different file
  // api.getCountries().then(countries => { /* ... */ })
  getGoals() {
    return service
      .get('/goals')
      .then(res => res.data)
      .catch(errHandler)
  },

  getMyGoals() {
    return service
      .get('/mygoals')
      .then(res => res.data)
      .catch(errHandler)
  },

  getTheGoal(id) {
    console.log('get the goal')
    return service
      .get(`/goaldetails/${id}`)
      .then(res => res.data)
      .catch(errHandler)
  },

  addGoal(body) {
    return service
      .post('/savegoal', body)
      .then(res => res.data)
      .catch(errHandler)
  },

  getSecret() {
    return service
      .get('/secret')
      .then(res => res.data)
      .catch(errHandler)
  },

  addPicture(file) {
    const formData = new FormData()
    formData.append("picture", file)
    return service
      .post('/endpoint/to/add/a/picture', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(res => res.data)
      .catch(errHandler)
  },

  createComment(comment, goalId) {
    console.log(comment)
    return service
      .post(`/savecomment/${goalId}`, comment)
      .then(res => res.data)
      .catch(errHandler)
  },

  getTheComments(id) {
    console.log('got the comments')
    return service
      .get(`/getcomment/${id}`)
      .then(res => res.data)
      .catch(errHandler)
  },

  saveGoal(theGoal) {
    return service
      .post(`/savegoal`, theGoal)
      .then(res => res.data)
      .catch(errHandler)
  },

  editGoal(id) {
    return service
      .post(`/editgoal/`, id)
      .then(res => res.data)
      .catch(errHandler)
  },

  deleteGoal(id) {
    return service
      .delete(`/deletegoal/${id}`)
      .then(res => res.data)
      .catch(errHandler)
  },


}