import { useState } from "react"
import { useNavigate } from "react-router-dom"
import './Login.css';

const Login = (props) => {
    const [username, setUsername] = useState ('')
    const [password, setPassword] = useState ('')
    const [error, setError] = useState ('')

    const navigate = useNavigate()
    const login = () => {
        if (!(username && password)){
            setError("Please enter your username and password!")
        }
        else if(!(username in props.accounts)){
            setError("Username does not exist.")
        }
        else if(props.accounts[username].password != password){
            setError("Incorrect Password.")
        }
        else{
            props.setCurrAccount(username)
            navigate(`/newsletter/${username}`)
        }
    }
    const signup = () => {
        navigate(`/register`)
    }

    return(
        <div className="wood">
        <div class="loginInfo">
            <img src="../images/busStop.jpg" alt="busStop" className= "busStop"/>
            <p className="welcome">Welcome Back!</p>
            <p className="enter">Enter your credentials to login</p>

            <label id="username">Username </label><br/>
            <input id="username" type="text"  value={username} 
            onChange={(e)=> {setUsername(e.target.value)}}/>
            <br/><br/>
            <label id="password">Password </label><br/>
            <input id="password" type="password" value={password} 
            onChange={(e)=> {setPassword(e.target.value)}}/>
            <div style={ {height: '50px', padding:'12px'} }>
                {error && <p style={{ color: 'darkred' }}><b>{error}</b></p>}
            </div>
            <button class='button' onClick={login}>Login</button>
            <br/><br/>
            <p className="signup2"><b>Don't have an account with us? </b> 
            <b><span className='signup' onClick={signup}>Sign Up</span></b></p>
            </div>
        </div>
    )
}
export default Login