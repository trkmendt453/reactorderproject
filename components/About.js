import React from 'react'
import Logos from '../img/xmrm-listing.jpg'
import '../styles/About.css'

function AboutUs() {
  return (
    <div className='about'>
      <div className='aboutTop' style={{backgroundImage:`url(${Logos})`}}>
      </div>
      <div className='aboutBottom'>
        <h1>Hakkımızda</h1>
        <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem LoremLorem Lorem</p>
      </div>
    </div>
  )
}

export default AboutUs;
