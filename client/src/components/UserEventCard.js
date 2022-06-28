import { Link } from 'react-router-dom';

function UserEventCard({event}) {
    const {title, sport_id, formatted_date, duration, distance, heart_rate, elevation} = event;

    let sport = (sport_id ===1) ? "Running" : "Cycling" 

    function shortTitle (title) {
        if (title.length > 39) {
            return title.substring(0, 40) + "..."
        } else {
            return title
        }
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
        </tr>
    )
}

export default UserEventCard;