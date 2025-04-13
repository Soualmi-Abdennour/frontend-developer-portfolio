import React from 'react'

const orbits = [620, 820, 1020, 1220]
function HeroOrbits() {
    return (orbits.map((orbit, index) => (<div key={index} className="hero-ring" style={{
        width: ` ${orbit}px`,
        height: `${orbit}px`
    }}></div>)))
}
export default HeroOrbits
