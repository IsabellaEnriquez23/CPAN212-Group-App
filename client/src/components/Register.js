import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Register.css"
import axios from 'axios';

const Register = (props) => {
    const [firstName, setFirstName] = useState ('')
    const [lastName, setLastName] = useState ('')
    const [birthday, setBirthday] = useState ('')
    const [email, setEmail] = useState ('')
    const [username, setUsername] = useState ('')
    const [password, setPassword] = useState ('')
    const [password2, setPassword2] = useState ('')
    const [description, setDescription] = useState ('Empty Description')
    const [error, setError] = useState ('')

    const navigate = useNavigate()
    const submit = async (e) => {
        e.preventDefault();
        console.log('Register route hit')
        
        if (!(firstName && lastName && birthday && email && username && password && password2)){
            setError("All boxes have to be filled out!")
        // }else if (props.accounts[username] !== undefined){
        //     setError("Your username is already taken. Please enter a different username.")
        }else if (!(password === password2)){
            setError("Passwords do not match.")
        }else{
            try {
                await axios.post('/register', { username, email, password, firstName, lastName, birthday, description}, { withCredentials: true });
                navigate(`/login`)
            } catch (error) {
                console.error('Error registering:', error);
            }
        }
    }
    const clear = () =>{
        setFirstName('');
        setLastName('');
        setBirthday('');
        setEmail('');
        setUsername('');
        setPassword('');
        setPassword2('')
    };
    const login = () => {
        navigate(`/login`)
    }
    
    return(
        <div className="wood">
        <div class="registerInfo">
            <img src="../images/concert.jpg" alt="concert" className= "concert"/>
            <p className="message">Sign up to save, interact with, and create events!</p>
            <label id="firstName">First Name: </label>
            <input id="firstName" type="text"  value={firstName} 
            onChange={(e)=> {setFirstName(e.target.value)}}/>
            <label id="lastName">Last Name: </label>
            <input id="lastName" type="text"  value={lastName} 
            onChange={(e)=> {setLastName(e.target.value)}}/>
            <label for="birthday">Birthday: </label>
            <input id="birthday" type="date" value={birthday} 
            onChange={(e)=> {setBirthday(e.target.value)}}/>
            <label for="email">Email: </label>
            <input id="email" type="text" value={email} 
            onChange={(e)=> {setEmail(e.target.value)}}/>
            <label for="username">Username: </label>
            <input id="username" type="text" value={username} 
            onChange={(e)=> {setUsername(e.target.value)}}/>
            <label id="password">Password: </label>
            <input id="password" type="password" value={password} 
            onChange={(e)=> {setPassword(e.target.value)}}/>
            <label for="password2">Re-Enter Password: </label>
            <input id="password2" type="password" value={password2} 
            onChange={(e)=> {setPassword2(e.target.value)}}/>
            <div style={ {height: '30px'} }>
                {error && <p style={{ color: 'darkred' }}><b>{error}</b></p>}
            </div>
            <button class="button" onClick={submit}><b>Register</b></button>
            <button class="button" onClick={clear}type="reset"><b>Clear</b></button>
            <br/>
            <p className="already"><b>Already have an account with us? </b> 
            <b><span className='login-word' onClick={login}>Login</span></b></p>
            </div>
        </div>
    );
      
}
export default Register