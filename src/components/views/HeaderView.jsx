import React, { useRef, useState } from 'react';
import '../styles/HeaderViewStyle.css';

import PortfolioLogo from '../../assets/logos/portfolio-logo.svg'
import useClickOutside from '../../hooks/useClickOutside';


export default function HeaderView() {
    const navRef = useRef();
    const [sidebarIsActive, setSidebarIsActive] = useState(false);

    const toggleSidebar = () => {
        setSidebarIsActive(!sidebarIsActive);
    }
    
    useClickOutside(navRef, () => {setSidebarIsActive(false)});


  return (
    <header>
      <div className='section-wrapper' ref={navRef}>
        <div className='logo-wrapper'>
            <i className="fa-solid fa-bars" onClick={toggleSidebar}></i>
            <img src={PortfolioLogo} alt="Logo" />
        </div>
        
        <nav className={`${sidebarIsActive ? 'active':''}`}>
            <i className="fa-solid fa-xmark" onClick={toggleSidebar}></i>
            <a href="#hero-section">Home</a>
            <a href="#about-section">About</a>
            <a href="#passion-section">Passion</a>
            <a href="#background-section">Background</a>
            <a href="#skills-section">Skills</a>
            <a href="#projects-section">Projects</a>
            <a href="#certificates-section">Certificates</a>
        </nav>
      </div>
    </header>
  )
}
