const Event = require('../models/Event')
const { createCustomError } = require('../errors/customError')
const asyncWrapper = require('../middleware/async')

const getAllEvents = asyncWrapper(async (req, res) => {
  const events = await Event.find({})
  res.status(200).json({ events })
})

const getEvent = asyncWrapper(async (req, res, next) => {
  const { id: eventID } = req.params
  const event = await Event.findOne({ _id: eventID })
  if (!event) {
    return next(createCustomError(`No event with id : ${eventID}`, 404))
  }

  res.status(200).json({ event })
}) 

const getEventWithProfile = asyncWrapper(async (req, res, next) => {
    const { eventId: eventID, profileId: profileID } = req.params
    
    const events = await Event.find({ _id: eventID, userId: profileID })
    res.status(200).json({ events })
  })

// const getEventWithTags = asyncWrapper(async (req, res, next) => {
// const { eventId: eventID } = req.params

// const events = await Event.find({ _id: eventID })
// res.status(200).json({ events })
// })

const createEvent = asyncWrapper(async (req, res) => {
    const event = await Event.create(req.body)
    res.status(201).json({ event })
  })

//will eventually create implementation in frontend
const deleteEvent = asyncWrapper(async (req, res, next) => {
  const { id: eventID } = req.params
  const event = await Event.findOneAndDelete({ _id: eventID })
  if (!event) {
    return next(createCustomError(`No event with id : ${eventID}`, 404))
  }
  res.status(200).json({ event })
})

const updateEvent = asyncWrapper(async (req, res, next) => {
  const { id: eventID } = req.params

  const event = await Event.findOneAndUpdate({ _id: eventID }, req.body)

  if (!event) {
    return next(createCustomError(`No event with id : ${eventID}`, 404))
  }

  res.status(200).json({ event })
})

module.exports = {
  getAllEvents,
  getEvent,
  getEventWithProfile,
  createEvent,
  updateEvent,
  deleteEvent,
}
