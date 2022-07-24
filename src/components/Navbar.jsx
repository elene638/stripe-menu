import React from 'react'
import {useGlobalContext} from './context'
import logo from '../images/logo.svg'
import {FaBars} from 'react-icons/fa'

function Navbar() {

  const {openSidebar, openSubmenu, closeSubmenu} = useGlobalContext()

  return (
    <nav className='nav'>
      <div className='main-nav'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='logo' />
          <button className='nav-btn' onClick={openSidebar}><FaBars /></button>
        </div>
        <ul className='nav-links'>
          <li>
            <button className='link-btn'>products</button>
          </li>
          <li>
            <button className='link-btn'>developers</button>
          </li>
          <li>
            <button className='link-btn'>company</button>
          </li>
        </ul>
        <button className='sign-in-btn'>Sign in</button>
      </div>
    </nav>
  )
}

export default Navbar