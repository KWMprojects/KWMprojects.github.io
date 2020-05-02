import React from 'react'

import ParticlesBg from 'particles-bg'

const BackgroundContainer = () => {
  return(
    <div>
      <ParticlesBg type="lines" color="random" num={200} bg={true} />
    </div>
  )
}

export default BackgroundContainer