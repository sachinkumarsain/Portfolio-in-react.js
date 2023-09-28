import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import "./Header.css"

function Header() {
  const[menu , setMenu] = useState(false)

    function handleMenu (e){
      e.preventDefault()
      setMenu(true)

    }
    function handleClose(e){
      e.preventDefault()
      setMenu(false)
    }

  return (
    <>
    <header>
        <h1><Link to={"/"}><span>S</span>achin</Link></h1>
        <ul className='menuList' style={{top:menu ? "50px":"-100px"}}>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/portfolio"}>Portfolio</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li>
        </ul>

        {
          menu
          ? <Link style={{animation:menu ?"":"close 5s linear 2s infinite alternate"}} onClick={handleClose}  className="close"  to=""><CloseIcon/></Link>

          :  <Link style={{animation:menu ?"menuicon 5s linear 2s infinite alternate":""}} onClick={handleMenu}  className="menu"  to=""><MenuIcon/></Link>
        }
        
       
    </header>
    </>
  )
}

export default Header