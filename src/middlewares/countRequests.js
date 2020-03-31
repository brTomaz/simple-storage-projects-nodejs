module.exports = (req, res, next) => {
  console.count('Amount of requests')

  return next()
}
