import { useState, useEffect } from 'react';
import LongestRuns from './LongestRuns';
import LongestRides from './LongestRides';

function LeaderBoard() {
    const [runs, setRuns] = useState([]);
    const [rides, setRides] = useState([]);

    useEffect(() => {
    fetch('/longest_runs').then((response) => {
        if (response.ok) {
          response.json().then((data) => setRuns(data))
        }});
    }, []);

    useEffect(() => {
        fetch('/longest_rides').then((response) => {
            if (response.ok) {
              response.json().then((data) => setRides(data));
            }});
        }, [runs]);

    return (
        <div className='leaderboard-container'>
            <div className="profile-column">
            <h1>Longest Runs</h1>
            {runs.map(run => <LongestRuns key={run.id} run={run} />) }
            </div>
            <div className="profile-column">
            <h1>Longest Rides</h1>
            {rides.map(ride => <LongestRides key={ride.id} ride={ride} />) }
            </div>
        </div>
    )
}

export default LeaderBoard;