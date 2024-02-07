import { useState } from "react"
import User from "./UserContext"
import PropTypes from 'prop-types';


export default function UserProvider({ children }) {

    const [user, setUser] = useState('My User');

    return (

        <>
            <User.Provider value={{ user, setUser }}>
                {children}
            </User.Provider>
        </>
    )
}

UserProvider.propTypes = {
    children: PropTypes.node // Validate that children is a React node
};