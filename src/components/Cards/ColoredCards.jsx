import React from 'react';
import '../styles/ColoredCards.css'

export default function ColoredCards({customClass, icons, label, descp}) {
    const colors = ['#C4DEFF', '#F6C9FF', '#FFD7D7', '#B8FFE3'];
    const randomColors = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div className={`colored-cards ${customClass}`}>
      <img src={icons} alt="Cards icon" />

      <h5>{label}</h5>
      <p className='muted-text '>{descp}</p>

      <span className='card-blob' style={{background: randomColors}}></span>
    </div>
  )
}
