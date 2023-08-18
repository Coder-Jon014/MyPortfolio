// import React, { useState } from 'react';
// import { gsap } from 'gsap';

const Header = () => {
  // const [menuOpen, setMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   const navbar = document.querySelector('.navbar');

  //   if (!menuOpen) {
  //     gsap.to(navbar, { height: 'auto', duration: 0.5, ease: 'power3.out' });
  //   } else {
  //     gsap.to(navbar, { height: 0, duration: 0.5, ease: 'expo.inOut' });
  //   }

  //   setMenuOpen(!menuOpen);
  // };

  return (
    <header className="header">
      <a href="#home" className="logo">
        <svg fill="none" width="31" height="20" viewBox="0 0 49 38">
            <path fillRule="evenodd" clipRule="evenodd" d="M26.7436 0.558594H30.4126C34.1531 0.558594 37.3847 1.28955 40.1072 2.75147C42.8416 4.20149 44.9486 6.29334 46.4282 9.027C47.9197 11.7488 48.6655 15.0113 48.6655 18.8147C48.6655 22.6181 47.9256 25.8866 46.446 28.6202C44.9663 31.342 42.8712 33.4338 40.1605 34.8958C37.4498 36.3458 34.2478 37.0708 30.5547 37.0708H16.6423C15.4899 37.3032 14.2642 37.4194 12.9651 37.4194C10.6332 37.4194 8.50255 37.0169 6.5731 36.212C4.64365 35.3952 3.10482 34.1168 1.95662 32.3768C0.80842 30.6249 0.240238 28.3522 0.252075 25.5586H10.1242C10.1597 26.4701 10.3136 27.2395 10.5859 27.8668C10.87 28.4942 11.2606 28.9677 11.7578 29.2873C12.2668 29.5951 12.8823 29.7489 13.6043 29.7489C14.3383 29.7489 14.9538 29.5891 15.4509 29.2695C15.9333 28.9666 16.3041 28.5256 16.5632 27.9463V10.6299H6.25873V0.558594H16.5632H17.0134H26.7436ZM26.4353 28.2483V28.6559H30.1995C31.9988 28.6559 33.5317 28.3647 34.7983 27.7823C36.0767 27.1999 37.0473 26.1956 37.7102 24.7693C38.3849 23.3431 38.7223 21.3582 38.7223 18.8147C38.7223 16.2712 38.379 14.2863 37.6924 12.8601C37.0177 11.4338 36.0234 10.4295 34.7095 9.8471C33.4074 9.26471 31.8094 8.97352 29.9154 8.97352H26.7436V25.4876C26.7387 26.4553 26.636 27.3755 26.4353 28.2483Z" fill="white"/>
        </svg>
        <span className="logo-text">Jon</span>
      </a>
    
        <nav className="navbar">
          <div className="container">
          <a href="#home" className="home">
            <span className="link-text">Home</span>
            <span className="icon-container">
              <i className='bx bxs-home bx-tada-hover bx-border-circle'></i>
            </span>
          </a>
          <a href="#project" className="project">
            <span className="link-text">Projects</span>
            <span className="icon-container">
              <i className='bx bxs-briefcase bx-tada-hover bx-border-circle'></i>
            </span>
          </a>
          <a href="#about" className="about">
            <span className="link-text">About Me</span>
            <span className="icon-container">
              <i className='bx bxs-laugh bx-tada-hover bx-border-circle'></i>
            </span>
          </a>
          <a href="#contact" className="contact">
            <span className="link-text">Grab Me Coffee</span>
            <span className="icon-container">
              <i className='bx bxs-coffee bx-tada-hover bx-border-circle'></i>
            </span>
          </a>
          </div>
        </nav>
      </header>
  );
};

export default Header;
