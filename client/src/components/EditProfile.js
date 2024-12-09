import { useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from "react";
import "./EditEvent.css"; //use same css as editEvents
import axios from 'axios';

const EditProfile = (props) => {
    const navigate = useNavigate()
    const [description, setDescription] = useState ('Empty Description')
    const [error, setError] = useState ('')
    const [password, setPassword] = useState('')

    const submit = async (e) => {
        e.preventDefault();
        
        if (!(description)){
            setError("Please fill your description")
        }
        else{
            try {
                await axios.post('/profile', {description, password}, { withCredentials: true });
                navigate(`/profile`)
            } catch (error) {
                console.error('Error registering:', error);
            }
        }
    }

    return(
        <div className="wood">
        <div className="edit-event">
            <h2 className="h2">Edit Profile</h2>
            <Card className="text-center">
                <Card.Body>
                    <Card.Img variant="top" src={require("../images/emptypfp.jpg")} style={{width:"20%", height:"auto"}}/>
                    <br/><br/>
                    {/* <Button class="upload-image" variant="primary">+ Upload Image</Button> */}
                    <Card.Title>Username</Card.Title>
                    <p>{props.user.username}</p>
                    
                    <Card.Title>Description</Card.Title>
                    <textarea id="description" name="description" rows="4" cols="50" value={description}
                    onChange={(e)=> {setDescription(e.target.value)}}></textarea>

                    {/* <Card.Title>Events you are interested in</Card.Title>
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
                    </div> */}
                    <br/>
                    <div style={ {height: '30px'} }>
                        {error && <p style={{ color: 'darkred' }}><b>{error}</b></p>}
                    </div>
                    <Button class="save" variant="primary" onClick={submit}>Save</Button>
                </Card.Body>
                </Card>
        </div>
    </div>
    )
}
export default EditProfile