import React from 'react'
import StarIcon from "@/assets/icons/star.svg"
import { twMerge } from 'tailwind-merge'



function CardHeading({title,description,className}:{title:string,description:string,className?:string}) {
    return (
        <div className={twMerge("px-6 pt-6 md:py-8 md:px-10", className)}>
            <div className="flex items-center gap-2">
                <StarIcon className="size-9  text-emerald-300"></StarIcon>
                <h3 className=" font-calistoga text-3xl">{title}</h3>
            </div>
            <p className="max-w-xs text-sm lg:text-base text-white/60 mt-2">{description}</p>
        </div>
    )
}

export default CardHeading
