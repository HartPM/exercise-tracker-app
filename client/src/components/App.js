import '../App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Login from './Login';
import Logout from './Logout';
import MyActivities from './MyActivities';
import LeaderBoard from './LeaderBoard';
import Profile from './Profile';
import ActivityDetails from "./ActivityDetails";


function App() {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((data) => setUser(data));
      }
    });
  }, []);

  function onLogout () {
    setUser(null)
  }

    return (
      
      <div>
        <div className="main">
        <Logout onLogout={onLogout} />
        <h1 className="title">Exercise App</h1>
        <nav className="nav">
          <Link className="link" to="/Profile">Profile</Link>
          <Link className="link" to="/Activities">Activities</Link>
          <Link className="link" to="/LeaderBoard">Leaderboards</Link>
        </nav>
        </div>
        <div className="background-container">
          <Routes>
            <Route path="/" element={ user ? (<Navigate replace to="/activities" />) : (<Login onLogin={setUser} />) } />
            <Route path="/Profile" element={ user ? <Profile /> : <Navigate replace to="/" />} />
            <Route path="/Activities/" element={ user ? <MyActivities user={user} /> : <Navigate replace to="/" />} />
            <Route path="Activities/:id" element={<ActivityDetails />} />
            <Route path="/LeaderBoard" element={<LeaderBoard/>} />
          </Routes>
        </div>
        <footer>
          <br></br>
          <br></br>
        </footer>
      </div>
    )
}

export default App;

