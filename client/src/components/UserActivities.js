import { useLocation } from 'react-router-dom';
import UserActivityCard from './UserActivityCard';

function UserActivities() {
    const location = useLocation();
    const {name, activities} = location.state;

    return (
        <>
            <h2>{name}'s activities</h2>
            <table>
              <thead>
                <tr>
                  <th>Activity</th>
                  <th>Type</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                { activities.map(activity => <UserActivityCard key={activity.id} activity={activity}/>) }
              </tbody>
            </table>
        </>
    )
}

export default UserActivities;