import React, { useState } from 'react';
import '../styles/BackgroundSectionViewStyle.css'

import PuloLogo from '../../assets/logos/pulo-logo.svg';
import PuloNatLogo from '../../assets/logos/pulo-nat-logo.svg';
import AMALogo from '../../assets/logos/ama-logo.svg';
import PNCLogo from '../../assets/logos/pnc-logo.svg';
import CBLogo from '../../assets/logos/cb-logo.svg';
import BackgroundData from '../../data/BackgroundData.json';

export default function BackgroundSectionView() {
    const [educData] = useState(BackgroundData.education);
    const [workData] = useState(BackgroundData.work);

    const icons = {
        "Pulo Elementary Shool": PuloLogo,
        "Pulo National High School": PuloNatLogo,
        "AMA Computer College Calamba Campus": AMALogo,
        "University of Cabuyao": PNCLogo,
        "Creative Bananas": CBLogo,
    }

  return (
    <section id="background-section">
      <div className="section-wrapper">
        <p className="leading-text">Background</p>
        <h2>
          Academic Work &<br />
          Background
        </h2>

        <div className="content-wrapper">
          <div className="education-wrapper">
            <h3>Education</h3>

            {educData.map(data => (
              <div className="background-card" key={data.id}>
                <img src={icons[data.school]} alt="background icon" />

                <div>
                    <p>{data.level}</p>
                    <h5>{data.school}</h5>
                    <p>{data.year}</p>
                    
                    {   data.awards.length > 0 && 
                        (
                            <ul>
                                {data.awards.map((award, index) => (
                                    <li key={index}>{award}</li>
                                ))}
                            </ul>
                        )
                    }
                    
                </div>
              </div>
            ))}
          </div>
          <div className="work-wrapper">
            <h3>Work Experience</h3>

            {workData.map(work => (
                <div className="background-card" key={work.id}>
                    <img src={icons[work.name]} alt="background icon" />

                    <div>
                        <p>{work.position}</p>
                        <h5>{work.name}</h5>
                        <p>{work.year}</p>
                        
                        <ul>
                            <li>{work.note}</li>
                        </ul>
                        
                    </div>
                </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
