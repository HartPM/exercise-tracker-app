import '../App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Auth from './Auth';
import Login from './Login';
import Logout from './Logout';
import MyActivities from './MyActivities';
import Leaderboard from './Leaderboard';


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
          <Link to="/activities">My Activities</Link>
          <Link to="/leaderboard">Leaderboard</Link>
        </nav>
        <Routes>
          <Route path="/" element={ user ? (<Navigate replace to="/activities" />) : (<Login onLogin={setUser} />) } />
          <Route exact path="/activities" element={ user ? <MyActivities user={user} /> : <Navigate replace to="/" />} />
          <Route exact path="/leaderboard" element={<Leaderboard/>} />
        </Routes>
        {showCreateUser ? <Auth setCurrentUser={setUser}/> : null}        
        {!showCreateUser ? <button onClick={showNewUserForm}>Create Account</button> : null }
      </div>
    )
}

export default App;

