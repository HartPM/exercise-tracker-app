import { useState } from 'react';
import { Link } from 'react-router-dom';


function EventCard ({event, reRender}) {
    const {id, title, sport_id, formatted_date, duration, distance, heart_rate, elevation} = event;
    const[toggleEdit, setToggleEdit] = useState(true);

    let sport = (sport_id ===1) ? "Running" : "Cycling" 

    function shortTitle (title) {
        if (title.length > 39) {
            return title.substring(0, 40) + "..."
        } else {
            return title
        }
    }

    function deleteEvent () {
        fetch(`/activities/${id}`, {
            method: "DELETE"
        }).then(reRender)
    }

    return (
        <tr>
            <td>{shortTitle(title)}</td> 
            <td>{sport}</td>
            <td>{formatted_date}</td>
            <td>
                <Link to={`/Events/${event.id}`}  state={{title, sport, formatted_date, duration, distance, heart_rate, elevation}}>
                    <button className="table-btn">Details</button>
                </Link>
            </td>
            <td>
                 <Link to={`/Events/${event.id}/edit`} state={{id, title, sport, formatted_date, duration, distance, heart_rate, elevation}}>
                    <button value={event.id} className="table-btn" onClick={() => setToggleEdit(!toggleEdit)}>Edit</button>
                </Link>
            </td>
            <td>
                <button className="table-btn" onClick={e => deleteEvent(e)} value={event.id}>Delete</button>
            </td>
        </tr>
    )
}

export default EventCard;