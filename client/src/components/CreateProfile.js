import { useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from "react";
import "./EditEvent.css"; //use same css as editEvents

const CreateProfile = () => {
    const [username, setUsername] = useState ('')
    const navigate = useNavigate()

    return(
        <div className="wood">
        <div className="edit-event">
            <h2 className="h2">Create Profile</h2>
            <Card className="text-center">
                <Card.Body>
                    <Card.Img variant="top" src={require("../images/emptypfp.jpg")} style={{width:"20%", height:"auto"}}/>
                    <br/><br/>
                    <Button class="upload-image" variant="primary">+ Upload Image</Button>
                    <Card.Title>Username</Card.Title>
                    <input id="username" type="text"  value={username} onChange={(e)=> {setUsername(e.target.value)}}/>
                    
                    <Card.Title>Description</Card.Title>
                    <textarea id="w3review" name="w3review" rows="4" cols="50">Write something about yourself.</textarea>

                    <Card.Title>Events you are interested in</Card.Title>
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
export default CreateProfile