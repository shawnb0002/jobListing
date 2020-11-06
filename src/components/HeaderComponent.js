import React from 'react';
import HeaderBanner from '../images/bg-header-desktop.svg';
import '../css/style.css';

function HeaderComponent(){
    return(
        <img className="headerStyles" src={HeaderBanner} alt="Header Banner" />
    )
}

export default HeaderComponent;
