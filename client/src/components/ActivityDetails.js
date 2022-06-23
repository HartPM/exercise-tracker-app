import { useLocation } from 'react-router-dom'

function ActivityDetails () {
    const location = useLocation();
    const {title, sport, duration, formatted_date, distance, heart_rate, elevation} = location.state;

    const time = (duration) => {
        let remainder = duration % 60;
        if (duration < 60) {
            return `${duration} mins`
        } else if (remainder === 0) {
            return `${duration/60} hours`
        } else {
            return `${Math.floor(duration/60)}hr: ${remainder}min`
        }
    }

    return (
        <div>
            <h1>Analyze activity: {title}</h1>
            <h1>{formatted_date}</h1>
            <h1>{sport}</h1>
            <h1>{distance} miles</h1>
            <h1>{time(duration)}</h1>
            <h1>elevation gain {elevation} feet</h1>
            <h1>{heart_rate} bpm</h1>
            <h1>avg speed {distance/(duration/60)} mph</h1>
            <h1>pace {duration/distance} min/mile </h1>

        </div>
    )
}

export default ActivityDetails;