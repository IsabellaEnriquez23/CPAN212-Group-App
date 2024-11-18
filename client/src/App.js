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

function App() {

  return (
    <div className="App">
      <header>
        <Router>
        <div class="nav-container">
          <div class="nav-left">
            <h2 id='logo'><Link id='logoLink' to="/home" style={{textDecoration: 'none'}}>Events4U</Link></h2>
            {/* <h2 id='logo' component={Link} to={"/"} style={{textDecoration: 'none'}}>Events4U</h2> */}
            <input id="search" type="text"  placeholder="Search for Events"/>
            <button className='search-button'>Search</button>
          </div>
          <nav class='nav-bar'>
            <Link to="/home">Home</Link>
            <Link to="/myevents">My Events</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/login" className="login-link">Login</Link>
          </nav>
        </div>
          <Routes>
          <Route path='/' element={<Search/>}/>
          <Route path='/home' element={<Search/>}/>
          <Route path='/myevents' element={<MyEvents/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path='/details' element={<EventDetails/>}/>
          <Route path='/edit' element={<EditEvent/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/editProfile' element={<EditProfile/>}/>
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
