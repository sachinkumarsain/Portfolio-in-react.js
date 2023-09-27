import React from 'react'
import { Link } from "react-router-dom"
import TopicIcon from '@mui/icons-material/Topic';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import SupportIcon from '@mui/icons-material/Support';
import AboutPic from "./image3.png"
import "./About.css"
function About() {
  return (
    <>
      <div className='about'>
        <div className='aboutHeading'>
          <h1>About Me</h1>
          <p>My introduction</p>
        </div>

        <div className='aboutMain'>
          <div className='mainLeft'>
            <img src={AboutPic}></img>
            <div className='blob'>
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FF0066" transform="translate(100 100)" >
                  <animate attributeName='d'
                  dur="10000ms"
                  repeatCount="indefinite"
                  values='
                  M37.4,-50.7C46.7,-44.8,51.3,-31.4,58.8,-17C66.4,-2.6,77,12.9,75,26.1C73.1,39.2,58.6,50,44,61.4C29.4,72.9,14.7,85,1.8,82.5C-11.2,80.1,-22.4,63.2,-31.9,50.1C-41.4,37,-49.2,27.8,-56.6,15.8C-63.9,3.9,-70.9,-10.7,-70.8,-26.7C-70.6,-42.6,-63.4,-59.9,-50.4,-64.6C-37.4,-69.3,-18.7,-61.4,-2.3,-58.2C14.1,-55,28.1,-56.6,37.4,-50.7Z;

                  M38.8,-52.2C49.5,-45.5,57,-33.2,59.2,-20.6C61.3,-8,58.2,4.9,54.5,18.1C50.8,31.3,46.5,44.7,37.3,57.3C28.1,70,14.1,81.9,-2.4,85.1C-18.8,88.4,-37.6,83,-48.8,71C-59.9,59,-63.4,40.4,-63.9,24.2C-64.5,8,-62.1,-5.7,-58.1,-19.2C-54.2,-32.6,-48.5,-45.8,-38.5,-52.7C-28.6,-59.6,-14.3,-60.3,-0.1,-60.1C14,-59.9,28,-58.9,38.8,-52.2Z;

                  M38.4,-56.7C50.1,-44.3,60.2,-33.6,68.2,-19.6C76.3,-5.7,82.3,11.5,78.6,26.5C75,41.4,61.8,54.2,47.1,62.5C32.4,70.8,16.2,74.7,0.1,74.6C-16.1,74.5,-32.2,70.4,-43.4,61C-54.7,51.6,-61.3,36.8,-68.8,20.7C-76.4,4.5,-85,-12.9,-80.4,-25.8C-75.8,-38.7,-58,-47.1,-42.4,-58.2C-26.8,-69.3,-13.4,-83.2,0,-83.2C13.3,-83.1,26.7,-69.1,38.4,-56.7Z;

                  M42.2,-58.8C54.9,-48.9,65.4,-36.8,71.7,-22.1C78.1,-7.5,80.3,9.7,74.4,23C68.4,36.4,54.4,46,40.6,50.9C26.9,55.8,13.5,56,0.7,55.1C-12.1,54.1,-24.2,52,-39.1,47.5C-53.9,42.9,-71.6,36,-74.7,24.7C-77.9,13.3,-66.6,-2.3,-59.9,-18.4C-53.2,-34.5,-51.2,-51.1,-42,-62C-32.8,-73,-16.4,-78.3,-0.8,-77.2C14.8,-76.1,29.6,-68.6,42.2,-58.8Z;

                  M36.5,-55.7C46.2,-43.3,52,-31,55.6,-18.4C59.3,-5.8,60.8,7.2,58.1,19.9C55.3,32.5,48.4,44.8,38,55.5C27.6,66.1,13.8,75.2,-0.5,76C-14.9,76.7,-29.7,69,-40.4,58.4C-51,47.8,-57.4,34.3,-61.3,20.4C-65.2,6.5,-66.5,-7.8,-64.1,-22.5C-61.6,-37.3,-55.5,-52.6,-44.2,-64.5C-32.9,-76.4,-16.4,-84.9,-1.5,-82.9C13.4,-80.8,26.9,-68.2,36.5,-55.7Z;

                  M37.4,-50.7C46.7,-44.8,51.3,-31.4,58.8,-17C66.4,-2.6,77,12.9,75,26.1C73.1,39.2,58.6,50,44,61.4C29.4,72.9,14.7,85,1.8,82.5C-11.2,80.1,-22.4,63.2,-31.9,50.1C-41.4,37,-49.2,27.8,-56.6,15.8C-63.9,3.9,-70.9,-10.7,-70.8,-26.7C-70.6,-42.6,-63.4,-59.9,-50.4,-64.6C-37.4,-69.3,-18.7,-61.4,-2.3,-58.2C14.1,-55,28.1,-56.6,37.4,-50.7Z;
                  
                  '
                  >

                  </animate>

                </path>
              </svg>
            </div>
          </div>

          <div className='mainRight'>
            <div className='intro'>
              <div className='introBox'>
                <h3><FaceRetouchingNaturalIcon /></h3>
                <h3>Experience</h3>
                <p>1 year</p>
              </div>
              <div className='introBox'>
                <h3><WorkHistoryIcon /></h3>
                <h3>Completed</h3>
                <p> 20+ project</p>
              </div>
              <div className='introBox'>
                <h3>< SupportIcon /></h3>
                <h3>Support</h3>
                <p>online 25/7</p>
              </div>
            </div>
            <p className='dec'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            <div className='aboutcv'>
              <Link to="">Download CV <span><TopicIcon /></span> </Link>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default About