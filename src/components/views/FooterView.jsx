import React from 'react';
import '../styles/FooterViewStyle.css';

export default function FooterView() {
  return (
    <footer>
        <div className='section-wrapper'>
            <ul>
                <p>Links</p>

                <li><a href="#hero-section">Home</a></li>
                <li><a href="#about-section">About</a></li>
                <li><a href="#passion-section">Passion</a></li>
                <li><a href="#background-section">Background</a></li>
                <li><a href="#skills-section">Skills</a></li>
                <li><a href="#projects-section">Projects</a></li>
                <li><a href="#certificates-section">Certificates</a></li>
            </ul>

            <ul>
                <p>Contact Me</p>
                
                <li>Cabuyao City, Laguna, Philippines</li>
                <li>+63 921792775</li>
                <li>yeclasteven85@gmail.com</li>
            </ul>

            <ul>
                <p>Social Links</p>

                <div className='social-icons-wrapper'>
                    <a href="https://www.facebook.com/yecla.steven" target='__blank'><i className="fa-brands fa-square-facebook"></i></a>
                    <a href="https://www.instagram.com/steven_yecla/" target='__blank'><i className="fa-brands fa-square-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/yecla-steven-7387b2345/" target='__blank'><i className="fa-brands fa-linkedin"></i></a>
                </div>
            </ul>

            <ul>
                <p>Interested in hiring me ?</p>

                <div className='input-wrapper'>
                    <input type="email" placeholder='Enter your email' />
                    <button>Submit</button>
                </div>
            </ul>
        </div>
    </footer>
  )
}
