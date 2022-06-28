import { useEffect, useState } from "react";
import EventCreateForm from "./EventCreateForm";
import EventCard from "./EventCard";

function Events ({ user }) {
    const [events, setEvents] = useState([]);
    const [toggleCreate, setToggleCreate] = useState(true);
    const [render, setRender] = useState(true);

    useEffect(() => {
        fetch(`/users/${user.id}`).then((response) => {
          if (response.ok) {
            response.json().then((data) => setEvents(data.activities));
          }
        });
      }, [user.id, render]);

      let eventArr = events.map(event => <EventCard key={event.id} event={event} reRender={reRender} />)

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
            {toggleCreate ? null : <EventCreateForm user={user} hideForm={hideForm} reRender={reRender} />}
            <table>
              <thead>
                <tr>
                  <th>Activity</th>
                  <th>Type</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {eventArr}
              </tbody>
            </table>
        </>
    )
}

export default Events;