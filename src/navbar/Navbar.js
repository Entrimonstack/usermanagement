import React from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav>
        <h1>UserManagementSystem</h1>
        <ul>
            <Link to="/">Home</Link>
            <Link to="/About">Aboutus</Link>
            <Link to="/Users">Users</Link>
            <Link to="/Contact">Contact</Link>
        </ul>
    </nav>
  )
}
export default Navbar