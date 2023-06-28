import React from 'react'
import logo from '../img/logo.png'
import toggle from '../img/toggle.png'
import {Link} from 'react-router-dom'

const NavHeader = () => {
  return (
    <header className='navHeader'>
        <Link to='/'><img src={logo} alt='Logo' className='logo' /></Link>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/'>About</Link></li>
                <li><Link to='/'>Menu</Link></li>
                <li><Link to='/'>Contact</Link></li>
            </ul>
        </nav>
            <Link to="bookings" className='btnbook' >Book Table</Link>
            <img src={toggle} alt='menu toggle' id='toggle' />
    </header>
  )
}

export default NavHeader