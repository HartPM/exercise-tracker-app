import '../App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Auth from './Auth';
import Login from './Login';
import Logout from './Logout';
import MyActivities from './MyActivities';
import LeaderBoard from './LeaderBoard';


function App() {
  const [user, setUser] = useState(null);
  const [showCreateUser, setShowCreateUser] = useState(false);
  

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((data) => setUser(data));
      }
    });
  }, []);

  function showNewUserForm () {
    setShowCreateUser(!showCreateUser)
  }

  function onLogout () {
    setUser(null)
  }

    return (
      <div>
        <Logout onLogout={onLogout} />
        <nav>
          <Link to="/Activities">My Activities</Link>
          <Link to="/LeaderBoard">LeaderBoard</Link>
        </nav>
        <Routes>
          <Route path="/" element={ user ? (<Navigate replace to="/activities" />) : (<Login onLogin={setUser} />) } />
          <Route exact path="/Activities" element={ user ? <MyActivities user={user} /> : <Navigate replace to="/" />} />
          <Route exact path="/LeaderBoard" element={<LeaderBoard/>} />
        </Routes>
        {showCreateUser ? <Auth setCurrentUser={setUser}/> : null}        
        {!showCreateUser ? <button onClick={showNewUserForm}>Create Account</button> : null }
      </div>
    )
}

export default App;

