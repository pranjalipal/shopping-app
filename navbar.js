import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
  <ul className="navbar-nav mx-auto">
    <li className="nav-item ">
      <Link className="nav-link" to="/">Home</Link>
    </li>
    <li className="nav-item ">
      <Link className="nav-link" to="/login">Log In</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/signup">Sign Up</Link>
    </li>
  </ul>
</nav>
  )
}
