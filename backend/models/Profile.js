const mongoose = require('mongoose')

const ProfileSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    maxlength: 30,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  userDescription: {
    type: String,
    required: true,
    maxlength: 1000,
  },
  eventTags: {
    type: Array,
  },
  
  createdEvents: {
    type: Array,
  },
  savedEvents: {
    type: Array,
  },
  RsvpEvents: {
    type: Array,
  },
  previousEvents: {
    type: Array,
  },
})

module.exports = mongoose.model('Profile', ProfileSchema)
