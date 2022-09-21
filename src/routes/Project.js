import React from 'react'
import Navbar from "../components/Navbar/Navbar"
import HeroImage from "../components/HeroImg2/HeroImg"
import Footer from "../components/Footer/Footer"
 import Img from "../assets/photo-1593720213428-28a5b9e94613.avif"
import Card from "../components/Cards/Card"
function Project() {
    return (
        <div>
            <Navbar />
            <HeroImage heading="PROJECTS" text={ `Projects are developed using HTML, CSS 3, JS (ES6), React, Redux and others 3rd party libraries`} />
            <Card  length={6}/>
            <Footer />
        </div>
    )
}

export default Project