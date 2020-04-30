import React from 'react'

import ParticleImage, {
  ParticleOptions,
  Vector,
  forces,
  ParticleForce
} from "react-particle-image"
import useWindowSize from "@rooks/use-window-size"

import Logo from '../Images/transparent-logo.png'


const particleOptions: ParticleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y)
    // Make a particle for this pixel if blue > 50 (range 0-255)
    return pixel.b > 50
  },
  color: ({ x, y, image }) => "#cf672a",
  radius: () => Math.random() * 1.5 + 0.5,
  mass: () => 40,
  friction: () => 0.15,
  initialPosition: ({ canvasDimensions }) => {
    return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
  }
};

const motionForce = (x: number, y: number): ParticleForce => {
  return forces.disturbance(x, y, 10)
};
const Intro = () =>{
  const { innerWidth, innerHeight } = useWindowSize()

  return (
    <ParticleImage id="Home"
      src={Logo}
      width={Number(innerWidth)}
      height={Number(innerHeight)}
      scale={1}
      entropy={25}
      maxParticles={5000}
      creationDuration={20}
      particleOptions={particleOptions}
      mouseMoveForce={motionForce}
      touchMoveForce={motionForce}
      backgroundColor="#FFFFFF"
    />
  )
}

export default Intro