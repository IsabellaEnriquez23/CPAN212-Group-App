import { useNavigate } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import Button from 'react-bootstrap/Button';
import "./Events.css";
import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Events = (props) => {
    const navigate = useNavigate()
    const [events, setEvents] = useState(null)

    const details = (event) => {
        navigate(`/details/${event._id}`)
    }
    const editEvent = (event) => {
        navigate(`/edit/${event._id}`)
    }
    const deleteEvent = (event) => {
        // console.log(event)
        if (props.user){
            // console.log(event._id)
            try {
                axios.delete('/event', {data: { eventId: event._id }}, { withCredentials: true });
                navigate(`/home`)
            } catch (error) {
                console.error('Error deleting:', error);
            }
        }
    }
    const tryRsvp = (event) =>{
        if (props.user){
            // console.log(event)
            try {
                axios.post('/profile/rsvp', {data: { eventId: event._id }}, { withCredentials: true });
                // axios.post('/profile/rsvp', {event}, { withCredentials: true });
            } catch (error) {
                console.error('Error rsvp-ing:', error);
            }
        }
        else{
            navigate(`/login`)
        }
    }
    
    return(
        <div>
            {props.title ? <h2>{props.title}</h2> : <h2>Events</h2>}
            <Row xs={1} md={2} className="event-card-row" style={{margin: 0}}>
            {Array.isArray(props.eventList) && props.eventList.length > 0 ? (
                props.eventList.map((event, idx) => (
                    <Col key={idx} className="event-card-col">
                    <Card border="primary" style={{ width: '90%', textAlign: "left", cursor: "pointer" }} >
                        <Card.Img variant="top" src={require("../images/events.jpg")} onClick={details} />
                        <Card.Body>
                            <div onClick={() => details(event)}>
                                <Card.Title>{event.title}</Card.Title>
                                <Card.Text>
                                    Date: {new Date(event.fromDate).toLocaleDateString()} - {new Date(event.toDate).toLocaleDateString()}<br/>
                                    Location: {event.location}<br/>
                                    Time: {event.time}<br/>
                                </Card.Text>
                            </div>
                            {event.createdBy === props.user?._id && <button class='edit' onClick={() => editEvent(event)} style={{ float: "right" }}>Edit Event</button>}
                            {event.createdBy === props.user?._id && <button class='edit' onClick={() => deleteEvent(event)} style={{ float: "right", backgroundColor:"maroon" }}>Delete Event</button>}
                            {
                                props.user?.rsvpEvents?.includes(event._id) ? (
                                    <button class='rsvp' style={{backgroundColor:"grey"}}disabled>RSVP-d</button>)
                                : (
                                    event.createdBy !== props.user?._id && <button class='rsvp' onClick={() => tryRsvp(event)}>RSVP</button>
                                )
                            }
                            
                        </Card.Body>
                    </Card>
                    </Col>
                ))
            ) : (
              <p>No events.</p>
            )}
                </Row>
        </div>
    )
}

export default Events