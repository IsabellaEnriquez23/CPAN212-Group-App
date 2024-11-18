import { useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from "react";
import "./EditEvent.css";

const EventDetails = () => {
    const [username, setUsername] = useState ('')
    const navigate = useNavigate()

    return(
        <div className="wood">
            <div className="edit-event" >
            <h2 className="h2">Event Details</h2>
            <Card className="text-center" >
                <Card.Body>
                    <Card.Img variant="top" src={require("../images/events.jpg")} style={{width:"50%", height:"auto"}}/>
                    <br/><br/>
                    <Card.Title>Some Title</Card.Title>
                    
                    <Card.Title>Date: (date) to (date)</Card.Title>
                    <Card.Title>Time: (time)</Card.Title>
                    <Card.Title>Location: Some location</Card.Title>
                    <Card.Title>Description</Card.Title>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

                    <Card.Title>Tags</Card.Title>
                    <p>Location Type: Indoor<br/>
                        Free<br/>

                    </p>

                    <div style={{display:"flex", flexDirection:'row', justifyContent: "center", flexWrap: "wrap"}}>
                        <input type="checkbox" id="party" name="party" value="Party" onclick="return false;" checked />
                        <label for="party"> Party</label><br/>
                        <input type="checkbox" id="art" name="art" value="Art" onclick="return false;" checked/>
                        <label for="art"> Art</label><br/>
                        <input type="checkbox" id="cultural" name="cultural" value="Cultural" onclick="return false;" checked/>
                        <label for="cultural"> Cultural</label>
                        
                    </div>
                    <button class='rsvp'>RSVP</button>
                    <br/>
                </Card.Body>
                </Card>
            </div>
        </div>
    )
}
export default EventDetails