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
            <h2 className="h2">Create New Event/Edit Event</h2>
            <Card className="text-center">
                <Card.Body>
                    <Card.Img variant="top" src={require("../images/events.jpg")} style={{width:"50%", height:"auto"}}/>
                    <br/><br/>
                    <Button class="upload-image" variant="primary">+ Upload Image</Button>
                    <Card.Title>Title</Card.Title>
                    <input id="username" type="text"  value={username} onChange={(e)=> {setUsername(e.target.value)}}/>

                    <Card.Title>Date</Card.Title>
                    <label>From:</label>
                    <input id="username" type="date"  value={username} onChange={(e)=> {setUsername(e.target.value)}}/>
                    <label>To:</label>
                    <input id="username" type="date"  value={username} onChange={(e)=> {setUsername(e.target.value)}}/>

                    <Card.Title>Time</Card.Title>
                    <input id="username" type="time"  value={username} onChange={(e)=> {setUsername(e.target.value)}}/>
                    <Card.Title>Location</Card.Title>
                    <input id="username" type="text"  value={username} onChange={(e)=> {setUsername(e.target.value)}}/>
                    
                    <Card.Title>Description</Card.Title>
                    <textarea id="w3review" name="w3review" rows="4" cols="50">At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.</textarea>

                    <Card.Title>Options</Card.Title>
                    <input type="radio" id="html" name="place" value="Indoor"/>
                    <label for="html">Indoor</label>
                    <input type="radio" id="css" name="place" value="Outdoor"/>
                    <label for="css">Outdoor</label>
                    <input type="radio" id="css" name="place" value="Online"/>
                    <label for="css">Online</label><br/>

                    <input type="radio" id="html" name="cost" value="Paid"/>
                    <label for="html">Paid</label>
                    <input type="radio" id="css" name="cost" value="Free"/>
                    <label for="css">Free</label>
                    <input type="radio" id="css" name="cost" value="Charity"/>
                    <label for="css">Charity</label><br/>

                    <Card.Title>Tags</Card.Title>
                    <div style={{display:"flex", flexDirection:'row', justifyContent: "center", flexWrap: "wrap"}}>
                        <input type="checkbox" id="tag" name="tag" value="Party"/>
                        <label for="tag"> Party</label><br/>
                        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
                        <label for="vehicle2"> Art</label><br/>
                        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                        <label for="vehicle3"> Active</label>
                        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                        <label for="vehicle3"> Educational</label>
                        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                        <label for="vehicle3"> Cultural</label>
                        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                        <label for="vehicle3"> Religious</label>
                        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                        <label for="vehicle3"> Health & Wellness</label>
                        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                        <label for="vehicle3"> Networking</label>
                    </div>
                                        
                    
                    <br/>
                    <Button class="save" variant="primary">Save</Button>
                </Card.Body>
                </Card>
            </div>
        </div>
    )
}
export default EventDetails