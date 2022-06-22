import { useState } from 'react';

function UploadActivityForm ({user}) {
    const [title, setTitle] = useState('');
    const [duration, setDuration] = useState('');
    const [distance, setDistance] = useState('');
    const [heartRate, setHeartRate] = useState('');
    const [elevation, setElevation] = useState('');
    const [sport, setSport] = useState('');

    
    function handleSubmit(e) {
        e.preventDefault();
        const activity = {
            title: title,
            duration: parseInt(duration),
            distance: parseInt(distance),
            heart_rate: parseInt(heartRate),
            elevation: parseInt(elevation),
            sport_id: parseInt(sport),
            user_id: user.id
        }
        console.log(activity)
        fetch("/activities", {
          method: "POST",
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
          )
      }


    return(
        <div>
            <form onSubmit={handleSubmit}>
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
                        <option value="1">Run</option>
                        <option value="1">Bike</option>
                    </select>
                </label>

                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default UploadActivityForm;