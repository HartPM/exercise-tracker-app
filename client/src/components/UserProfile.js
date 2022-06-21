import { Routes, Route, Link } from "react-router-dom";
function UserProfile () {


    return (
        <>
            <nav>
                <Link to="/user/:id">Profile</Link>
            </nav>
            <main>
                <h2>Welcome to the homepage!</h2>
            </main>
        </>
    )
}

export default UserProfile;