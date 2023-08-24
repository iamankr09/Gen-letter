import React from 'react'
import classes from './Home.module.css';
import { Button } from '../Button/Button';

const Home = () => {
  return (
    <div>
      <div className={`${classes.group}`}>
        <div className={`${classes.text}`}>
          <div className={`${classes.welcome_content}`}>Welcome to genletter</div>
          <div className={`${classes.welcome_heading}`}>Turn raw data into formal document</div>
          <div className={`${classes.welcome_description}`}>Offer letters, application letters, resumes and much more!</div>
          <Button content='GET STARTED'/>
        </div>
      </div>
    </div>
  )
}

export default Home;
