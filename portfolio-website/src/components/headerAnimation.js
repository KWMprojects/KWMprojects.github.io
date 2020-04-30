import React from 'react'

import Particles from 'react-particles-js'

const HeaderAnimation = () => {
  return(
    <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 60,
	            "density": {
	                "enable": true,
	                "value_area": 1500
	            }
          },
          "color":{
            "value": "#cf672a"
          },
	        "line_linked": {
	            "enable": true,
	            "opacity": 0.1
	        },
	        "move": {
	            "direction": "right",
	            "speed": 0.01
	        },
	        "size": {
	            "value": 4
	        },
	        "opacity": {
	            "anim": {
	                "enable": true,
	                "speed": 1,
	                "opacity_min": 0.05
	            }
	        }
			},
			"background":{
				"color":{
					"value":"#292b2c"
				}
			},
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
              },
              "onclick": {
                "enable": true,
                "mode": "push"
            }
	        },
	        "modes": {
	            "push": {
	                "particles_nb": 1
              },
              "repulse": {
                "distance": 50,
                "duration": 2
            }
	        }
	    },
	    "retina_detect": true
	}} />
  )
}

export default HeaderAnimation