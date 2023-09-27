import React from 'react'
import{BrowserRouter , Routes ,Route} from "react-router-dom"
import About from './About/About'
import Service from './Service/Service'
import Home from './Home/Home'
import Contect from './Contact/Contect'
import Header from './Header/Header'
// import Footer from './Footer/Footer'
import MouseParticles from 'react-mouse-particles' 

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/service' element={<Service/>} />
      <Route path='/contact' element={<Contect/>} />
    </Routes>
    {/* <Footer/> */}
    <MouseParticles g={1} color="random" cull="col,image-wrapper"/>
    </BrowserRouter>

    </>
  )
}

export default App