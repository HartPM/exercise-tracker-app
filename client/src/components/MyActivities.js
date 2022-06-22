import { useEffect, useState } from "react";
import UploadActivityForm from "./UploadActivityForm";
import ActivityCard from "./ActivityCard";

function MyActivities ({ user }) {
    const [activities, setActivities] = useState([]);
    // const [render, setRender] = useState(true);

    useEffect(() => {
        fetch(`/users/${user.id}`).then((response) => {
          if (response.ok) {
            response.json().then((data) => setActivities(data.activities));
          }
        });
      }, [user.id]);

      // function updateActivities () {
      //   setRender(!render);
      // }


    return (
        <>
            <main>
                <h2>Welcome {user.name}!</h2>
            </main>
            <h4>Upload New Activity</h4>
            <UploadActivityForm user={user} />
            <ul>
                {activities.map(activity => <ActivityCard key={activity.id} activity={activity} />)}
            </ul>
        </>
    )
}

export default MyActivities;