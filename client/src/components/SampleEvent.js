import { useNavigate } from "react-router-dom"
import Events from "./Events"
import { useState } from "react";
import "./Search.css"

const SampleEvent = () => {
    const [username, setUsername] = useState ('')
    const navigate = useNavigate()

    return(
        <div class="wood">
        <div class="searching">
        <img src="../images/lipstick.jpg" alt="dinner" className= "dinner"/>
            <h2>Create your own lipstick!</h2>
            <p>Date:</p>
            <p>Time:</p>
            <p>Location:</p>
            <p>Description:</p>
            <p>Other events you might be interested in: </p>
            <Events/>
        </div>
    </div>
    )
}

export default SampleEvent