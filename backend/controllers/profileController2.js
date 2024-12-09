const express = require("express"); 
const router = express.Router(); 
const User = require('../models/User');
const Event = require('../models/Event');
const passport = require("passport") 

router.get('/profile/events', async (req, res) => {
    try {
        if (!req.isAuthenticated()) {
            return res.status(401).send('Not authenticated');
        }

        const user = await User.findById(req.user._id)
            .populate('createdEvents')  
            .populate('rsvpEvents')     
            .populate('savedEvents') 

        //for previous events, from both created events and rsvpd events (attended events)
        const currentDate = new Date();
        const previousCreatedEvents = user.createdEvents.filter(event => new Date(event.toDate) < currentDate);
        const previousRsvpEvents = user.rsvpEvents.filter(event => new Date(event.toDate) < currentDate);
        const previousEvents = [...previousCreatedEvents, ...previousRsvpEvents];

        res.json({
            createdEvents: user.createdEvents,
            rsvpEvents: user.rsvpEvents,
            savedEvents: user.savedEvents,
            previousEvents
    });
    } catch (err) {
        console.error('Error fetching events:', err);
        res.status(500).send('Error fetching events');
    }
});

router.post('/profile/rsvp', async (req, res) => {
    try {
      if (!req.isAuthenticated()) {
        return res.status(401).send('Not authenticated');
      }
      
      const userId = req.user._id;
      const { eventId } = req.body.data;
      
      const event = await Event.findById(eventId);
      if (!event) {
        return res.status(404).send('Event not found');
      }
  
      const user = await User.findById(userId);
      if (user.rsvpEvents.includes(event._id)) {
        console.log('Already RSVPd to this event')
        return
      }
      if (event.createdBy.toString() === req.user._id.toString()) {
        console.log('You cannot RSVP to your own event')
        return
      }

      user.rsvpEvents.push(eventId);
      await user.save();
  
      console.log("RSVP was successful!")
      res.json({
        rsvpEvents: user.rsvpEvents
      });
    } catch (err) {
      console.error('Error during RSVP:', err);
      res.status(500).send('Error during RSVP');
    }
});

module.exports = router; 