const express = require("express"); 
const router = express.Router(); 
const User = require("../models/User"); 
const passport = require("passport") 
const bcrypt = require("bcrypt"); 

router.post('/register', async (req, res) => {
	const { username, email, password, firstName, lastName, birthday, description} = req.body;
	const hashedPassword = await bcrypt.hash(password, 10);
	console.log("Entered register")
	console.log(`Params: ${username}, ${password}, ${email}, +more`)
	try {
	  const newUser = new User({ username, email, password: hashedPassword, firstName, lastName, birthday, description });
	  console.log(newUser)		
	  await newUser.save();
	  console.log("registered")
	  res.status(201).send('User registered successfully');
	} catch (err) {
		console.log("not registered")
	//   res.status(500).send('Error registering user');
		console.error(err)
		res.status(500).json({ message: 'Error registering user', error: err.message });
	}
});
  
router.get('/profile', (req, res) => {
	if (req.isAuthenticated()) {
		return res.json({ user: req.user });
	} else {
		return res.status(401).send('Not authenticated');
	}
});

//added
router.post('/profile', async (req, res) => {
	if (req.isAuthenticated()) {
	  const {description, password} = req.body;
	  const user = req.user; 
	  user.description = description || user.description;

	  //needs this check otherwise it gives "error = new Error('data and salt arguments required')"
	  if (password && password !== "") {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
      }

	  user.save()
		.then(updatedUser => res.json({ user: updatedUser }))
		.catch(err => res.status(400).send(err));
	} else {
	  res.status(401).send('Not authenticated');
	}
  });

router.post('/login', passport.authenticate('local', {
	successRedirect: '/profile',
	failureRedirect: '/login',
	failureFlash: true,
}));

router.get('/logout', (req, res) => {
	req.logout((err) => {
		if (err) return res.status(500).send('Error logging out');
		res.redirect('/');
	});
});

module.exports = router; 
