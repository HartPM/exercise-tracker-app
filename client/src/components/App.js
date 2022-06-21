import '../App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Logout from './Logout';
import Auth from './Auth';
import Login from './Login';
import UserProfile from './UserProfile';


function App() {
  const [user, setUser] = useState(null);
  const [showCreateUser, setShowCreateUser] = useState(false);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function showNewUserForm () {
    setShowCreateUser(!showCreateUser)
  }

  function onLogout () {
    setUser(null)
  }

  if (user) {
    return (
      <div>
        <Logout onLogout={onLogout} />
        <Routes>
          <Route path="/" element={<UserProfile />} />
        </Routes>
      </div>
    )
  } else {
    return (
      <>
        <Routes>
          <Route exact path="/" element={<Login onLogin={setUser} /> } />
        </Routes>
        <br></br>
        {showCreateUser ? <Auth setCurrentUser={setUser}/> : null}        
        {!showCreateUser ? (
        <button onClick={showNewUserForm}>
          Create Account
        </button>
        ) : null }
      </>
  )}
}

export default App;

