import { useContext, useState } from 'react'
import reactLogo from '../../assets/react.svg'
import User from '../../Context/User/UserContext'
import { Link } from 'react-router-dom';

export default function Home() {
    const [count, setCount] = useState(0)

    const { user } = useContext(User); // LETS SEE IF IT CHANGE ALSO THE VALUE HERE

    console.log(user) // CHECK UPDATED VALUE

    return (
        <>
            <div>
            <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
            <p>
                Edit <code>src/App.jsx</code> and save to test HMR
            </p>
            </div>
            <p className="read-the-docs">
            Click on the Vite and React logos to learn more {user}
            </p>

            <Link to={'/login'}>Go to Login Page</Link><br></br>
            <Link to={'/details'}>Go to Details Page</Link>
        </>
    )
}
