const express = require("express"); 
const router = express.Router(); 
const Event = require('../models/Event')
const User = require('../models/User');
const passport = require("passport") 

router.post('/event', async (req, res) => {
    if (req.isAuthenticated()) {
        try {
            const {title, formatFromDate, formatToDate, location, time, description, locationType, monetaryType, tags} = req.body;
            // console.log('User ID:', req.user._id);
            const newEvent = new Event({ title, fromDate: formatFromDate, toDate: formatToDate, location, time, description, locationType, monetaryType,  tags, createdBy: req.user._id,});
            const savedEvent = await newEvent.save();

            await User.findByIdAndUpdate(
                req.user._id, 
                { $push: { createdEvents: savedEvent._id } },
                { new: true }
              );

            res.json(savedEvent);

          } catch (err) {
            console.error('Error creating event:', err);
            res.status(500).send('Error creating event');
          }
    } else {
    res.status(401).send('Not authenticated');
    }
});

router.put('/event/:id', async (req, res) => {
    try {
        const { title, formatFromDate, formatToDate, location, time, description, monetaryType, locationType, tags } = req.body;
        const event = await Event.findById(req.params.id);

        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }

        event.title = title;
        event.fromDate = formatFromDate;
        event.toDate = formatToDate;
        event.location = location;
        event.time = time;
        event.description = description;
        event.monetaryType = monetaryType;
        event.locationType = locationType;
        event.tags = tags;

        await event.save();

        res.json({ message: 'Event updated', event });
    } catch (error) {
        console.error('Error updating event:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

router.delete('/event', async (req, res) => {
    try {
        const { eventId } = req.body;
        // console.log("entered delete, looking for event")
        // console.log(event)

        if (!req.isAuthenticated()) {
            return res.status(401).send('Not authenticated');
        }
        
        const foundEvent = await Event.findByIdAndDelete(eventId);
        if (!foundEvent) {
            return res.status(404).send('Event not found');
          }

        if (foundEvent.createdBy.toString() !== req.user._id.toString()) {
            return res.status(403).send('You are not the creator of this event');
        }
    
        await User.findByIdAndUpdate(
            req.user._id,
            { $pull: { createdEvents: eventId } },
            { new: true }
        );
    
        res.status(200).send('Event deleted');
    } catch (err) {
        console.error('Error deleting event:', err);
        res.status(500).send('Error deleting event');
    }
});

router.get('/event', async (req, res) => {
    try {
        // fetch all events from db, return in descending date order (most in future first)
        const events = await Event.find().sort({ fromDate: -1 });

        res.json(events);
    } catch (err) {
        console.error('Error fetching events:', err);
        res.status(500).send('Error fetching events');
    }
});

router.get('/events/:id', async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }

        res.json(event);
    } catch (error) {
        console.error('Error fetching event:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router; 