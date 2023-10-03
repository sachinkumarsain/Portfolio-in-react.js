import React, { useState } from 'react'
import { Link } from "react-router-dom"
import "./Portfolio.css"
import eccomerce from "./eccomerce.png"
import Bomber from "./Bomber_Game.png"
import TestTyping from "./Test-Typing.png"
// import Modal from 'react-modal';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PortTypeWriter from './PortTypeWriter'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

function Portfolio() {

    // const [model, setModel] = useState(false);

    // const modalStyle = {
    //     content: {
    //         innerWidth: "50%",
    //         innerHeight: "50%",
    //         top: '50%',
    //         left: '50%',
    //         // right: 'auto',
    //         // bottom: 'auto',
    //         // marginRight: '-50%',

    //         transform: 'translate(-50%, -50%)',
    //     },
    // };


    // function openModal() {
    //     setModel(true)
    // }

    // function closeModal() {
    //     setModel(false)
    // }





    const [all, setAll] = useState(true);
    const [fullstack, setFullstack] = useState(false);
    const [frontend, setFrontend] = useState(false);

    function allProjects() {
        setAll(true)
        setFrontend(false)
        setFullstack(false)
    }
    function frontendP() {
        setFrontend(true)
        setFullstack(false)
        setAll(false)
    }
    function fullstackP() {
        setFrontend(false)
        setFullstack(true)
        setAll(false)
    }

    return (

        <>

            <div className='portfolio'>
                <div className='projects'>
                    <div className='projectHeading'>
                        <h3><PortTypeWriter /></h3>
                        <h1>Recent Work <span>< FavoriteIcon /> </span></h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standardLorem  </p>
                    </div>
                    <ul className='projectList'>
                        <li><Link onClick={allProjects} to="">All</Link></li>
                        <li><Link onClick={frontendP} to="">frontend</Link></li>
                        <li><Link onClick={fullstackP} to="">Fullstack</Link></li>
                    </ul>
                    <div className='projectTank'>
                        <div style={{ display: all ? "flex" : "none" }} className='allProjects'>
                            <div className='project'>
                                <div className='projectImage'>
                                    <Link to=""><img src={eccomerce}></img></Link>
                                </div>
                                <h2>Bomber man</h2>
                            </div>
                            <div className='project'>
                                <div className='projectImage'>
                                    <Link to=""><img src={TestTyping}></img></Link>
                                </div>
                                <h2>Eccomerce</h2>
                            </div>
                            <div className='project'>
                                <div className='projectImage'>

                                    <Link to=""><img src={Bomber}></img></Link>
                                </div>
                                <h2> Test Typing</h2>
                            </div>

                        </div>
                        <div style={{ display: frontend ? "flex" : "none" }} className='frontedProject'>
                            <div className='project'>
                                <div className='projectImage'>
                                    <Link to=""><img src={TestTyping}></img></Link>
                                </div>
                                <h2>Test Typing</h2>
                            </div>
                            <div className='project'>
                                <div className='projectImage'>

                                    <Link to=""><img src={Bomber}></img></Link>
                                </div>
                                <h2> Bomber man</h2>
                            </div>
                        </div>
                        <div style={{ display: fullstack ? "flex" : "none" }} className='fullstackProject'>
                            <div className='project'>
                                <div className='projectImage'>
                                    <Link to=""><img src={eccomerce}></img></Link>
                                </div>
                                <h2>Eccomerce</h2>
                            </div>
                        </div>


                    </div>
                </div>
                <div className='skills' style={{ width: "100px", height: "100px" }}>
                    <CircularProgressbar
                        value={66}
                        text={`${66}%`}
                        background
                        backgroundPadding={6}
                        className='progresBar '
                        styles={buildStyles({
                            backgroundColor: "#3e98c7",
                            textColor: "#fff",
                            pathColor: "#fff",  
                            trailColor: "transparent"     
                         })}
                    />    
                </div>
            </div>






            {/* <div className='wapper'>
                <button onClick={openModal}>Open Modal</button>

                <Modal

                    isOpen={model}
                    // onAfterClose={afteropen}
                    onRequestClose={closeModal}
                    style={modalStyle}
                    contentLabel='modal'


                >
                    <div className='modal'>
                        <button onClick={closeModal}>close Model</button>
                        <h1>Hello</h1>
                        <ul>
                            <li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                        </ul>
                    </div>

                </Modal>

            </div> */}

        </>
    )
}

export default Portfolio