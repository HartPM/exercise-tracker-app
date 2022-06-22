import { useState, useEffect } from "react";

function Profile () {
    const [user, setUser] = useState({});
    const [name, setName] = useState(user.name);
    const [dob, setDob] = useState(user.dob);
    const [weight, setWeight] = useState(user.weight);
    const [gender, setGender] = useState(user.gender);
    const [profileImg, setProfileImg] = useState(user.profile_img);

    const [toggleForm, setToggleForm] = useState(false);

    useEffect(() => {
        fetch("/me").then((response) => {
        if (response.ok) {
            response.json().then((data) => setUser(data));
        }
        });
    }, []);

    function handleClick() {
        setToggleForm(!toggleForm);
    }

    function updateProfile(e) {
        e.preventDefault();
        const updatedUser = {
            name: name,
            dob: dob,
            weight: weight,
            gender: gender,
            profile_img: profileImg
        }
        fetch(`/users/${user.id}`, {
            method: "PATCH",
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify(updatedUser)
        })
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
                { toggleForm ? null : (
                    <form onSubmit={updateProfile}>
                        <label>
                            Name
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        </label>
                        <label>
                            Date of Birth
                            <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
                        </label>
                        <label>
                            Weight
                            <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
                        </label>
                        <label>
                            Gender
                            <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
                        </label>
                        <label>
                            Profile Image
                            <input type="text" value={profileImg} onChange={(e) => setProfileImg(e.target.value)} />
                        </label>
                        <button type="submit">Update Profile</button>
                    </form>
                )}
                {!toggleForm ? null : <button onClick={handleClick} >Update Profile</button> } 
            </div>

        </>
    )
}

export default Profile;