import React from 'react'
import './Footer.css'
import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa'
function Footer() {
    return (
        <div className="footer">

            <div className="footer-container">
                <div className="left">
                    <div className="home">
                        <FaHome size={ 20 } style={ { color: '#fff', marginRight: '2rem' } } />
                        <div>
                            <h4 style={ { color: '#fff', marginRight: '2rem' } }>Redmond WA</h4>
                        </div>
                    </div >
                    <div className="phone">
                        <FaPhone size={ 20 } style={ { color: '#fff', marginRight: '2rem' } } />
                        <h4> 484-273-8462</h4>
                    </div>
                    <div className="mail">
                        <FaMailBulk size={ 20 } style={ { color: '#fff', marginRight: '.9rem' } } />
                        <h4>shilpi.gupta460@gmail.com</h4>
                    </div>
                </div>

                <div className="right">
                    <div className="social">
                        <a href="www.linkedin.com/in/shilpi-gupta-24919a18a"><FaLinkedin size={ 25 } style={ { color: '#fff', marginRight: '.8rem' } } /></a>
                        <a href="https://github.com/shilpigupta-460" ><FaGithub size={ 25 } style={ { color: '#fff', marginRight: '.8rem' } } /></a>
                        <a href="https://www.facebook.com/"><FaFacebook size={ 25 } style={ { color: '#fff', marginRight: '.8rem' } } /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer