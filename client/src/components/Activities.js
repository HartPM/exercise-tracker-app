import { useEffect, useState } from "react";
import ActivityCreateForm from "./ActivityCreateForm";
import ActivityCard from "./ActivityCard";

function Activities ({ user }) {
    const [activities, setActivities] = useState([]);
    const [toggleCreate, setToggleCreate] = useState(true);
    const [render, setRender] = useState(true);
    const[toggleEdit, setToggleEdit] = useState(true);

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
            <h2>{user.name}'s Activities</h2>
            <button className="button2" onClick={e => setToggleCreate(!toggleCreate)}>Upload Activity</button>
            {toggleCreate ? null : <ActivityCreateForm user={user} hideForm={hideForm} reRender={reRender} />}
            <table>
              <thead>
                <tr>
                  <th>Activity</th>
                  <th>Type</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {activityArr}
              </tbody>
            </table>
        </>
    )
}

export default Activities;