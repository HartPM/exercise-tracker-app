import { Link } from 'react-router-dom';

function UserCard({ user }) {
    let {id, activities, dob, gender, name, profile_img, weight} = user;

    let age = (dob) => {
        const bd = new Date(dob);
        const year = bd.getFullYear();
        const today = new Date();
        const tYear = today.getFullYear();
        return tYear - year;
    }

    return (
        <tr>
            <td>
                <Link to={`${id}/Activities`}  state={{name, activities}}>
                    <img className="thumbnail" src= {profile_img} />
                </Link>
            </td> 
            <td>{name}</td>
            <td>{age(dob)}</td>
            <td>{gender}</td>
            <td>{weight}</td>               
        </tr>
    )
}

export default UserCard;