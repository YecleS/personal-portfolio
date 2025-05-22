import React from 'react';
import '../styles/ButtonedCardsStyle.css'

export default function ButtonedCards({customClass, img, title, date, descp, tech, children}) {
  return (
    <div className={`buttoned-card ${customClass}`}>
        <img className='buttoned-card-image' src={img} alt="card image" />

        <div className='card-body'>
            <div className='card-body-header'>
                <h5>{title}</h5>

                <p className='muted-text'><i className="fa-solid fa-calendar-days"></i> {date}</p>
            </div>
            
            <p className='buttoned-card-descp'>{descp}</p>

            <p className='buttoned-card-icon-title'>Technology Used</p>
            <div className='tech-icons-wrapper'>      
                {tech && tech.map((icon, index) => (
                    <img src={icon} key={index} alt="Technology Icon" />
                ))}
            </div>

            <div className='card-body-footer'>
                {children}
            </div>
        </div>

    </div>
  )
}
