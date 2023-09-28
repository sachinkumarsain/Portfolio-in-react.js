import React from 'react'
import {Link} from "react-router-dom"

function Portfolio() {
  return (
    <div className='Portfolio'>
        <div className='pfHeading'>
            <h1>Portfolio</h1>
            <p>Most recent Work</p>
        </div>

        <ul className='lists'>
            <li><Link to="">All</Link></li>
            <li><Link to="">Web</Link></li>
            <li><Link to="">App</Link></li>
            <li><Link to="">Design</Link></li>
        </ul>
        <div className='projectTank'>
            <div className='project'>
                
            </div>
            <div className='project'>
                
            </div>
            <div className='project'>
                
            </div> 
        </div>
    </div>
  )
}

export default Portfolio