import React from 'react'
import { Link } from "react-router-dom"
import "./Portfolio.css"
import eccomerce from "./eccomerce.png"
import Bomber from "./Bomber_Game.png"
import TestTyping from "./Test-Typing.png"

function Portfolio() {
    return (
        <div className='portfolio'>
            <div className='portfoliContent'>
                <div className='pfHeading'>
                    <h1>Portfolio</h1>
                    <p>Most recent Work</p>
                </div>
                <div className='productList'>
                    <ul>
                        <li><Link to="">All</Link></li>
                        <li><Link to="">Web</Link></li>
                        <li><Link to="">App</Link></li>
                        <li><Link to="">Design</Link></li>
                    </ul>
                </div>   
                <div className='projectTank'>
                    <div className='project'>
                        <img src={eccomerce}></img>
                    </div>
                    <div className='project'>
                        <img src={Bomber}></img>
                    </div>
                    <div className='project'>
                        <img src={TestTyping}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio