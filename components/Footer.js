import React from 'react'
import '../styles/Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
       <FacebookIcon/>
       <InstagramIcon/>
       <TwitterIcon/>
      </div>
      <p>Tüm Hakları Saklıdır | Aç kalmayalım Burger Yiyelim</p>
    </div>
  )
}

export default Footer
