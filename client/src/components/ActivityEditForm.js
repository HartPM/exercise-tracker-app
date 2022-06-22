import { useState } from 'react';

function ActivityEditForm ({ id, reRender }) {
    const [title, setTitle] = useState('');
    const [duration, setDuration] = useState('');
    const [distance, setDistance] = useState('');
    const [heartRate, setHeartRate] = useState('');
    const [elevation, setElevation] = useState('');
    const [sport, setSport] = useState(null);

    
    function handleSubmit(e) {
        e.preventDefault();
        const activity = {}
        if (title.length > 0) { activity.title = title }
        if (duration.length > 0) { activity.duration = duration }
        if (distance.length > 0) { activity.distance = distance }
        if (heartRate.length > 0) { activity.heartRate = heartRate }
        if (elevation.length > 0) { activity.elevation = elevation }
        if (sport === "Run") { 
            activity.sport_id = 1 
        } else if (sport === "Bike") {
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
          .then(
            setTitle(""),
            setDuration(""),
            setDistance(""),
            setHeartRate(""),
            setElevation("")
          ).then(reRender)
      }

    return (
        <form onSubmit={e => handleSubmit(e)}>
        <label>
            Title
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
            Duration
            <input type="text" value={duration} onChange={(e) => setDuration(e.target.value)} />
        </label>
        <label>
            Distance
            <input type="text" value={distance} onChange={(e) => setDistance(e.target.value)} />
        </label>
        <label>
            Heart Rate
            <input type="text" value={heartRate} onChange={(e) => setHeartRate(e.target.value)} />
        </label>
        <label>
            Elevation
            <input type="text" value={elevation} onChange={(e) => setElevation(e.target.value)} />
        </label>
        <label>Choose a sport
            <select onChange={(e) => setSport(e.target.value)}>
                <option></option>
                <option>Run</option>
                <option>Bike</option>
            </select>
        </label>
        <button type="submit">Save</button>
    </form>
    )
}

export default ActivityEditForm;