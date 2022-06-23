import { useState } from 'react';
import ActivityEditForm from "./ActivityEditForm";
import { Link } from 'react-router-dom';


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
            <Link to={`/Activities/${activity.id}`}>
                <button>Analyze</button>
            </Link>
            <button onClick={e => setToggleEdit(!toggleEdit)}>Edit</button>
            {toggleEdit ? null : <ActivityEditForm id={id} reRender={reRender} />}
            <button onClick={e => deleteActivity(e)} value={activity.id}>Delete</button>
        </li>
    )
}

export default ActivityCard;