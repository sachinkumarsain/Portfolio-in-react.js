import React from 'react'
import Typewriter from 'typewriter-effect';


function PortTypeWriter() {
  return (
    <>
      <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 40,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Creative Portfolio !")
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString("Innovative Portfolio !")
                    .pauseFor(1500)
                    .deleteAll()
                    .start();
                }}
              ></Typewriter>
    </>
  )
}

export default PortTypeWriter