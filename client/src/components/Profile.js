import { useState, useEffect } from "react";
import ProfileEditForm from "./ProfileEditForm";


function Profile () {
    const [user, setUser] = useState({});
    const [toggleForm, setToggleForm] = useState(true);
    const [form, setForm] = useState(false);
    const[activities, setActivities] = useState([]);
    

    useEffect(() => {
        fetch("/me").then((response) => {
        if (response.ok) {
            response.json()
            .then((data) => setUser(data))
        }
        });
    }, [form]);

    function hideForm() {
    setToggleForm(true);
    }

    useEffect(() => {
        fetch("/me")
        .then((response) => {
        if (response.ok) {
            response.json()
            .then((data) => setActivities(data.activities))
        }});
    }, []);

    return (
        <>
            <div>
                { toggleForm ? null : <ProfileEditForm user={user} render={setForm} hideForm={hideForm} /> }
                {!toggleForm ? null : <button onClick={e => setToggleForm(!toggleForm)} >Update Profile</button> }
                <br></br>
                <br></br>
                <img src={user.profile_img} alt='Profile' />
                <h2>{user.name}</h2>
            </div>
            <div>
                <ul>
                    <li>Birthday: {user.dob}</li>
                    <li>Athlete Weight: {user.weight} lbs</li>
                    <li>Gender: {user.gender}</li>
                </ul>
            </div>
            <div>
                <h4>Total Runs: {activities.reduce((counter, obj) => obj.sport_id === 1 ? counter += 1 : counter, 0)}</h4>
                <h4>Total Rides: {activities.reduce((counter, obj) => obj.sport_id === 2 ? counter += 1 : counter, 0)}</h4>
            </div>
        </>
    )
}

export default Profile;