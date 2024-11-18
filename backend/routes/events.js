const express = require('express')
const router = express.Router()

const { getAllEvents, getEvent, getEventWithProfile, createEvent, updateEvent, deleteEvent, } = require('../controllers/eventController')

router.route('/events').get(getAllEvents).post(createEvent)
router.route('/events/:id').get(getEvent).put(updateEvent)
router.route('/events/:eid/:pid').get(getEventWithProfile)
router.route('/events/:id').delete(deleteEvent)
module.exports = router
