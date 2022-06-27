import { useState, useEffect } from 'react';
import UserCard from './UserCard';

function Users () {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('/users').then((response) => {
          if (response.ok) {
            response.json().then((data) => setUsers(data));
          }
        });
      }, []);

    return (
        <>
            <h2>Athletes</h2>
            <table>
               <thead>
                 <tr>
                   <th></th>
                   <th>Athlete</th>
                   <th>Age</th>
                   <th>Gender</th>
                   <th>Weight (lbs)</th>
                 </tr>
               </thead>
               <tbody>
                 {users.map(user => <UserCard key={user.id} user={user} />)}
               </tbody>
            </table>
        </>
    )
};

export default Users;