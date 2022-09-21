import React from 'react'
import Navbar from "../components/Navbar/Navbar"
import HeroImg from "../components/HeroImg2/HeroImg"
import Footer from "../components/Footer/Footer"
import Img from "../assets/photoa.avif"
import AboutContent from "../components/AboutContent/Aboutcontent"
function About() {
    return (
        <div>
            <div>
                <Navbar />
                <HeroImg image={ Img } para={ "about me" } />
                <AboutContent/>
                
                {/* <Footer /> */}
            </div>
        </div>
    )
}

export default About