import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../img/Logo.jpg"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
            <img src={Logo} alt="" />
        </div>
        <div className="links">
            <Link className='link' to ="/?cat=programming">
                <h6>PROGRAMMING</h6>
            </Link>
            <Link className='link' to ="/?cat=cooking">
                <h6>COOKING</h6>
            </Link>
            <Link className='link' to ="/?cat=hobbies">
                <h6>HOBBIES</h6>
            </Link>
            <Link className='link' to ="/?cat=portfolio">
                <h6>PORTFOLIO</h6>
            </Link>
            <span>Kevin</span>
            <span>Logout</span>
            <span className="write">
              <Link className="link" to="/write">Write</Link>
            </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar