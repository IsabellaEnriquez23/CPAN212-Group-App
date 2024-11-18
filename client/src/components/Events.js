import { useNavigate } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import Button from 'react-bootstrap/Button';
import "./Events.css";
import React, {useState, useEffect} from 'react'
// import axios from 'axios'

const Events = () => {
    const navigate = useNavigate()
    const [events, setEvents] = useState(null)

    // useEffect(() => {
    //     axios.get('http://localhost:8000/events')
    //         .then((response) => {
    //             setEvents(response.data)
    //         })
    //         .catch((error) => {
    //             console.error('Error fetching events: ', error)
    //         })
    // })

    const details = () => {
        //will eventually do with parameter //details/:id
        navigate(`/details`)
    }
    const editEvent = () => {
        //will eventually do with parameter //details/:id
        navigate(`/edit`)
    }
    const sampleEvent = () =>{
        navigate(`/sampleEvent`)
    }
    
    return(
        <div>
            <h2>Events</h2>
            <Row xs={1} md={2} className="event-card-row" style={{margin: 0}}>
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col key={idx} className="event-card-col">
                    <Card border="primary" style={{ width: '90%', textAlign: "left", cursor: "pointer" }} >
                        <Card.Img variant="top" src={require("../images/events.jpg")} onClick={details} />
                        <Card.Body>
                            <div onClick={details}>
                                <Card.Title>Title</Card.Title>
                                <Card.Text>
                                    Date: <br/>
                                    Location: <br/>
                                    Time: <br/>
                                    Description: 
                                </Card.Text>
                            </div>
                            <button class='rsvp' onClick={sampleEvent}>RSVP</button>
                            <button class='edit' onClick={editEvent} style={{ float: "right" }}>Edit Event (temp)</button>
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
                </Row>
        </div>
    )
}

export default Events