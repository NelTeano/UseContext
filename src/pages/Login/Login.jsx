import { useContext } from 'react'
import User from '../../Context/User/UserContext'
import { Link } from 'react-router-dom';

export default function Login() {

    const { user, setUser } = useContext(User);

    const updateUserLogin = () => {
        setUser('The user changed from login')
    }
    return (
        <>
            This is Login Page User Value : {user}<br></br>
            <button onClick={updateUserLogin}>UPDATE USER LOGIN</button>
            <Link to={'/'}>Go back to Home</Link><br></br>
            <Link to={'/details'}>Go to Details Page</Link><br></br>
        </>
    )
}
