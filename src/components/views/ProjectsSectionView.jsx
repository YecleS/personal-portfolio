import React, { useState } from 'react';
import '../styles/ProjectsSectionViewStyle.css'

import Data from '../../data/ProjectsData.json'
import ButtonedCards from '../Cards/ButtonedCards';
import PrimaryButton from '../buttons/PrimaryButton';
import Figma from '../../assets/icons/figma.svg';
import ReactIcon from '../../assets/icons/react.svg';
import Php from '../../assets/icons/php.svg';
import Sql from '../../assets/icons/mysql.svg';
import Echolux from '../../assets/images/sound.webp';
import Elevatefit from '../../assets/images/elevatefit.webp';
import Grab from '../../assets/images/grab.webp';
import Sweatsync from '../../assets/images/sweatsync.webp';
import Travel from '../../assets/images/travel.webp';
import Roomly from '../../assets/images/roomly.webp';
import Party from '../../assets/images/party.webp';
import Doc from '../../assets/images/document.webp';
import Fitplan from '../../assets/images/fitplan.webp';
import Seafood from '../../assets/images/seafoods.webp';
import Yecipes from '../../assets/images/yecipes.webp';

export default function ProjectsSectionView() {
    const [data] = useState(Data)
    const [activeTab, setActiveTab] = useState('design');

    const images = {
        "EchoLux": Echolux,
        "ElevateFit": Elevatefit,
        "Grab": Grab,
        "SweatSync": Sweatsync,
        "TravelAgency": Travel,
        "Roomly": Roomly,
        "PartyBuilderz": Party,
        "Document Converter": Doc,
        "Fitplan": Fitplan,
        "SeaFood": Seafood,
        "Yecipes": Yecipes,
    }

    const icons = {
        "EchoLux": [ Figma ],
        "ElevateFit": [ Figma ],
        "Grab": [ Figma ],
        "SweatSync": [ Figma ],
        "TravelAgency": [ Figma ],
        "Roomly": [ Figma ],
        "PartyBuilderz": [ Figma ],
        "Document Converter": [ Figma ],
        "Fitplan": [ ReactIcon, Php, Sql],
        "SeaFood": [ ReactIcon, Php, Sql],
        "Yecipes": [ ReactIcon ],
    }

    const toggleActiveTab = (category) => {
        setActiveTab(category);
    }
  return (
    <section id='projects-section'>
        <div className='section-wrapper'>
            <p className='leading-text'>Projects</p>
            <h2>What I’ve Been Working <br />On</h2>
            
            <div className='content-wrapper'>
                <ul>
                    <li className={activeTab === 'design'? 'active-tab':''} onClick={() => toggleActiveTab('design')}>Designs</li>
                    <li className={activeTab === 'development'? 'active-tab':''} onClick={() => toggleActiveTab('development')}>Development</li>
                </ul>

                <div className='cards-wrapper'>
                    {data.filter(projects => (projects.category === activeTab))
                        .map(projects => (
                            <ButtonedCards 
                                key={projects.id}
                                img={images[projects.title]}
                                title={projects.title}
                                date={projects.date}
                                descp={projects.desp}
                                tech={icons[projects.title]}
                            >   
                                {projects.category === "development" ? ''
                                :<PrimaryButton customClass='second-button' Label='Project View' url={projects.projView}/>}
                                
                                <PrimaryButton customClass='first-button' Label='Live View' url={projects.liveView} />    
                            </ButtonedCards>
                        ))}
                </div>
            </div>

        </div>
    </section>
  )
}
