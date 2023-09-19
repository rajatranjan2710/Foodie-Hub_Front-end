import React, { useState } from 'react'
import { IoFastFoodOutline } from 'react-icons/io5'
import { FiShoppingCart, FiLogIn } from 'react-icons/fi'
import { FaUser, FaTimes, FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = ({ isAuthenticated = false }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropDown = () => {
    setDropdownOpen(!isDropdownOpen);
  }

  const closeDropdown = ()=>{
    setDropdownOpen(!isDropdownOpen);
  }

  return (
    <nav className='nav'>
      <div className='icon'>
        <IoFastFoodOutline />
      </div>
      <div className='routes'>
        <Link to='/'>Home</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/about'>About</Link>
        <Link to='/cart'><FiShoppingCart /></Link>
        <Link to={isAuthenticated ? "/me" : "/login"}>
          {isAuthenticated ? <FaUser /> : <FiLogIn />}
        </Link>

      </div>
      <div className={`dropdown ${isDropdownOpen?'active':''}`}>
        <button onClick={toggleDropDown}>
          {isDropdownOpen ? <FaTimes /> : <FaBars />}
        </button>
        {isDropdownOpen&&(
        <div className='drop-content'>
          <Link to='/' onClick={closeDropdown}>Home</Link>
          <Link to='/contact' onClick={closeDropdown}>Contact</Link>
          <Link to='/about' onClick={closeDropdown}>About</Link>
          <Link to='/cart' onClick={closeDropdown}><FiShoppingCart onClick={closeDropdown} /></Link>
          <Link to={isAuthenticated ? "/me" : "/login" } onClick={closeDropdown}>
            {isAuthenticated ? <FaUser /> : <FiLogIn />}
          </Link>
        </div>)}
      </div>

    </nav>
  )
}

export default Header