const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: 300,
  },
  fromDate: {
    type: Date,
    required: true,
  },
  toDate: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  time: {
    type: String,
  },
  description: {
    type: String,
    required: true,
    maxlength: 1000,
  },
  locationType: {
    type: String,
  },
  monetaryType: {
    type: String,
  },
  tags: {
    type: Array,
  },
  userId: {
    type: String
  }

})

module.exports = mongoose.model('Event', EventSchema)
