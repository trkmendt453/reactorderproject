import React from 'react'
import Logo from '../img/gikp-hero.jpg'
import { Link } from 'react-router-dom'
import '../styles/Home.css'
function Home() {
  return (
    <div className='mainPage' style={{backgroundImage:`url(${Logo})`}}>
        <div className='order'>
        <Link to="/menu">
            <button>SİPARİŞ VER</button>
        </Link>
        </div>
     
    </div>
  )
}

export default Home;
