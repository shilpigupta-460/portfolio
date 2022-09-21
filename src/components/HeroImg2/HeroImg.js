import React from 'react'
import './HeroImg.css'
//import image from "../../assets/photo-1593720213428-28a5b9e94613.avif"
function HeroImg({ ...props }) {
    return (

        <div className="heroImg">

            <div className="content">
                <h1> { props.heading }</h1>
                <p> { props.text }</p>
            </div>
        </div>
    )
}

export default HeroImg