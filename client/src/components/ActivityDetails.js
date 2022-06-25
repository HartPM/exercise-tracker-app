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
        <>
        <h2>{title}</h2>
        <div className="detail-container">
            <div className="detail-column">
                <ul>
                    <li>
                        <h3>Type</h3>
                        <p>{sport}</p>
                    </li>
                    <li>
                        <h3>Distance</h3>
                        <p>{distance} miles</p>
                    </li>
                    <li>
                        <h3>Duration</h3>
                        <p>{time(duration)}</p>
                    </li>
                    <li>
                        <h3>Elevation Gain</h3>
                        <p>{elevation} feet</p>
                    </li>
                </ul>
            </div>
            <div className="detail-column">
                <ul>
                    <li>
                        <h3>Heart Rate</h3>
                        <p>{heart_rate} bpm</p>
                    </li>
                    <li>
                        <h3>Avg Speed</h3>
                        <p>{(distance/(duration/60)).toFixed(1)} mph</p>
                    </li>
                    <li>
                        <h3>Pace</h3>
                        <p>{(duration/distance).toFixed(2)} min/mile</p>
                    </li>
                    <li>
                        <h3>Date</h3>
                        <p>{formatted_date}</p>
                    </li>
                </ul>
            </div>
        </div>
        </>    )
}

export default ActivityDetails;