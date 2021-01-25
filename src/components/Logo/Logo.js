import React from 'react';
import burgerLogo from '../../assets/Images/burger-logo.jpeg'
import './Logo.css';

const logo =(props) => (
    <div className="Logo">
        <img src={burgerLogo}/>
    </div>
);

export default logo;