import React from 'react';
import '../styles/HeroSectionViewStyle.css'

import HeroImg from '../../assets/images/hero-img.webp';

export default function HeroSectionView() {



  return (
    <section id="hero-section">
      <div className="section-wrapper">
        <img src={HeroImg} alt="hero image" />

        <div className="hero-details-wrapper">
          <p>Hello, i'm Steven Yecla</p>
          <h1>
            Aspiring <span className="accent-text">IT Support Technician</span>{" "}
            <br />& <span className="accent-text">Web Desinger</span>
          </h1>
          <a
            href="/Steven Yecla - Resume.pdf"
            download
            className="hero-cta"
          >
            Download CV
          </a>

          <div className="social-icons-wrapper">
            <a href="https://www.facebook.com/yecla.steven" target='__blank'>
              <i className="fa-brands fa-square-facebook"></i>
            </a>
            <a href="https://www.instagram.com/steven_yecla/" target='__blank'>
              <i className="fa-brands fa-square-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/yecla-steven-7387b2345/" target='__blank'>
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
