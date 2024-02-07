import Home from './pages/Home/Home';
import Details from './pages/Details/Details';
import Login from './pages/Login/Login';
import { Route, Routes} from 'react-router-dom';

import './App.css'

function App() {
  const routes = [
    {
      pathname: "/",
      element: Home
    },
    {
      pathname: "/details",
      element: Details
    },
    {
      pathname: "/login",
      element: Login
    },
  ];

  return (
      <>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.pathname} element={<route.element />} />
          ))}
        </Routes>
      </>
  )
}

export default App
