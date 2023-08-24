import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Navbaritem.module.css';

const Navbatitem = (props) => {
  return (
    <Link className={`${classes.link}`} to={props.link} onClick={props.onLogout}><span>{props.item}</span></Link>
  )
}

export default Navbatitem
