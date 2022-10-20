import {Link, useParams} from './react-demo';

const User = () => {
    const {id} = useParams ();
    return(
        <>
            <h1>Users</h1>
            <strong> Select a user: </strong>
            <ul>
                <li>
                    <link to="/users/1">User 1</link>
                </li>
                <li>
                    <link to="/users/2">user 2</link>
                </li>
                <li>
                    <link to="/users/3">user 3</link>
                </li>
            </ul>
            <p>{id}</p>
        </>
    );
}

export default User;