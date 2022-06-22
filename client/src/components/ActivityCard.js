
function ActivityCard ({activity}) {
    const {title, sport_id, formatted_date} = activity;

    let sport = (sport_id ===1) ? "Running" : "Cycling" 

    function shortTitle (title) {
        if (title.length > 39) {
            return title.substring(0, 40) + "..."
        } else {
            return title
        }
    }

    return (
        <li>
            <h4>{shortTitle(title)}</h4> 
            <p>{sport}</p>
            <p>{formatted_date}</p>
            <button>Edit</button>
            <button>Analyze</button>
            <button>Delete</button>
        </li>
    )
}

export default ActivityCard;