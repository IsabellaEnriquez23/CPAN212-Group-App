import { useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from "react";
import "./EditEvent.css";

const EditEvent = () => {
    const [username, setUsername] = useState ('')
    const navigate = useNavigate()

    return(
        <div className="wood">
            <div className="edit-event" >
            <h2 className="h2">Create New Event/Edit Event</h2>
            {/* <Card className="text-center" class='p-3 mb-2 .bg-dark'></Card> */}
            <Card className="text-center">
                <Card.Body>
                    <Card.Img variant="top" src={require("../images/events.jpg")} style={{width:"50%", height:"auto"}}/>
                    <br/><br/>
                    <Button class="upload-image" variant="primary">+ Upload Image</Button>
                    <Card.Title>Title</Card.Title>
                    <input id="username" type="text" onChange={(e)=> {setUsername(e.target.value)}}/>

                    <Card.Title>Date</Card.Title>
                    <label>From:</label>
                    <input id="fromdate" type="date" onChange={(e)=> {setUsername(e.target.value)}}/>
                    <label>To:</label>
                    <input id="todate" type="date" onChange={(e)=> {setUsername(e.target.value)}}/>

                    <Card.Title>Time</Card.Title>
                    <input id="time" type="time" onChange={(e)=> {setUsername(e.target.value)}}/>
                    <Card.Title>Location</Card.Title>
                    <input id="location" type="text" onChange={(e)=> {setUsername(e.target.value)}}/>
                    
                    <Card.Title>Description</Card.Title>
                    <textarea id="desc" name="w3review" rows="4" cols="50">At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.</textarea>

                    <Card.Title>Options</Card.Title>
                    <input type="radio" id="indoor" name="locType" value="Indoor"/>
                    <label for="indoor">Indoor</label>
                    <input type="radio" id="outdoor" name="locType" value="Outdoor"/>
                    <label for="outdoor">Outdoor</label>
                    <input type="radio" id="online" name="locType" value="Online"/>
                    <label for="online">Online</label><br/>

                    <input type="radio" id="paid" name="money" value="Paid"/>
                    <label for="paid">Paid</label>
                    <input type="radio" id="free" name="money" value="Free"/>
                    <label for="free">Free</label>
                    <input type="radio" id="charity" name="money" value="Charity"/>
                    <label for="charity">Charity</label><br/>

                    <Card.Title>Tags</Card.Title>
                    <div style={{display:"flex", flexDirection:'row', justifyContent: "center", flexWrap: "wrap"}}>
                        <input type="checkbox" id="party" name="party" value="Party"/>
                        <label for="party"> Party</label><br/>
                        <input type="checkbox" id="art" name="art" value="Car"/>
                        <label for="art"> Art</label><br/>
                        <input type="checkbox" id="active" name="active" value="Boat"/>
                        <label for="active"> Active</label>
                        <input type="checkbox" id="educ" name="educ" value="Boat"/>
                        <label for="educ"> Educational</label>
                        <input type="checkbox" id="cultural" name="cultural" value="Boat"/>
                        <label for="cultural"> Cultural</label>
                        <input type="checkbox" id="relig" name="relig" value="Boat"/>
                        <label for="relig"> Religious</label>
                        <input type="checkbox" id="health" name="health" value="Boat"/>
                        <label for="health"> Health & Wellness</label>
                        <input type="checkbox" id="network" name="network" value="Boat"/>
                        <label for="network"> Networking</label>
                    </div>
                                        
                    
                    <br/>
                    <Button class="save" variant="primary">Save</Button>
                </Card.Body>
                </Card>
            </div>
        </div>
    )
}
export default EditEvent