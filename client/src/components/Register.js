import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Register.css"

const Register = (props) => {

    const [firstName, setFirstName] = useState ('')
    const [lastName, setLastName] = useState ('')
    const [age, setAge] = useState ('')
    const [email, setEmail] = useState ('')
    const [username, setUsername] = useState ('')
    const [password, setPassword] = useState ('')
    const [password2, setPassword2] = useState ('')
    const [error, setError] = useState ('')

    const navigate = useNavigate()
    const submit = () => {
        if (!(firstName && lastName && age && email && username && password && password2)){
            setError("All boxes have to be filled out!")
        }else if (isNaN(parseInt(age)) || parseInt(age)<=0){
            setError("Age must be a number greater than 0.");
        }else if (props.accounts[username] !== undefined){
            setError("Your username is already taken. Please enter a different username.")
        }else if (!(password === password2)){
            setError("Passwords do not match.")
        }else{
            let newAccount = {}
            newAccount[username] = {'username':username, 'password':password}
            props.setAccounts({...props.accounts, ...newAccount})
            props.setCurrAccount(username)
            navigate(`/newsletter/${username}`)
        }
    }
    const clear = () =>{
        setFirstName('');
        setLastName('');
        setAge('');
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
            <p className="message">Sign up and receive fun and informative information every month!</p>
            {/* I need to figure out how to line up the text and text boxes */}
            <label id="firstName">First Name: </label>
            <input id="firstName" type="text"  value={firstName} 
            onChange={(e)=> {setFirstName(e.target.value)}}/>
            <label id="lastName">Last Name: </label>
            <input id="lastName" type="text"  value={lastName} 
            onChange={(e)=> {setLastName(e.target.value)}}/>
            <label for="age">Age: </label>
            <input id="age" type="text" value={age} 
            onChange={(e)=> {setAge(e.target.value)}}/>
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
            // style={{width: '550px', height: '40px', textAlign: 'center'}}
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