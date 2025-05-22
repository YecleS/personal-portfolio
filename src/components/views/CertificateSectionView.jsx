import React, { useState } from 'react';
import '../styles/CertificateSectionViewStyle.css';

import ButtonedCards from '../Cards/ButtonedCards';
import PrimaryButton from '../buttons/PrimaryButton';
import Data from '../../data/CertificatesData.json';
import CustomerSupp from '../../assets/images/customer.webp';
import Hardware from '../../assets/images/hardware.webp';
import UI from '../../assets/images/ui.webp';
import UX from '../../assets/images/ux.webp';
import Html from '../../assets/images/html.webp';
import Analytics from '../../assets/images/analytics.webp';

export default function CertificateSectionView() {
    const [data] = useState(Data);

    const certImage = {
        "Certificate of training completion for User Experience": UX,
        "Certificate of training completion for User Interface": UI,
        "Certificate of training completion for HTML Essentials": Html,
        "Certificate of training completion for Computer Hardware Basics": Hardware,
        "Certificate of training completion for IT Customer Support": CustomerSupp,
        "Certified in Google Analytics Certification": Analytics,
    }

  return (
    <section id='certificate-section'>
        <div className='section-wrapper'>
            <p className='leading-text'>Certificates</p>
            <h2>Credentials & <br />Achievements</h2>

            <div className='content-wrapper'>
                {data.map(cert => (
                    <ButtonedCards 
                        key={cert.id}
                        img={certImage[cert.title]}
                        title={cert.title}
                        descp={cert.about}
                        customClass='buttoned-card'
                    >   
                        <PrimaryButton url={cert.view} Label='View Certificate' />
                    </ButtonedCards>
                ))}

            </div>
        </div>
    </section>
  )
}
