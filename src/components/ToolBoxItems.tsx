import React, { Fragment } from 'react'
import TechIcon from "@/components/TechIcon";
import { twMerge } from 'tailwind-merge';


function ToolBoxItems({ items, itemsWrapperClassName }: { items: { title: string, icon: React.ElementType }[], itemsWrapperClassName?: string }) {
    return (
        <div className='flex mt-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
            <div className={twMerge(itemsWrapperClassName, 'flex py-0.5 flex-none items-center gap-6 pr-6')}>
                {[...new Array(2)].fill(0).map((_, index) => (
                    <Fragment key={index}>
                        {items.map((tool, index) => (
                            <div key={index} className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg">
                                <TechIcon Component={tool.icon}></TechIcon>
                                <span className="font-semibold">{tool.title}</span>
                            </div>
                        ))}
                    </Fragment>
                ))}
            </div>
        </div>
    )
}

export default ToolBoxItems
