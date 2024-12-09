import { useNavigate, useParams } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from "react";
import "./EditEvent.css";
import axios from 'axios';

const EventDetails = () => {
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [fromDate, setFromDate] = useState('')
    const [toDate, setToDate] = useState('')
    const [time, setTime] = useState('')
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')
    const [locationType, setLocationType] = useState('')
    const [monetaryType, setMonetaryType] = useState('')
    const [tags, setTags] = useState([])
    const { id } = useParams();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (id) {
            //id was recieved, so fill states with mongodb values
            const fetchEventData = async () => {
                try {
                    const response = await axios.get(`/events/${id}`);
                    console.log(response)
                    setTitle(response.data.title);
                    setTime(response.data.time);
                    setLocation(response.data.location);
                    setDescription(response.data.description);
                    setMonetaryType(response.data.monetaryType);
                    setLocationType(response.data.locationType);
                    setTags(response.data.tags);
                    setFromDate(new Date(response.data.fromDate).toLocaleDateString())
                    setToDate(new Date(response.data.toDate).toLocaleDateString())
                    setLoaded(true);
                } catch (error) {
                    console.error('Error fetching event data:', error);
                }
            };
    
            fetchEventData();
        }
    }, [id]); // runs when id changes

    return(
        <div className="wood">
            <div className="edit-event" >
            <h2 className="h2">Event Details</h2>
            { loaded ? (
                <Card className="text-center" >
                <Card.Body>
                    <Card.Img variant="top" src={require("../images/events.jpg")} style={{width:"50%", height:"auto"}}/>
                    <br/><br/>
                    <Card.Title>{title}</Card.Title>
                    
                    <Card.Title><u>Date:</u> {fromDate} to {toDate}</Card.Title>
                    <Card.Title><u>Time:</u> {time}</Card.Title>
                    <Card.Title><u>Location:</u> {location}</Card.Title>
                    <Card.Title><u>Description:</u></Card.Title>
                    <p>{description}</p>

                    <Card.Title>Tags</Card.Title>
                    <p>Location Type: {locationType}<br/>
                        Monetary Type: {monetaryType}<br/>

                    </p>

                    {tags.map((tag, index) => (
                        <span key={index}>
                            <input type="checkbox" value={tag} onclick="return false;" checked/>
                            <label>{tag}</label>
                        </span>
                        ))}
                    <br/>
                </Card.Body>
            </Card>
            ) : (
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
            )}
            
            </div>
        </div>
    )
}
export default EventDetails