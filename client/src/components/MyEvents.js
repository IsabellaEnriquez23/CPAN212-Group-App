import { useNavigate } from "react-router-dom"
import {Col, Nav, Row, Tab, Image, Button} from "react-bootstrap"
import Events from "./Events"
import "./MyEvents.css"
import React, {useState, useEffect} from 'react'
import axios from 'axios'

const MyEvents = (props) => {
    const navigate = useNavigate()
    const [createdEvents, setCreatedEvents] = useState([]);
    const [rsvpEvents, setRsvpEvents] = useState([]);
    const [savedEvents, setSavedEvents] = useState([]);
    const [previousEvents, setPreviousEvents] = useState([]);

    useEffect(() => {
        axios.get('/profile/events', { withCredentials: true })
            .then((res) => {
                setCreatedEvents(res.data.createdEvents);
                setRsvpEvents(res.data.rsvpEvents);
                setSavedEvents(res.data.savedEvents);
                setPreviousEvents(res.data.previousEvents);
            })
            .catch((err) => console.error('Error fetching events:', err));
    }, []);

    const goToProfile = () => {
        navigate(`/profile`)
    }
    
    const goToCreate = () => {
        if (props.user){
            navigate(`/edit`) 
        }
        else{
            navigate(`/login`)
        }
    }

    // const goToEdit = () => {
    //     //will eventually do with parameter //details/:id
    //     navigate(`/edit`)
    // }

    return(
        <div className="wood">
        <div className="my-events">
            {/* <img src="../images/events.jpg" alt="events" className= "events"/> */}
            {!props.user && <h2 style={{color:"white"}}>--- Create an account or Login to gain access to MyEvent functionalities. ---</h2>}
            <h2>My Events</h2>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                    <Nav className="flex-column" style={{fontSize:"1.3em"}}>
                        <Image src={require("../images/emptypfp.jpg")} style={{width: "100px", height: "auto", cursor: "pointer", marginLeft: "83px" }} onClick={goToProfile} roundedCircle />
                        {/* couldnt figure out how to center pfp */}
                        {props.user ? <h5>{props.user.username}</h5> : <h5>username</h5>}
                        <Button variant="primary" style={{marginTop:"10px", marginBottom:"10px", fontSize:"1em", color: "rgba(241, 194, 153, 0.9)", backgroundColor: "grey"}} onClick={goToCreate}>+ New Event</Button>
                        <Nav.Item>
                            <Nav.Link eventKey="first">Created Events</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">RSVP'd Events</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Previous Events</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Events eventList={createdEvents} title={"Created Events"} user={props.user}/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <Events eventList={rsvpEvents} title={"RSVP'd Events"} user={props.user}/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            <Events eventList={previousEvents} title={"Previous Events"} user={props.user}/>
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
                </Tab.Container>
        </div>
    </div>
    )
}

export default MyEvents