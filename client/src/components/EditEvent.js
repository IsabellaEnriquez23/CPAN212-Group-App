import { useNavigate, useParams } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from "react";
import "./EditEvent.css";
import axios from 'axios';

const EditEvent = (props) => {
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
    const [error, setError] = useState ('')
    const { id } = useParams();
    
    const submit = async (e) => {
        e.preventDefault();
        
        if (!(title && fromDate && toDate && time && location && description && monetaryType && locationType)){
            setError("All boxes have to be filled out!")
        }
        else{
            let formatFromDate = new Date(fromDate);
            let formatToDate = new Date(toDate);
            console.log(`Home from: ${formatFromDate}`)
            console.log(`Home to: ${formatToDate}`)
            try {
                if (id) {
                    //editing event
                    await axios.put(`/event/${id}`, {title, formatFromDate, formatToDate, location, time, description, locationType, monetaryType, tags}, { withCredentials: true });
                }
                else{
                    //creating event
                    await axios.post('/event', {title, formatFromDate, formatToDate, location, time, description, locationType, monetaryType, tags}, { withCredentials: true });
                    navigate(`/myEvents`)
                }
            } catch (error) {
                console.error('Error registering:', error);
            }
            setError('')
            console.log(`${title}, ${fromDate}, ${toDate}, ${time}, ${location}, ${description},`)
            console.log(`Mon: ${monetaryType}, Loc: ${locationType}`)
            console.log(tags)
        }
    }

    const handleTagChange = (e) => {
        const { value, checked } = e.target;
        setTags(prevTags => {
          if (checked) {
            return [...prevTags, value];
          } else {
            return prevTags.filter(tag => tag !== value);
          }
        })
    }

    useEffect(() => {
        if (id) {
            //id was recieved, so fill form with mongodb values
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
            {id && <h2 className="h2">Edit Event</h2>}
            <h2 className="h2">Create New Event/Edit Event</h2>
            {/* <Card className="text-center" class='p-3 mb-2 .bg-dark'></Card> */}
            <Card className="text-center">
                <Card.Body>
                    <Card.Img variant="top" src={require("../images/events.jpg")} style={{width:"50%", height:"auto"}}/>
                    <br/><br/>
                    {/* <Button class="upload-image" variant="primary">+ Upload Image</Button> */}
                    <Card.Title>Title</Card.Title>
                    <input id="title" type="text" value={title} onChange={(e)=> {setTitle(e.target.value)}}/>

                    <Card.Title>Date</Card.Title>
                    <label>From:</label>
                    <input id="fromdate" type="date" value={fromDate} onChange={(e)=> {setFromDate(e.target.value)}}/>
                    <label>To:</label>
                    <input id="todate" type="date" value={toDate} onChange={(e)=> {setToDate(e.target.value)}}/>

                    <Card.Title>Time</Card.Title>
                    <input id="text" type="text" value={time} onChange={(e)=> {setTime(e.target.value)}}/>
                    <Card.Title>Location</Card.Title>
                    <input id="location" type="text" value={location} onChange={(e)=> {setLocation(e.target.value)}}/>
                    
                    <Card.Title>Description</Card.Title>
                    <textarea id="desc" name="w3review" rows="4" cols="50" value={description} onChange={(e)=> {setDescription(e.target.value)}}>At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.</textarea>

                    <Card.Title>Options</Card.Title>
                    <input type="radio" id="indoor" name="locType" value="Indoor" checked={locationType === 'Indoor'} onClick={() => setLocationType('Indoor')}/>
                    <label for="indoor">Indoor</label>
                    <input type="radio" id="outdoor" name="locType" value="Outdoor" checked={locationType === 'Outdoor'} onClick={() => setLocationType('Outdoor')}/>
                    <label for="outdoor">Outdoor</label>
                    <input type="radio" id="online" name="locType" value="Online" checked={locationType === 'Online'} onClick={() => setLocationType('Online')}/>
                    <label for="online">Online</label><br/>

                    <input type="radio" id="paid" name="money" value="Paid" checked={monetaryType === 'Paid'} onClick={() => setMonetaryType('Paid')}/>
                    <label for="paid">Paid</label>
                    <input type="radio" id="free" name="money" value="Free" checked={monetaryType === 'Free'} onClick={() => setMonetaryType('Free')}/>
                    <label for="free">Free</label>
                    <input type="radio" id="charity" name="money" value="Charity" checked={monetaryType === 'Charity'} onClick={() => setMonetaryType('Charity')}/>
                    <label for="charity">Charity</label><br/>

                    <Card.Title>Tags</Card.Title>
                    <div style={{display:"flex", flexDirection:'row', justifyContent: "center", flexWrap: "wrap"}}>
                        <input type="checkbox" id="party" name="party" value="Party" checked={tags?.includes("Party")} onChange={(e)=> {handleTagChange(e)}}/>
                        <label for="party"> Party</label><br/>
                        <input type="checkbox" id="art" name="art" value="Art" checked={tags?.includes("Art")} onChange={(e)=> {handleTagChange(e)}}/>
                        <label for="art"> Art</label><br/>
                        <input type="checkbox" id="active" name="active" value="Active" checked={tags?.includes("Active")} onChange={(e)=> {handleTagChange(e)}}/>
                        <label for="active"> Active</label>
                        <input type="checkbox" id="educ" name="educ" value="Educational" checked={tags?.includes("Educational")} onChange={(e)=> {handleTagChange(e)}}/>
                        <label for="educ"> Educational</label>
                        <input type="checkbox" id="cultural" name="cultural" value="Cultural" checked={tags?.includes("Cultural")} onChange={(e)=> {handleTagChange(e)}}/>
                        <label for="cultural"> Cultural</label>
                        <input type="checkbox" id="relig" name="relig" value="Religious" checked={tags?.includes("Religious")} onChange={(e)=> {handleTagChange(e)}}/>
                        <label for="relig"> Religious</label>
                        <input type="checkbox" id="health" name="health" value="Health" checked={tags?.includes("Health")} onChange={(e)=> {handleTagChange(e)}}/>
                        <label for="health"> Health</label>
                        <input type="checkbox" id="network" name="network" value="Networking" checked={tags?.includes("Networking")} onChange={(e)=> {handleTagChange(e)}}/>
                        <label for="network"> Networking</label>
                    </div>
                                        
                    <div style={ {height: '30px'} }>
                        {error && <p style={{ color: 'darkred' }}><b>{error}</b></p>}
                    </div>
                    <br/>
                    <Button class="save" variant="primary" onClick={submit}>Save</Button>
                </Card.Body>
                </Card>
            </div>
        </div>
    )
}
export default EditEvent