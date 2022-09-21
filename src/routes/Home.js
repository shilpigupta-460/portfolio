import React from 'react'
import Navbar from "../components/Navbar/Navbar"
import HeroImage from "../components/HeroImage/HeroImage"
import Footer from "../components/Footer/Footer"
import Card from "../components/Cards/Card"
import Img from "../assets/photo.jpg"
import Heading from '../components/Heading'
import AboutMe from "../components/About/AboutMe"
import { useNavigate } from 'react-router-dom'
function Home() {
     const navigate= useNavigate();
 const handle=()=>{
    navigate("/project")
 }
    return (

        <div>
            <Navbar />
            <HeroImage image={ Img } heading={ `HI, I'M Frontend DEVELOPER` } para={ 'Shilpi Gupta' } />
            <Heading message={'Latest Works'}/>
            <Card  length={4}/>
            <Heading  message={' About Me'} />
            <span  onClick ={handle}style={{ color:'#ffff', position:'absolute',bottom:'-128%',
    right: '64%', fontSize:'1.6rem', cursor:'pointer'} }>...more</span>
             <AboutMe  style={{   backgroundColor:  '#fdfdfd'}}/>
            <Footer />
        </div>


    )
}

export default Home