import { useNavigate } from "react-router-dom"
import {Link} from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate();

    const submit = () => {
        navigate('/')
    }

    return (
        <div>
            <h1 style={ {'font-family':"Verdana, Arial, sans-serif",
            color: '#00008B'} }>404 - Page Not Found</h1>
            <div>
                <p className="notFoundMessage">The page you are looking for cannot be found. 
                    Please use one of our existing URLs or use the nagivation links found at the top of the page!
                    <br/><br/>
                    <span style={ {color: '#00008B'} }>Click <Link to={navigate('/')} id='linkHome'>Here</Link> to 
                    return to Home</span></p>
            </div>
        </div>
    )
}
export default NotFound