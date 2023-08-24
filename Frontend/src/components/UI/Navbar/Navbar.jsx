import React from 'react'
import classes from './Navbar.module.css';
import logo from '../../../assets/Icon-notepad.png';
import Navbaritem from './Navbatitem';

const Navbar = (props) => {

  const logout = () => {
    window.open(`http://localhost:5011/auth/logout`, '_self')
  }

  return (
    <div className={`${classes.list}`}>
      <div className={`${classes.left}`}>
        <img src={logo} alt="logo" className={`${classes.logo}`} />
        <Navbaritem item='Genletter' link='/' />
      </div>
      <div className={`${classes.right}`}>
        <Navbaritem item='Home' link='/' />
        <Navbaritem item='Profile' link='/profile' /> 
        {props.user ? <Navbaritem item='Logout' onLogout={logout}/> : <Navbaritem item='Login' link='/login' />}
      </div>
    </div>
  )
}

export default Navbar;
