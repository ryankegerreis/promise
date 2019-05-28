function isLoggedIn(req, res, next) {
  console.log('isLoggedIn middleware')
  console.log(req)
  if (req.isAuthenticated()) next()
  else next({ status: 403, message: 'Unauthorized' })
}

module.exports = {
  isLoggedIn
}
