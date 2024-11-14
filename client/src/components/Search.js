import { useNavigate } from "react-router-dom"
import Events from "./Events"
import { useState } from "react";
import "./Search.css"

const Search = () => {
    const [username, setUsername] = useState ('')
    const navigate = useNavigate()

    return(
        <div class="wood">
        <div class="searching">
        <img src="../images/dinner.jpg" alt="dinner" className= "dinner"/>
            <h2>Search</h2>
            <input id="search" type="text"  placeholder="Search for Events"/>
            <label>From:</label>
            <input id="username" type="date"  value={username} onChange={(e)=> {setUsername(e.target.value)}}/>
            <label>To:</label>
            <input id="username" type="date"  value={username} onChange={(e)=> {setUsername(e.target.value)}}/>
            
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
            <label for="css">Charity</label>
            {/* For tags, See "Custom Dropdown Components" in https://react-bootstrap.netlify.app/docs/components/dropdowns */}
            
            <Events/>
        </div>
    </div>
    )
}

export default Search