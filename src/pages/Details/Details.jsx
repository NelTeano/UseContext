import { useContext } from "react"
import User from "../../Context/User/UserContext"
import { Link } from "react-router-dom"


export default function Details() {

    // USE THE CONTEXT
    const { user, setUser } = useContext(User)

    // CHANGE VALUE USING CONTEXT USESTATE
    const updateUser = () => {
        setUser('The user changed')
    }

    // CHECK IF IT WORKS FINE   
    const resetUser = () => {
        setUser('The user reset')
    }

    // CHECK THE VALUE
    console.log(user);



    return (
        <div>
            Details Page
            <button onClick={updateUser}>CHANGE USER VALUE</button>
            <button onClick={resetUser}>RESET USER VALUE</button><br></br>
            <Link to={'/'}>go to home</Link><br></br>
            <Link to={'/login'}>go to login</Link><br></br>
        </div>
    )
}
