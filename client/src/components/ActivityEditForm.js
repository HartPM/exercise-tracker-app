import { useState } from 'react';
import { useLocation, Navigate } from 'react-router-dom';

function ActivityEditForm () {
    const location = useLocation();
    const {id, title, sport, distance, heart_rate, elevation} = location.state;

    const [newTitle, setNewTitle] = useState(title);
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const [newDistance, setNewDistance] = useState(distance);
    const [newHeartRate, setNewHeartRate] = useState(heart_rate);
    const [newElevation, setNewElevation] = useState(elevation);
    const [newSport, setNewSport] = useState(sport);
    const [update, setUpdate] = useState(false);

    const newDuration = (hours, minutes) => {
        return (hours === 0) ? minutes : hours * 60 + parseInt(minutes)
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        let activity = {}
        activity.title = newTitle
        activity.distance = newDistance
        activity.heart_rate = newHeartRate
        activity.elevation = newElevation
        if (minutes > 0) { activity.duration = newDuration(hours, minutes) }
        if (newSport === "Run") { 
            activity.sport_id = 1 
        } else if (newSport === "Bike") {
            activity.sport_id = 2
        }
        
        fetch(`/activities/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(activity),
        })
          .then((r) => r.json())
          .then(setUpdate(!update))
      };

    return (
        <div>
            <h2>Update Activity</h2>
            <div className="form-container1">
                <form className="form1" onSubmit={e => handleSubmit(e)}>
                    <label>
                        Title
                        <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
                    </label>
                    <label>
                        Duration
                            <input className="input1" placeholder={'min'} type="number" value={minutes} onChange={(e) => setMinutes(e.target.value)} />
                            <input className="input1" placeholder={'hr'} type="number" value={hours} onChange={(e) => setHours(e.target.value)} />
                    </label>
                    <label>
                        Distance
                        <input type="text" value={newDistance} onChange={(e) => setNewDistance(e.target.value)} />
                    </label>
                    <label>
                        Heart Rate
                        <input type="text" value={newHeartRate} onChange={(e) => setNewHeartRate(e.target.value)} />
                    </label>
                    <label>
                        Elevation
                        <input type="text" value={newElevation} onChange={(e) => setNewElevation(e.target.value)} />
                    </label>
                    <label>Choose a sport
                        <select onChange={(e) => setNewSport(e.target.value)}>
                            <option></option>
                            <option>Run</option>
                            <option>Bike</option>
                        </select>
                    </label>
                    <button className="form-button1" type="submit">Save</button>
                    {update ? <Navigate replace to="/activities" /> : null}
            </form>
        </div>
    </div>
    )
}

export default ActivityEditForm;