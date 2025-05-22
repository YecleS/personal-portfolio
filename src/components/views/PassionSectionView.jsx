import React, { useState } from 'react';
import '../styles/PassionSectionViewStyle.css'

import ColoredCards from '../Cards/ColoredCards';
import PassionData from '../../data/PassionData.json'
import TechSuppIcon from '../../assets/icons/it-support.svg';
import WebDesignIcon from '../../assets/icons/designer-2.svg';
import UIUXIcon from '../../assets/icons/designer-3.svg';
import DeveloperIcon from '../../assets/icons/web-developer.svg';

export default function PassionSectionView() {
    const [data] = useState(PassionData);

    const cardIcons = {
        "IT Technical Support":TechSuppIcon,
        "Web Design":WebDesignIcon,
        "UI/UX Design":UIUXIcon,
        "Front End Development":DeveloperIcon,
    }
    
  return (
    <section id='passion-section'>
        <div className='section-wrapper'>
            <p className='leading-text'>Passion</p>
            <h2>Fields I'm Passionate <br />About</h2>

            <div className='cards-wrapper'>
                {data.map(passion => (
                    <ColoredCards 
                        key={passion.id} 
                        customClass='card' 
                        icons={cardIcons[passion.label]} 
                        label={passion.label}
                        descp={passion.descp}
                    />
                ))}
            </div>
        </div>
    </section>
  )
}
