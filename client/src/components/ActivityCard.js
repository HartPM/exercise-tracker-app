import ActivityEditForm from "./ActivityEditForm";


function ActivityCard ({activity}) {
    const {id, title, sport_id, formatted_date} = activity;

    let sport = (sport_id ===1) ? "Running" : "Cycling" 

    function shortTitle (title) {
        if (title.length > 39) {
            return title.substring(0, 40) + "..."
        } else {
            return title
        }
    }

    function edit () {

    }

    function deleteActivity (e) {
        fetch(`/activities/${id}`, {
            method: "DELETE"
        })
    }


    return (
        <li>
            <h4>{shortTitle(title)}</h4> 
            <p>{sport}</p>
            <p>{formatted_date}</p>
            <button onClick={edit}>Edit</button>
            <ActivityEditForm id={id}/>
            <button>Analyze</button>
            <button onClick={deleteActivity} value={activity.id}>Delete</button>
        </li>
    )
}

export default ActivityCard;