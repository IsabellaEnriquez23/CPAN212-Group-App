import { useNavigate } from "react-router-dom"
import {Image} from "react-bootstrap"
import Events from "./Events"
import "./Profile.css"
import EditProfile from "./EditProfile"

const Profile = () => {
    const navigate = useNavigate()
    const editProfile = () => {
        navigate(`/editProfile`)
    }
    const createProfile = () => {
        navigate(`/createProfile`)
    }

    return(
        <div className="wood">
        <div className="profile" >
            <h2>Profile</h2> 
            {/* remove h2 after */}
            <div>
                <Image src={require("../images/emptypfp.jpg")} style={{width: "200px", height: "auto"}} roundedCircle />
                <h3 style={{padding:"10px", color: "white"}}>username</h3>
                <p style={{marginLeft:"100px", marginRight:"100px", color: "white"}}>Bio Description - "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                <button className="edit-profile" onClick={editProfile}>Edit Profile</button>
                <button className="edit-profile" onClick={createProfile}>Create Profile</button>
                <h2 style={{textAlign: 'left', color: "white"}}>username's Events</h2>
            </div> 
            <Events />
        </div>
    </div>
    )
}

export default Profile