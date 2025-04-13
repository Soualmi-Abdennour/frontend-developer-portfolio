import React from 'react'
import SparkleIcon from "@/assets/icons/sparkle.svg"
import HeroOrbit from './HeroOrbit'

const sparklesData = [
    { orbitSize: 430, sparkleSize: 8, rotation: -14 ,orbitDuration:30},
    { orbitSize: 440, sparkleSize: 5, rotation: 79 ,orbitDuration:32},
    { orbitSize: 530, sparkleSize: 10, rotation: 178 ,orbitDuration:36},
    { orbitSize: 710, sparkleSize: 14, rotation: 144 ,orbitDuration:44},
]
function HeroSparkles() {
    return (
        sparklesData.map((sparkleData, index) => (
            <HeroOrbit key={index} size={sparkleData.orbitSize} rotation={sparkleData.rotation} orbitDuration={sparkleData.orbitDuration}>
                <SparkleIcon className={`text-emerald-300/20 animate-spin `} style={{
                    width: `${sparkleData.sparkleSize * 0.25}rem`,
                    height: `${sparkleData.sparkleSize * 0.25}rem`,
                    transform: `rotate(${-sparkleData.rotation}deg)`,
                    animationDuration: "3s"
                }}></SparkleIcon>
            </HeroOrbit>
        ))
    )
}

export default HeroSparkles
