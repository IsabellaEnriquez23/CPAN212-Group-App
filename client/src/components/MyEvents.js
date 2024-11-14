import { useNavigate } from "react-router-dom"
import {Col, Nav, Row, Tab, Image, Button} from "react-bootstrap"
import Events from "./Events"
import "./MyEvents.css"

const MyEvents = () => {
    const navigate = useNavigate()

    const goToProfile = () => {
        //will eventually do with parameter //details/:id
        navigate(`/profile`)
    }
    
    const goToEdit = () => {
        //will eventually do with parameter //details/:id
        navigate(`/edit`)
    }

    return(
        <div className="wood">
        <div className="my-events">
            {/* <img src="../images/events.jpg" alt="events" className= "events"/> */}
            <h2>My Events</h2>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                    <Nav className="flex-column" style={{fontSize:"1.3em"}}>
                        <Image src={require("../images/emptypfp.jpg")} style={{width: "100px", height: "auto", cursor: "pointer", marginLeft: "108px" }} onClick={goToProfile} roundedCircle />
                        {/* couldnt figure out how to center pfp */}
                        <h5>username</h5>
                        <Button variant="primary" style={{marginTop:"10px", marginBottom:"10px", fontSize:"1em", color: "rgba(241, 194, 153, 0.9)", backgroundColor: "grey"}} onClick={goToEdit}>+ New Event</Button>
                        <Nav.Item>
                            <Nav.Link eventKey="first">Created Events</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Saved Events</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">RSVP'd Events</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="fourth">Previous Events</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            First tab content
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            Second tab content
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            Third tab content
                        </Tab.Pane>
                        <Tab.Pane eventKey="fourth">
                            {/* If you click on Previous Events, will show a preview of what event cards will look like */}
                            {/* Ill create the custom ones with buttons for editing after; Itll need to happen once we start passing
                            parameters between components */}
                            <Events />
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