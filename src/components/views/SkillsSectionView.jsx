import React, { useState } from 'react';
import '../styles/SkillsSectionViewStyle.css'

import ColoredCards from '../Cards/ColoredCards';
import SkillsData from '../../data/SkillsData.json';
import Laptop from '../../assets/icons/laptop.svg';
import Keyboard from '../../assets/icons/keyboard.svg';
import Network from '../../assets/icons/network.svg';
import Wifi from '../../assets/icons/wifi.svg';
import Windows from '../../assets/icons/windows.svg';
import Cmd from '../../assets/icons/cmd.svg';
import Ip from '../../assets/icons/ip.svg';
import Cisco from '../../assets/icons/cisco.svg';
import Figma from '../../assets/icons/figma.svg';
import Canva from '../../assets/icons/canva.svg';
import Adobe from '../../assets/icons/adobe.svg';
import HTML from '../../assets/icons/html.svg';
import CSS from '../../assets/icons/css.svg';
import JS from '../../assets/icons/js.svg';
import ReactIcon from '../../assets/icons/react.svg';
import Bs from '../../assets/icons/bootstrap.svg';
import Tw from '../../assets/icons/tailwind.svg';
import Wp from '../../assets/icons/wordpress.svg';
import Php from '../../assets/icons/php.svg';
import Laravel from '../../assets/icons/laravel.svg';
import Django from '../../assets/icons/django.svg';
import Vue from '../../assets/icons/vue.svg';
import Sql from '../../assets/icons/mysql.svg';
import Word from '../../assets/icons/word.svg';
import Excel from '../../assets/icons/excel.svg';
import Ppt from '../../assets/icons/ppt.svg';
import GitHub from '../../assets/icons/github.svg';

export default function SkillsSectionView() {
    const [data] = useState(SkillsData);
    const [activeTab, setActiveTab] = useState('supp');

    const icons = {
        "Software Troubleshooting": Laptop,
        "Hardware Troubleshooting": Keyboard,
        "Basic Networking Setup": Network,
        "Basic Network Planning": Cisco,
        "Router & modem configuration": Wifi,
        "OS installation and reinstallation": Windows,
        "Basic command-line usage": Cmd,
        "Basic IP addressing and subnetting": Ip,
        "Figma": Figma,
        "Canva": Canva,
        "Photoshop": Adobe,
        "HTML5": HTML,
        "CSS": CSS,
        "Javascript": JS,
        "React": ReactIcon,
        "Bootstrap": Bs,
        "Tailwind": Tw,
        "Wordpress": Wp,
        "PHP": Php,
        "Laravel": Laravel,
        "Django": Django,
        "Vue": Vue,
        "MySQL": Sql,
        "Microsoft Word": Word,
        "Microsoft Excel": Excel,
        "PowerPoint": Ppt,
        "GitHub": GitHub,

    }
    
    const toggleTabButton = (category) => {
        setActiveTab(category);
    }
  return (
    <section id='skills-section'>
        <div className='section-wrapper'>
            <p className="leading-text">Skills</p>
            <h2>
                Technical & Creative<br />
                Skills
            </h2>
            
            <div className='content-wrapper'>
                <ul>
                    <li className={activeTab == 'supp' ? 'active-tab':''} onClick={() => toggleTabButton('supp')}>IT Support</li>
                    <li className={activeTab == 'design' ? 'active-tab':''} onClick={() => toggleTabButton('design')}>Designs</li>
                    <li className={activeTab == 'development' ? 'active-tab':''} onClick={() => toggleTabButton('development')}>Development</li>
                    <li className={activeTab == 'others' ? 'active-tab':''} onClick={() => toggleTabButton('others')}>Others</li>
                </ul>

                <div className='cards-wrapper'>
                    {data.filter(skills => skills.cat == activeTab)
                        .map(skill => (
                            <ColoredCards 
                                key={skill.id}
                                customClass='card'
                                icons={icons[skill.title]}
                                label={skill.title}
                                descp={skill.descp} 
                            />
                    ))}
                </div>
            </div>

        </div>
    </section>
  )
}
