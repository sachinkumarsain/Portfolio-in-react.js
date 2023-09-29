import React, { useState } from 'react'
// import { Link } from "react-router-dom"
import "./Portfolio.css"
// import eccomerce from "./eccomerce.png"
// import Bomber from "./Bomber_Game.png"
// import TestTyping from "./Test-Typing.png"
import Modal from 'react-modal';

function Portfolio() {

    const [model, setModel] = useState(false);

    const modalStyle = {
        content: {
            innerWidth: "50%",
            innerHeight: "50%",
            top: '50%',
            left: '50%',
            // right: 'auto',
            // bottom: 'auto',
            // marginRight: '-50%',

            transform: 'translate(-50%, -50%)',
        },
    };


    function openModal() {
        setModel(true)
    }

    function closeModal() {
        setModel(false)
    }

    return (
        // <div className='portfolio'>
        //     <div className='portfolioContent'>
        //         <div className='pfHeading'>
        //             <h1>Portfolio</h1>
        //             <p>Most recent Work</p>
        //         </div>
        //         <div className='productList'>
        //             <ul>
        //                 <li><Link to="">All</Link></li>
        //                 <li><Link to="">Web</Link></li>
        //                 <li><Link to="">App</Link></li>
        //                 <li><Link to="">Design</Link></li>
        //             </ul>
        //         </div>   
        //         <div className='projectTank'>
        //             <div className='project'>
        //                 <img src={eccomerce}></img>
        //             </div>
        //             <div className='project'>
        //                 <img src={Bomber}></img>
        //             </div>
        //             <div className='project'>
        //                 <img src={TestTyping}></img>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <>
            <div className='wapper'>
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

            </div>

        </>
    )
}

export default Portfolio