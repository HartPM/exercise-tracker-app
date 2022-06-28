import { useLocation } from 'react-router-dom';
import UserEventCard from './UserEventCard';

function UserEvents() {
    const location = useLocation();
    const {name, events} = location.state;

    return (
        <>
            <h2>{name}'s Activities</h2>
            <table>
              <thead>
                <tr>
                  <th>Activity</th>
                  <th>Type</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                { events.map(event => <UserEventCard key={event.id} event={event}/>) }
              </tbody>
            </table>
        </>
    )
}

export default UserEvents;