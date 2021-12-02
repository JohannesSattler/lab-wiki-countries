import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <Link to="/">Home</Link>
            <br />
            <Link to="/countries">Countries</Link>
        </div>
    )
}

export default Navbar
