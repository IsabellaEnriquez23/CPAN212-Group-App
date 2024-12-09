const mongoose = require("mongoose"); 

const userSchema = new mongoose.Schema({ 
	username: { type: String, unique: true }, 
    email: { type: String,  unique: true }, 
	password: { type: String, }, 
	firstName: { type: String, }, 
	lastName: { type: String,}, 
	birthday: { type: Date, },
	description: { type: String, }, 

	createdEvents: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Event',
	  }],
	  savedEvents: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Event',
	  }],
	  rsvpEvents: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Event',
	  }],
}); 

const User = mongoose.model("User", userSchema); 

module.exports = User; 