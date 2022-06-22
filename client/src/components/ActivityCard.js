import ActivityEditForm from "./ActivityEditForm";
import { useState } from 'react';


function ActivityCard ({activity, reRender}) {
    const {id, title, sport_id, formatted_date} = activity;
    const[toggleEdit, setToggleEdit] = useState(true);

    let sport = (sport_id ===1) ? "Running" : "Cycling" 

    function shortTitle (title) {
        if (title.length > 39) {
            return title.substring(0, 40) + "..."
        } else {
            return title
        }
    }

    function deleteActivity (e) {
        fetch(`/activities/${id}`, {
            method: "DELETE"
        }).then(reRender)
    }

    return (
        <li>
            <h4>{shortTitle(title)}</h4> 
            <p>{sport}</p>
            <p>{formatted_date}</p>
            <button onClick={e => setToggleEdit(!toggleEdit)}>Edit</button>
            {toggleEdit ? null : <ActivityEditForm id={id} reRender={reRender} />}
            <button>Analyze</button>
            <button onClick={e => deleteActivity(e)} value={activity.id}>Delete</button>
        </li>
    )
}

export default ActivityCard;