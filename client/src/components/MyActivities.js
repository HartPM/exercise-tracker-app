import { useEffect, useState } from "react";
import ActivityCreateForm from "./ActivityCreateForm";
import ActivityCard from "./ActivityCard";



function MyActivities ({ user }) {
    const [activities, setActivities] = useState([]);
    const [toggleCreate, setToggleCreate] = useState(true);
    const [render, setRender] = useState(true);

    useEffect(() => {
        fetch(`/users/${user.id}`).then((response) => {
          if (response.ok) {
            response.json().then((data) => setActivities(data.activities));
          }
        });
      }, [user.id, render]);

      let activityArr = activities.map(activity => <ActivityCard key={activity.id} activity={activity} reRender={reRender} />)

      function hideForm() {
        setToggleCreate(!toggleCreate)
      }

      function reRender() {
        setRender(!render)
      }

    return (
        <>
            <main>
                <h2>Welcome {user.name}!</h2>
            </main>
            <button onClick={e => setToggleCreate(!toggleCreate)}>Upload Activity</button>
            {toggleCreate ? null : <ActivityCreateForm user={user} hideForm={hideForm} reRender={reRender} />}
            <h3>Activity Log</h3>
            <ul>
                {activityArr}
            </ul>
        </>
    )
}

export default MyActivities;