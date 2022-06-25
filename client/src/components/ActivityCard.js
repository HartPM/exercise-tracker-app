import { useState } from 'react';
// import ActivityEditForm from "./ActivityEditForm";
import { Link } from 'react-router-dom';


function ActivityCard ({activity, reRender}) {
    const {id, title, sport_id, formatted_date, duration, distance, heart_rate, elevation} = activity;
    const[toggleEdit, setToggleEdit] = useState(true);

    let sport = (sport_id ===1) ? "Running" : "Cycling" 

    function shortTitle (title) {
        if (title.length > 39) {
            return title.substring(0, 40) + "..."
        } else {
            return title
        }
    }

    function deleteActivity () {
        fetch(`/activities/${id}`, {
            method: "DELETE"
        }).then(reRender)
    }

    // function hideForm () {
    //     setToggleEdit(!toggleEdit)
    // }

    return (
        <tr>
            <td>{shortTitle(title)}</td> 
            <td>{sport}</td>
            <td>{formatted_date}</td>
            <td>
                <Link to={`/Activities/${activity.id}`}  state={{title, sport, formatted_date, duration, distance, heart_rate, elevation}}>
                    <button className="table-btn">Details</button>
                </Link>
            </td>
            <td>
                 <Link to={`/Activities/${activity.id}/edit`} state={{id, title, sport, formatted_date, duration, distance, heart_rate, elevation}}>
                    <button value={activity.id} className="table-btn" onClick={() => setToggleEdit(!toggleEdit)}>Edit</button>
                </Link>
            </td>
           
            <td>
                <button className="table-btn" onClick={e => deleteActivity(e)} value={activity.id}>Delete</button>
            </td>
        </tr>
    )
}

export default ActivityCard;