const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
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
    required: true,
  },
  tags: [{
    type: String,
  }],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

})

const Event = mongoose.model('Event', EventSchema);

module.exports = Event;
