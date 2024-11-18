const { CustomError } = require('../errors/customError')

const errorMiddleware = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ msg: err.message })
  }
  return res.status(500).json({ msg: 'There seems to be an error. Try again.' })
}

module.exports = errorMiddleware
