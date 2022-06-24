import { useState, useEffect } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Login from './Login';
import Logout from './Logout';
import Activities from './Activities';
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
        <div className="wrap">
        </div>
        <Logout onLogout={onLogout} />
        <div className="header-content">
            <h1 className="title">Exercise App</h1>
        </div>
        <div className="main">
          <Routes>
            <Route path="/" element={ user ? (<Navigate replace to="/activities" />) : (<Login onLogin={setUser} />) } />
            <Route path="/Profile" element={ user ? <Profile /> : <Navigate replace to="/" />} />
            <Route path="/Activities/" element={ user ? <Activities user={user} /> : <Navigate replace to="/" />} />
            <Route path="Activities/:id" element={<ActivityDetails />} />
            <Route path="/LeaderBoard" element={<LeaderBoard/>} />
          </Routes>
        </div>
        <nav className='nav'>
          <Link className='link' to="/Profile">Profile</Link>
          <Link className='link' to="/Activities">Activities</Link>
          <Link className='link' to="/LeaderBoard">Leaderboards</Link>
        </nav>
      </div>
    )
}

export default App;

