const express = require('express');
const app = express();
// const oldEvents = require('./routes/events');
// const oldProfiles = require('./routes/profiles');
const cors = require('cors');

const passport = require("passport"); 
const localStrategy = require("./passport.js"); 	
const connectDB = require("./db/db.js"); 
const session = require("express-session"); 
require('dotenv').config()
const bcrypt = require("bcrypt"); 
const User = require("./models/User")
const users = require('./controllers/userController.js')
const event = require('./controllers/eventController2.js')
const profile = require('./controllers/profileController2.js')
const bodyParser = require("body-parser"); 
const cookieParser = require("cookie-parser");

connectDB();
app.use(cors({origin: 'http://localhost:3000', methods: 'GET,POST,PUT,DELETE', credentials: true}));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

console.log(process.env.SECRET)

app.use( 
	session({ 
		secret: process.env.SECRET, 
		resave: false, 
		saveUninitialized: false, 
        cookie: {
            secure: false,
            httpOnly: true,
            sameSite: 'lax'
        }
	}) 
);

app.use(cookieParser());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session()); 
passport.serializeUser((user, done) => done(null, user.id)); 
passport.deserializeUser(async (id, done) => {
	try {
	  const user = await User.findById(id);
	  done(null, user);
	} catch (err) {
	  done(err, null);
	}
});

// app.use(oldEvents)
// // app.use(oldProfiles)
app.use(users)
app.use(event)
app.use(profile)

const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

