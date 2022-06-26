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
        <div className="profile-container">
            <div>
                <img className="profile-img" src={user.profile_img} alt='Profile' />
                <h2>{user.name}</h2>
                {!toggleForm ? null : <button className="p-button" onClick={e => setToggleForm(!toggleForm)}>Update Profile</button>}
            </div>
            <div className="profile-column">
                <ul>
                    <li>Birthday: {user.dob}</li>
                    <li>Weight: {user.weight} lbs</li>
                    <li>Gender: {user.gender}</li>
                </ul>
            </div>
            <div className="profile-column">
                <h4>Total Runs: {activities.reduce((counter, obj) => obj.sport_id === 1 ? counter += 1 : counter, 0)}</h4>
                <h4>Total Rides: {activities.reduce((counter, obj) => obj.sport_id === 2 ? counter += 1 : counter, 0)}</h4>
            </div>
        </div>
        <br></br>
        <div className="form-container2">
            { toggleForm ? null : <ProfileEditForm user={user} render={setForm} hideForm={hideForm} /> }
        </div>
        </>
    )
}

export default Profile;