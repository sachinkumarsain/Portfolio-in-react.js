import React from 'react'
import {Link} from "react-router-dom"
import TopicIcon from '@mui/icons-material/Topic';
import AboutPic from "./Aboutpic.png"
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
          </div>
          <div className='mainRight'>
            <div className='intro'>
              <div className='introBox'>
                <h3></h3>
                <h3>Experience</h3>
                <p>1 year</p>
              </div>
              <div className='introBox'>
                <h3></h3>
                <h3>Completed</h3>
                <p> 20+ project</p>
              </div>
              <div className='introBox'>
                <h3></h3>
                <h3>Support</h3>
                <p>online 25/7</p>
              </div>
            </div>
            <p className='dec'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            <Link to="">Download CV <TopicIcon/> </Link>
          </div>
        </div>

      </div>

    </>
  )
}

export default About