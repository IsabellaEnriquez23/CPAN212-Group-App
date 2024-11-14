import { useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from "react";
import "./EditEvent.css"; //use same css as editEvents

const EditProfile = () => {
    const [username, setUsername] = useState ('')
    const navigate = useNavigate()

    return(
        <div className="wood">
        <div className="edit-event">
            <h2 className="h2">Edit Profile</h2>
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
export default EditProfile