import React from 'react'
// import HeroImgae from "../../assets/photo.jpg"
import { Link } from 'react-router-dom'
import './HeroImage.css'
function HeroImage({ ...props }) {
    return (
        <div className="hero">
            <div className="heroImage">
                <img className="intro" src={ props.image } alt="heroImgs" />
            </div>
            <div className="content">
                <p>{ props.para }</p>
                <h1> { props.heading }</h1>

                <div className=" link">
                    <Link to="/project" className="btn" > Projects</Link>
                    <Link to="/contact" className="btn btn-light"> Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default HeroImage