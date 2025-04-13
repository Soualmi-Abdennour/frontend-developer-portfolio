import React from 'react'
import HeroOrbit from './HeroOrbit'
import StarIcon from "@/assets/icons/star.svg"


const starsData = [
    { orbitSize: 800, startSize: 28, rotation: -72,orbitDuration:48  },
    { orbitSize: 550, startSize: 12, rotation: 20 ,orbitDuration:38 },
    { orbitSize: 590, startSize: 8, rotation: 98,orbitDuration: 40 },
]

function HeroStars() {
    return (
        starsData.map((starData, index) => (
            <HeroOrbit key={index} size={starData.orbitSize} rotation={starData.rotation} orbitDuration={starData.orbitDuration}>
                <StarIcon className={`text-emerald-300 animate-spin`} style={{
                    width: `${starData.startSize*0.25}rem`,
                    height: `${starData.startSize*0.25}rem`,
                    transform: `rotate(${-starData.rotation}deg)`,
                    animationDuration:"6s" 
                }}></StarIcon>
            </HeroOrbit>
        ))
    )
}

export default HeroStars
