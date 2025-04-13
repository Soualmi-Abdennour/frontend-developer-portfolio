import React, { PropsWithChildren } from 'react'
import grainImage from "@/assets/images/grain.jpg"
import { twMerge } from 'tailwind-merge'



function Card({ className, children ,style}: PropsWithChildren<{ className?: string,style?:{} }>) {
    return (
        <div className={twMerge("bg-gray-800 rounded-3xl  relative overflow-hidden z-0 after:content-[''] after:absolute  after:rounded-3xl after:pointer-events-none after:inset-0 after:outline after:z-10 after:outline-2 after:-outline-offset-2 after:outline-white/20",className)} style={style}>
            <div className="absolute inset-0 opacity-5 -z-10" style={{
                backgroundImage: `url(${grainImage.src})`
            }}></div>
            {children}
        </div>
    )
}

export default Card
