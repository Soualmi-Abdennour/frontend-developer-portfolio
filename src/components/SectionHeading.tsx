import React from 'react'


function SectionHeading({ title, eyebrow, description }: { title: string, eyebrow: string, description: string }) {

    return (
        <>
            <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 m-auto w-fit text-transparent bg-clip-text">{eyebrow}</p>
            <h2 className="font-calistoga text-3xl md:text-5xl text-center mt-6">{title}</h2>
            <p className="text-center mx-auto text-white/60 mt-4 md:text-lg lg:text-xl max-w-md">{description}</p>
        </>
    )
}

export default SectionHeading
