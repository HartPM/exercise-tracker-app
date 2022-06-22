
function ActivityCard ({activity}) {
    const {title, sport_id, created_at} = activity;

    let date = created_at.strf

    return (
        <li>
            <h3>{title}</h3> 
            <p>{sport_id}</p>
            <p>{date}</p>
            <button>Edit</button>
            <button>Analyze</button>
            <button>Delete</button>
        </li>
    )
}

export default ActivityCard;