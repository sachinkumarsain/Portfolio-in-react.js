import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import "./Contact.css"


function Contect() {
  return (
    <>
      <div className='contact'>
        <div className='contactLeft'>
          
          <h1>Get In Touch With Us</h1>
          <p className='dec'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <div className='contactOptions'>
            <div className='option'>
              <h2><HomeIcon/></h2>
              <p >Lorem Ipsum is simply dummy text of the printing</p>
            </div>
            <div className='option'>
              <h2><LocalPhoneIcon/></h2>
              <p>+7979000983</p>
            </div>
            <div className='option'>
              <h2><EmailIcon/></h2>
              <p>sachinsain@gamil.com</p>
            </div>
          </div>
          <h2>Send message</h2>
        <form>
          <input className='name' placeholder=' Name' type='text'></input>
          <input className='email' placeholder='Email' type='text'></input>
          <textarea placeholder='message'></textarea>
          <button>Send</button>
        </form>
        </div>
       
        <div className='contactRight'>
         
        <div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=584&amp;height=600&amp;hl=en&amp;q=Full Stack Learning A-20, Murtikala Colony Gopalpura Bypass, Tonk Rd, Jaipur, Rajasthan 302018&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://connectionsgame.org/">Connections NYT</a></div></div>
        </div>
      </div>
    </>
  )
}

export default Contect