import React from 'react'

import './aboutContent.css'
import img1 from "../../assets/react-logo.png";
import img2 from "../../assets/js-logo.png";
import img3 from "../../assets/html.png";
import img4 from "../../assets/css-logo.png";
import img5 from "../../assets/node-js.png";
import img6 from "../../assets/npm-logo.png";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AboutMe from '../About/AboutMe';
import Heading from '../Heading';



 function About() {
 
  const skills = [
    {    id:1,
        title: "React",
        image: img1,
    },
    {
        id:2,
        title: "JS",
        image:img2
      },
    {     id:3,
      title: "HTML",
      image:img3
    }, 
    {
        id:4,
        title: "css3",
        image:img4
      },
    {   id:5,
      title: "Node",
      image: img5
    },
    {   id:6,
      title: "NPM",
      image: img6
    },
    {   id:5,
      title: "Git",
      image: 'https://git-scm.com/images/logos/logomark-orange@2x.png'
    },
    {  
      title: "Express",
      image: 'https://www.pngfind.com/pngs/m/136-1363736_express-js-icon-png-transparent-png.png'
    },
    {  
      title: 'Redux',
      image: 'https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg'
    },
    
    {   
      title: "NextJs",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8YPk4A5MH4t8fiaxLN6wmHL8JC8Cl9bKwlA&usqp=CAU'
    },
    
]

  return (
    <div className='aboutContainer'>
         <div className="inner_container">
                  <div className="left">
               <AboutMe  style={{ color: '#000', borderRadius: '50%' }}/>
                  </div>
                  
                  <div className="right">
                  {/* <Heading message="Skills" />  */}
                  <div className="img-container">
                  
              {
                skills .map((skill , index) => {
                   
                    return (
                    
                        <Card key={ index } sx={ { maxWidth: 100,  maxHeight:130,  
                        marginTop:"-1%", marginLeft:"3%", 
                     
                        borderRadius: '10%',
                  
 
                        borderColor: 'background.level2', 

                        }}>
                            <CardMedia 
                                component="img"
                              height="90"
                              sx={{ ml: 'auto' }}
                          image={ skill.image }
                                alt="Skill"
                            />
                            <CardContent>
                                <Typography gutterBottom  component="div" size="md" variant="plain" sx={{ ml: 'auto' }}>
                                    { skill.title }
                                </Typography>
                                

                            </CardContent>
                            
                        </Card> 
                        
                    )}
                )
            }
           
                    
                  </div>
                  </div>
    </div></div>
   
  )
}

export default About