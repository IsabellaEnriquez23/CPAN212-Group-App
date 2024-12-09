import { useNavigate } from "react-router-dom"
import {Image} from "react-bootstrap"
import Events from "./Events"
import "./Profile.css"
import EditProfile from "./EditProfile"
import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Profile = (props) => {
    const navigate = useNavigate()
    const [createdEvents, setCreatedEvents] = useState([]);
    const [rsvpEvents, setRsvpEvents] = useState([]);

    useEffect(() => {
        axios.get('/profile/events', { withCredentials: true })
            .then((res) => {
                // setEvents(res.data); // Set the events data into state
                setCreatedEvents(res.data.createdEvents);
                setRsvpEvents(res.data.rsvpEvents);
            })
            .catch((err) => console.error('Error fetching events:', err));
    }, []);
    
    const editProfile = () => {
        navigate(`/editProfile`)
    }
    const login = () => {
        navigate(`/login`)
    }
    const register = () => {
        navigate(`/register`)
    }

    return(
        <div className="wood">
        <div className="profile" >
            <h2>Profile</h2> 
            {props.user ? 
                <div>
                    <Image src={require("../images/emptypfp.jpg")} style={{width: "200px", height: "auto"}} roundedCircle />
                    <h3 style={{padding:"10px", color: "white"}}>{props.user.username}</h3>
                    <p style={{marginLeft:"100px", marginRight:"100px", color: "white"}}>{props.user.description}</p>
                    <button className="edit-profile" onClick={editProfile}>Edit Profile</button>
                    <h2 style={{textAlign: 'left', color: "white"}}>{props.user.username}'s Events</h2>
                    <Events eventList={createdEvents}/>
                </div> 
              :
                <div>
                    <Image src={require("../images/emptypfp.jpg")} style={{width: "200px", height: "auto"}} roundedCircle />
                    <h3 style={{padding:"10px", color: "white"}}>username</h3>
                    <h2 style={{color: "white"}}>--- Create an account or login to access the functionalities of this page! ---</h2><br/>
                    <button className="edit-profile" onClick={login}>Login</button>
                    <button className="edit-profile" onClick={register}>Register</button>
                </div> 
              }
            
        </div>
    </div>
    )
}

export default Profile