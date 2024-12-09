import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Search from './components/Search';
import Events from './components/Events';
import MyEvents from './components/MyEvents'
import Profile from './components/Profile'
import NotFound from './components/NotFound';
import EventDetails from './components/EventDetails';
import EditEvent from './components/EditEvent';
import Login from './components/Login';
import Register from './components/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import EditProfile from './components/EditProfile';
import CreateProfile from './components/CreateProfile';
import SampleEvent from './components/SampleEvent';

import {useState, useEffect} from 'react'
import axios from 'axios';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('/profile', { withCredentials: true })
      .then((response) => {
        setUser(response.data.user);
        console.log("got profile")
        console.log(response.data)
      })
      .catch((error) => {
        setUser(null);
        console.error('Error fetching profile data:', error);
      });
  }, []);

  const logout = () => {
    axios.get('/logout', { withCredentials: true })
      .then(() => setUser(null));
    
  };

  return (
    <div className="App">
      <header>
        <Router>
        <div class="nav-container">
          <div class="nav-left">
            <h2 id='logo'><Link id='logoLink' to="/home" style={{textDecoration: 'none'}}>Events4U</Link></h2>
            {/* <input id="search" type="text"  placeholder="Search for Events"/>
            <button className='search-button'>Search</button> */}
          </div>
          <nav class='nav-bar'>
            <Link to="/home">Home</Link>
            <Link to="/myevents">My Events</Link>
            <Link to="/profile">Profile</Link>
            {user ? (
                  <Link className="login-link" onClick={logout}>Logout</Link>
                  // <span style={{color:"lightgray"}}>&nbsp;&nbsp;&nbsp;&nbsp;Hi, {user.username}!</span>
                  )
              :
                (
                  <Link to="/login" className="login-link">Login</Link>
                  // <span>&nbsp;&nbsp;&nbsp;&nbsp;Not logged in.</span>
                  )
              }
              
          </nav>
          {/* {user ? (
                <div>
                  <h5>Hi, {user.username}!</h5>
                  <button className="login-link" onClick={logout}>Logout</button>
                </div>)
              :
                (<div>
                  <h5>Not logged in.</h5>
                </div>)
              } */}
        </div>
          <Routes>
          <Route path='/' element={<Search user={user}/>}/>
          <Route path='/home' element={<Search user={user}/>}/>
          <Route path='/myevents' element={<MyEvents user={user}/>}/>
          <Route path='/profile' element={<Profile user={user}/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path='/details' element={<EventDetails/>}/>
          <Route path='/details/:id' element={<EventDetails user={user}/>}/>
          <Route path='/edit' element={<EditEvent user={user}/>}/>
          <Route path='/edit/:id' element={<EditEvent user={user}/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/editProfile' element={<EditProfile user={user}/>}/>
          <Route path='/createProfile' element={<CreateProfile/>}/>
          <Route path='/sampleEvent' element={<SampleEvent/>}/>
          </Routes>
        </Router>
      </header>
      <footer>
        <p>P: (647) 987-0432 <br/>E: customerService@events4u.com<br/> &copy; EVENTS4U. All rights resereved.</p>
      </footer>
    </div>
  );
}

export default App;
