import React from 'react'
import pic1 from "./bannerpic.png"
import { Link } from 'react-router-dom'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import "./Home.css"

function Home() {
  return (
    <>
      <div className='home'>
        <div className='banner'>
          <div className='leftBanner'>
            <h1>Hi! I'm Sachin Kumar</h1>
            <h2>And I'm <span> Full Stack Developer</span></h2>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <h3>Email :</h3>
            <p className='email'>sachinsain21082004@gmail.com</p>

            <div className='anchors'>
              <Link className='cv' to="">Download CV</Link>
              <Link className='hire' to="">Hire Me Now!</Link>
            </div>


          </div>
          <div className='rightBanner'>
            <img src={pic1}></img>
           
          </div>
        </div>
      </div>
    </>
  )
}

export default Home