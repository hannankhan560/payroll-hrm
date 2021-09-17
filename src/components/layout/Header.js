import React from 'react'
import './header.css';
import logo from '../../images/logo-white.png'
import { FaUserCircle } from 'react-icons/fa';


function Header() {
    var today = new Date();
    var time = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    return (
        <div className="header">
            <div className="container">
                <div className="header-content">
                    <div className="header-logo"><img src={logo} alt="logo" /> </div>
                    <div className='header-date'>{time}</div>
                    <div className="header-nav">
                        <ul>
                            <li><FaUserCircle /> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
