import React from 'react';
import '../styles/PrimaryButton.css'

export default function PrimaryButton({Label, url, customClass}) {
  return (
    <a href={url} className={`primary-button ${customClass}`} target='__blank'>{Label}</a>
  )
}
