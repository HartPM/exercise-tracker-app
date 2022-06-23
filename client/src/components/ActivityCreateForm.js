import { useState } from 'react';

function ActivityCreateForm ({user, hideForm, reRender}) {
    const [title, setTitle] = useState('');
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [distance, setDistance] = useState('');
    const [heartRate, setHeartRate] = useState('');
    const [elevation, setElevation] = useState('');
    const [sport, setSport] = useState('');

    const duration = (hours, minutes) => {
        return (hours === 0) ? minutes : hours * 60 + parseInt(minutes)
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        const activity = {
            title: title,
            duration: duration(hours, minutes),
            distance: parseInt(distance),
            heart_rate: parseInt(heartRate),
            elevation: parseInt(elevation),
            sport_id: parseInt(sport),
            user_id: user.id
        }

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
            setHours(0),
            setMinutes(0),
            setDistance(""),
            setHeartRate(""),
            setElevation("")
          )
          .then(hideForm)
          .then(reRender)
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
                    <label>
                        <input type="number" value={hours} onChange={(e) => setHours(e.target.value)} />
                        hrs :
                    </label>
                    <label>
                        <input type="number" value={minutes} onChange={(e) => setMinutes(e.target.value)} />
                        mins
                    </label>
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

export default ActivityCreateForm;