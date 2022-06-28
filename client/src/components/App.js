import { useState, useEffect } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Login from './Login';
import Logout from './Logout';
import Profile from './Profile';
import Events from './Events';
import ActivityDetails from "./EventDetails";
import ActivityEditForm from './EventEditForm';
import Users from './Users';
import UserActivities from './UserActivities';
import LeaderBoard from './Leaderboard';


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
        <div className="header-content">
            <h1 className="title">Run Cycle</h1>
        </div>
        <div className="main">
          <Routes>
            <Route path="/" element={ user ? (<Navigate replace to="/Events" />) : (<Login onLogin={setUser} />) } />
            <Route path="Profile" element={ user ? <Profile /> : <Navigate replace to="/" />} />
            <Route path="Events" element={ user ? <Events user={user} /> : <Navigate replace to="/" />} />
            <Route path="Events/:id" element={<ActivityDetails />} />
            <Route path="Events/:id/edit" element={<ActivityEditForm />} />
            <Route path="LeaderBoard" element={ user ? <LeaderBoard/> : <Navigate replace to="/" />} />
            <Route path="Users" element={ user ? <Users/> : <Navigate replace to="/" />}/>
            <Route path="Users/:id/Activities" element={<UserActivities/>} />
          </Routes>
        </div>
        <Logout onLogout={onLogout}/> 
        <nav className='nav'>
          <Link className='link' to="/Profile">Profile</Link>
          <Link className='link' to="/Events">Events</Link>
          <Link className='link' to="/Users">Athletes</Link>
          <Link className='link' to="/LeaderBoard">Leaderboards</Link>
        </nav>
      </div>
    )
}

export default App;

