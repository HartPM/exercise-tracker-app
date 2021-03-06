import { useState } from 'react';
import Auth from './Auth';

function Login({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
   
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      })
        .then((r) => r.json())
        .then((user) => onLogin(user));
    }
  
    return (
      <>
        <div className='form-container2'>
          <form className='form1' onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="text"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="form-button1" type="submit">Login</button>
          </form>
        </div>
        <div className="form-container2">
          <Auth setCurrentUser={onLogin} />
        </div>
      </>
    );
  }

  export default Login;