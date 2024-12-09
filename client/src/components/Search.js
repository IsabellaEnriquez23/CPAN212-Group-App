import { useNavigate } from "react-router-dom"
import Events from "./Events"
import { useState, useEffect } from "react";
import "./Search.css"
import axios from 'axios'

const Search = (props) => {
    const [username, setUsername] = useState ('')
    const navigate = useNavigate()

    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get('/event')
        .then(res => {
            setEvents(res.data);
        })
        .catch(err => console.error('Error fetching events:', err));
    }, []);

    return(
        <div class="wood">
        <div class="searching">
        <img src="../images/dinner.jpg" alt="dinner" className= "dinner"/>
            {/* <h2>Search</h2>
            <input id="search" type="text" placeholder="Search for Events"/>
            
            <br/>
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
            <input type="radio" id="charity" name="charity" value="Charity"/>
            <label for="css">Charity</label> */}
            <br/>
            <Events eventList={events} user={props.user}/>
        </div>
    </div>
    )
}

export default Search