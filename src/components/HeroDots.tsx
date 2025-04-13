import React from 'react'
import HeroOrbit from './HeroOrbit'

const dotsData = [
    { orbitSize: 720, dotSize: 3, rotation: 85,orbitDuration: 46},
    { orbitSize: 520, dotSize: 2, rotation: -41 ,orbitDuration:34},
    { orbitSize: 650, dotSize: 3, rotation: -5,orbitDuration:42 },
]
function HeroDots() {
    return (
        dotsData.map((dotData, index) => (
            <HeroOrbit key={index} size={dotData.orbitSize} rotation={dotData.rotation} orbitDuration={dotData.orbitDuration}>
                <div className={`rounded-full bg-emerald-300/20`} style={{
                    width: `${dotData.dotSize * 0.25}rem`,
                    height: `${dotData.dotSize * 0.25}rem`,
                }}></div>
            </HeroOrbit>
        ))
    )
}

export default HeroDots
