import { useState, useEffect } from "react";
import ProfileEditForm from "./ProfileEditForm";

function Profile () {
    const [user, setUser] = useState({});
    const [toggleForm, setToggleForm] = useState(true);
    const [form, setForm] = useState(false);
    

    useEffect(() => {
        fetch("/me").then((response) => {
        if (response.ok) {
            response.json().then((data) => setUser(data));
        }
        });
    }, [form]);

    function hideForm() {
    setToggleForm(true);
    }

    return (
        <>
            <br></br>
            <div>
                <img src={user.profile_img} alt='Profile' />
                <h4>{user.name}</h4>
            </div>
            <div>
                <ul>
                    <li>Birthday: {user.dob}</li>
                    <li>Athlete Weight: {user.weight} lbs</li>
                    <li>Gender: {user.gender}</li>
                </ul>
            </div>
            <div>
                { toggleForm ? null : <ProfileEditForm user={user} render={setForm} hideForm={hideForm} /> }
                {!toggleForm ? null : <button onClick={e => setToggleForm(!toggleForm)} >Update Profile</button> } 
            </div>

        </>
    )
}

export default Profile;