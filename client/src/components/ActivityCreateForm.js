import { useState } from 'react';

function ActivityCreateForm ({user, hideForm, reRender}) {
    const [title, setTitle] = useState('');
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
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
        <div className="form-container1">
            <form className="form1" onSubmit={handleSubmit}>
                <label>
                    Title
                    <input 
                    type="text" 
                    placeholder={'name your activity'}
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} />
                </label>
                <label>
                    Duration
                    <label>
                        <input 
                        className="input1" 
                        placeholder={'min'}
                        type="number" 
                        value={minutes} 
                        onChange={(e) => setMinutes(e.target.value)} />
                    </label>
                    <label>
                        <input 
                        className="input1" 
                        placeholder={'hr'}                   type="number" 
                        value={hours} 
                        onChange={(e) => setHours(e.target.value)} />
                    </label>
                </label>
                <label>
                    Distance
                    <input 
                    placeholder={'miles'}
                    type="text" value={distance} onChange={(e) => setDistance(e.target.value)} />
                </label>
                <label>
                    Heart Rate
                    <input 
                    placeholder={'bpm'}
                    type="text" value={heartRate} onChange={(e) => setHeartRate(e.target.value)} />
                </label>
                <label>
                    Elevation
                    <input 
                    placeholder={'feet climbed'}
                    type="text" value={elevation} onChange={(e) => setElevation(e.target.value)} />
                </label>
                <label>Sport
                    <select onChange={(e) => setSport(e.target.value)}>
                        <option></option>
                        <option value="1">Run</option>
                        <option value="2">Bike</option>
                    </select>
                </label>
                <button className="form-button1" type="submit">Save</button>
            </form>
        </div>
    )
}

export default ActivityCreateForm;