import { useState } from "react";

function ProfileEditForm ({ user, render, hideForm }) {
    const [name, setName] = useState(user.name);
    const [dob, setDob] = useState(user.dob);
    const [weight, setWeight] = useState(user.weight);
    const [gender, setGender] = useState(user.gender);
    const [profileImg, setProfileImg] = useState(user.profile_img);

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
        }).then(render).then(hideForm)
    }

    return (
        <form className="form1" onSubmit={updateProfile}>
            <label>
                Name
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
                Date of Birth
                <input className="input2" type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
            </label>
            <label>
                Weight
                <input type="number" className="input2" value={weight} onChange={(e) => setWeight(e.target.value)} />
            </label>
            <label>
                Gender
                <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
            </label>
            <label>
                Profile Image
                <input type="text" value={profileImg} onChange={(e) => setProfileImg(e.target.value)} />
            </label>
            <button className="form-button1" type="submit">Update Profile</button>
        </form>
    )
}

export default ProfileEditForm;