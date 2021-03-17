import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar() {
    return (
        <header>
            <h1>HappyHabit</h1>
            <ul>
                <li><Link to={`/`}>Home</Link></li>
                <li><Link to={`/`}>Dashboard</Link></li>
                <li><Link to={`/`}>Create a new entry</Link></li>
                {/**login, sign up, log out all need to conditionally render */}
            </ul> 
        </header>
    )
}