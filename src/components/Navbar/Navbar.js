import React, { useState } from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import Img from '../../assets/logo2.png'
function Navbar() {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);
  const handleBar = () => {
    setClick(!click)

  }
  const handleColor = () => {
    if (window.scrollY >= 100)
      setColor(true)
    else
      setColor(false)
  }
  window.addEventListener('scroll', handleColor);

  return (
    <div className={ color ? "contanier contanier-bg" : "contanier " }>
      <Link to="/">
        <img className="img " src={ Img } alt="logo" />
      </Link>
      <ul className={ click ? "nav-menu active" : "nav-menu" }>
        <li><Link to="/">
          Home
        </Link>
        </li>
        <li><Link to="/project">
          Projects
        </Link>
        </li>
        <li><Link to="/about">
          About
        </Link></li>
        <li><Link to="/contact">
          Contact
        </Link></li>
      </ul>
      <div className="burgerIcon" onClick={ handleBar }>
        { click ? <FaTimes /> : <FaBars /> }
      </div>
    </div>
  )
}

export default Navbar