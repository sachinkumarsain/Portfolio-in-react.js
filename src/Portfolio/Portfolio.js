import React, { useState } from 'react'
// import { Link } from "react-router-dom"
import "./Portfolio.css"
// import eccomerce from "./eccomerce.png"
// import Bomber from "./Bomber_Game.png"
// import TestTyping from "./Test-Typing.png"
import Modal from 'react-modal';

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

    return (
           
        <>

        <div className='portfolio'>
            <div className='projects'>
                <div className='projectHeading'>
                    <h3>Creative Portfolio</h3>
                    <h1>Recent Work</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
                </div>
                <ul className='projectList'>
                    <li><Link to="">All</Link></li>
                    <li><Link to="">frontend</Link></li>
                    <li><Link to="">Fullstack</Link></li>
                </ul>
                <div className='projects'>

                </div>
            </div>
            <div className='skills'>

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