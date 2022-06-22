import '../App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Login from './Login';
import Logout from './Logout';
import MyActivities from './MyActivities';
import LeaderBoard from './LeaderBoard';
import Profile from './Profile';

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
        <Logout onLogout={onLogout} />
        <nav>
          <Link to="/Profile">My Profile</Link>
          <Link to="/Activities">My Activities</Link>
          <Link to="/LeaderBoard">LeaderBoard</Link>
        </nav>
        <Routes>
          <Route path="/" element={ user ? (<Navigate replace to="/activities" />) : (<Login onLogin={setUser} />) } />
          <Route exact path="/Profile" element={ user ? <Profile /> : <Navigate replace to="/" />} />
          <Route exact path="/Activities" element={ user ? <MyActivities user={user} /> : <Navigate replace to="/" />} />
          <Route exact path="/LeaderBoard" element={<LeaderBoard/>} />
        </Routes>
      </div>
    )
}

export default App;

