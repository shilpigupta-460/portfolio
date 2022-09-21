import React from 'react'
 import "./AboutMe.css"
function AboutMe({style}) {
  return (
    <div className ='About_container' > 
      
    <p style= {style} className="p_container" >
Frontend React Developer with 3 years of experience in developing and enhancing web application 
 using JS, HTML, CSS, Bootstrap for Event Industry. I am a determinate, React developer uses problem solving and detail oriented attitude to enhance application performance.
Looking for leverage to my skills to produce seamless UI with responsive design.
<h3 style={{margin:' .5rem 0', color: "#404040"}}>Experience</h3>

 Developed an average three customize Event websites per month for Event organizing platform with 99% client satisfaction 
 and increase customer retention by 20%. Easy to use and informative year round web sites
gives better understanding of the event offering,
an enjoyable and rewarding experience to customers.

{/* Online and onsite product locators. register for the  events
Visit planner, show guides and Visitor to exhibitor appointment booking systems.
Post show seminar Q&A's .
Exhibitor information downloads and Tailored news updates
Product and service search tools .
Easy to use and informative Year round web sites. */}


 <div className="cbtn">
  <a href =" mailto: shilpi.gupta460@gmail.com"><button className="btn" > Contact me</button></a> 
  </div></p> 
  </div>
  )
}

export default AboutMe