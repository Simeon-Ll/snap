import React from "react";
import { useState } from "react";
import Logo from '../assets/images/logo.svg'
import uArrow from '../assets/images/icon-arrow-up.svg'
import dArrow from '../assets/images/icon-arrow-down.svg'
import menu from '../assets/images/icon-menu.svg'
import list from './features'
import exit from '../assets/images/icon-close-menu.svg'






export default function Nav(){
    let [features, isFeatures] = React.useState(false)
    let [company, isCompany] = React.useState(false)
    let [isMenu, setIsMenu] = React.useState(false)
    function toggleFeatures(){
        isFeatures(prevState => !prevState)
    }
    function toggleCompany(){
        isCompany(prevState => !prevState)
    }
    function toggleMenu(){
        setIsMenu(prev => !prev)
    }


    function Contact() {
        return(
            <>
                <a href="##" onClick={toggleCompany}>Company <img src={company ? uArrow: dArrow} alt="" /></a>
                    {company && <div className="dropdown">
                        <div className="item"><p>History</p></div>
                        <div className="item"><p>Our Team</p></div>
                        <div className="item"><p>Blog</p></div>
                    </div> }
            </>
        )
    }

    function Features() {
        return(
            <>
                <a href="##" onClick={toggleFeatures}>Features <img src={features ? uArrow: dArrow} alt="" /></a>
                            {features && <div className="dropdown features">
                                {list.map((item, i) =>(
                                    <div key={i} className="item">
                                        <img src={item.icon} alt="" className="icon"/>
                                        <p className="text">{item.feature}</p>
                                    </div>
                                ))}
                            </div> }
            </>
        )
    }


    return(
        <nav>
            <img src={Logo} alt="" className="logo" />
            <ul className="list">
                <li>
                    <Features />
                </li>

                <li>
                    <Contact />
                </li>

                <li><a href="##">Careers</a></li>
                <li><a href="##">About</a></li>
            </ul>
            <div className="right list">
                <a href="##">Login</a>
                <a href="##" id="register">Register</a>
            </div>
            <div className="menu">
                <a href="##" onClick={toggleMenu}>
                    <img src={menu} alt="" />
                </a>
                {isMenu && <div className="sidebar">
                    <img src={exit} alt="" className="exit" onClick={toggleMenu} />
                    <ul>
                        <li>
                            <Features />
                        </li>

                        <li>
                            <Contact />
                        </li>

                        <li><a href="##">Careers</a></li>
                        <li><a href="##">About</a></li>
                    </ul>
                    <div className="bottom">
                        <a href="##">Login</a>
                        <a href="##" id="register">Register</a>
                    </div>
                </div>}
                    
                
            </div>
        </nav>
    )
}


