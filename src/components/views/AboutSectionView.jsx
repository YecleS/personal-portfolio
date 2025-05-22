import React from 'react';
import '../styles/AboutSectionView.css'

import AboutImg from '../../assets/images/about-img.webp'
import PrimaryButton from '../buttons/PrimaryButton';

export default function AboutSectionView() {
  return (
    <section id='about-section'>
        <div className='section-wrapper'>
            <img src={AboutImg} alt="about image" />

            <div>
                <p className='leading-text'>About</p>
                <h2>Get to Know Me</h2>

                <p>Fresh out of college and ready to take on real-world challenges — I enjoy troubleshooting tech issues and bringing ideas to life through web design. With a background in IT, I’ve developed a solid foundation in technical support, from diagnosing problems to helping users find effective solutions. At the same time, I discovered a strong interest in front-end development and UI/UX design. I love creating websites that not only look good but also offer smooth, user-friendly experiences. </p>
                <p>I’m currently looking for opportunities where I can continue to build my skills, collaborate with others, and bring value to teams focused on IT support, web development, or digital design.</p>

                <div className='personal-details'>
                    <li><i className="fa-solid fa-house"></i> Cabuyao City, Laguna, Philippines</li>
                    <li><i className="fa-solid fa-phone"></i> +63 921792775</li>
                    <li><i className="fa-solid fa-envelope"></i> yeclasteven85@gmail.com</li>
                </div>

                <PrimaryButton customClass='cta-button' Label='Download CV' />

                <div className='social-icons-wrapper'>
                    <a href="#"><i className="fa-brands fa-square-facebook"></i></a>
                    <a href="#"><i className="fa-brands fa-square-instagram"></i></a>
                    <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
        </div>
    </section>
  )
}
