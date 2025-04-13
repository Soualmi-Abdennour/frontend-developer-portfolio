import React, { PropsWithChildren } from 'react'

function HeroOrbit({ children, size, rotation,orbitDuration}: PropsWithChildren<{ size: number, rotation: number,orbitDuration?:number }>) {
    return (
        <div className={`absolute top-1/2 left-1/2`}
            style={{
                transform: `translate(-50%,-50%)  rotate(${rotation}deg)`
            }}>
            <div className='animate-spin' style={{
                height: `${size}px`,
                width: `${size}px`,
                animationDuration: `${orbitDuration}s`
            }}>
                {children}
            </div>
        </div>
    )
}

export default HeroOrbit
