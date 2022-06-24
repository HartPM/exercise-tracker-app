import { useState } from 'react';

function Auth({setCurrentUser}) {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [showCreateUser, setShowCreateUser] = useState(false);


    const [errors, setErrors] = useState([]);

    function showNewUserForm () {
        setShowCreateUser(!showCreateUser)
      }

    function onSubmit(e) {
        e.preventDefault()
        const user = {
            username,
            password,
            name,
            dob
        }
        fetch('/users', {
            method: "POST",
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify(user)
        })
        .then(res => {
            if (res.ok) {
                res.json().then(setCurrentUser)
            } else {
                res.json().then( e => setErrors(Object.entries(e.error).flat()))
            }
        })
    }
    return (
        <>
            {showCreateUser ? (
                <form onSubmit={onSubmit}>
                <label>
                    Username
                    <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} />
                </label>
                <label>
                    Password
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <label>
                    Name
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    Date of Birth
                    <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
                </label>
                <button type="submit">Create Account</button>
            </form>
            ) : null}
            {!showCreateUser ? <button onClick={showNewUserForm}>Create Account</button> : null } 
        </>       
    )
}

export default Auth;