import { Input } from '@mui/material'
import React from 'react'

export default function Header() {
  return (
    <nav className="navbar">
        <div className="logo">
            <h3 className="logo-h">Gopart</h3>
        </div>
        <uI className="classlists">
            <li>Home</li>
            <li>About</li>
            <li>My cart</li>
            <li>Logout</li>
            <li>User Profile</li>
        </uI>
        <div className="Search">
            <input type="text" className="in" />
        </div>
        
    </nav>
  )
}
