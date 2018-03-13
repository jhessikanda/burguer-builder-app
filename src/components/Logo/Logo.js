import React from 'react';
import burguerLogo from '../../assets/images/burger-logo.png'; //path where webpack will store th eimage
import classes from './Logo.css';

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={burguerLogo} alt="My Burguer"/>
  </div>
);

export default logo;
