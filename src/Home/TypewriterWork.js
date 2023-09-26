import React from 'react'
import Typewriter from 'typewriter-effect';

function TypewriterWork() {
  return (
  <span>
     <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 40,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Full Stack Developer !")
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString("Quick Grasping !")
                    .pauseFor(1500)
                    .deleteAll()
                    .start();
                }}
              ></Typewriter>
  </span>
  )
}

export default TypewriterWork