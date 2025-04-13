"use client"
import Card from "@/components/Card";
import SectionHeading from "@/components/SectionHeading";
import bookImage from "@/assets/images/book-cover.png"
import JavaScriptIcon from "@/assets/icons/square-js.svg"
import HtmlIcon from "@/assets/icons/html5.svg"
import CssIcon from "@/assets/icons/css3.svg"
import ReactIcon from "@/assets/icons/react.svg"
import ChromeIcon from "@/assets/icons/chrome.svg"
import GithubIcon from "@/assets/icons/github.svg"
import mapImage from "@/assets/images/map.png"
import smileMemoji from "@/assets/images/memoji-smile.png"
import Image from "next/image";
import CardHeading from "@/components/CardHeading";
import ToolBoxItems from "@/components/ToolBoxItems";
import {motion} from "framer-motion"
import { useRef } from "react";

const toolboxItems = [
    { title: 'JavaScript', icon: JavaScriptIcon },
    { title: 'HTML5', icon: HtmlIcon },
    { title: 'CSS3', icon: CssIcon },
    { title: 'React', icon: ReactIcon },
    { title: 'Chrome', icon: ChromeIcon },
    { title: 'Github', icon: GithubIcon },
]

const hobbies = [
    { title: "Painting", emoji: "🎨", top: "5%", left: "5%" },
    { title: "Photography", emoji: "📸", top: "5%", left: "50%" },
    { title: "Hiking", emoji: "🥾", top: "40%", left: "35%" },
    { title: "Gaming", emoji: "🎮", top: "35%", left: "10%" },
    { title: "Music", emoji: "🎵", top: "45%", left: "70%" },
    { title: "Fitness", emoji: "🏋️", top: "65%", left: "5%" },
    { title: "Reading", emoji: "📚", top: "70%", left: "45%" },
]
export const AboutSection = () => {
    const constraintRef=useRef(null)
    return (
        <section className="container py-20 lg:py-28" id="about">
            <SectionHeading title="A Glimpse Into My World" eyebrow="About Me" description="Learn more about who I am, what I do, and what inspires me"></SectionHeading>
            <div className="mt-20 grid md:grid-cols-5 lg:grid-cols-3 md:grid-rows-2 gap-8">
                <Card className="h-[320px] md:col-span-2 lg:col-span-1">
                    <CardHeading title="My Reads" description="Explore the books shaping my perspectives."></CardHeading>
                    <Image src={bookImage} alt="book cover photo" className="w-40 mx-auto mt-8 md:mt-0 "></Image>
                </Card>
                <Card className="h-[320px] md:col-span-3 lg:col-span-2">
                    <CardHeading className="md:pb-0" title="My Toolbox" description="Explore the technologies and tools I use to craft exceptional digital experiences."></CardHeading>
                    <ToolBoxItems items={toolboxItems} itemsWrapperClassName="animate-move-left [animation-duration:30s]"></ToolBoxItems>
                    <ToolBoxItems items={toolboxItems} itemsWrapperClassName="animate-move-right [animation-duration:15s]"></ToolBoxItems>
                </Card>
                <Card className="h-[320px] flex flex-col md:col-span-3 lg:col-span-2">
                    <CardHeading title="Beyond the Code" description="Explore my interests and hobbies beyond the digital realm."></CardHeading>
                    <div className="relative flex-1" ref={constraintRef}>
                        {hobbies.map((hobby, index) => (
                            <motion.div key={index} className="absolute rounded-full items-center inline-flex gap-2 bg-gradient-to-r px-6 py-1.5 from-emerald-300 to to-sky-400" style={{
                                top: hobby.top,
                                left: hobby.left
                            }}
                            drag
                            dragConstraints={constraintRef}
                            >
                                <span className="font-medium text-gray-950">{hobby.title}</span>
                                <span>{hobby.emoji}</span>
                            </motion.div>
                        ))}
                    </div>
                </Card>
                <Card className="h-[320px] relative md:col-span-2 lg:col-span-1">
                    <Image src={mapImage} alt="map" className="size-full object-cover object-left-top" ></Image>
                    <div className="after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30 absolute size-20 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="-z-10 animate-ping [animation-duration:2s] absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400"></div>
                        <Image className="size-20" src={smileMemoji} alt="smile memoji"></Image>
                    </div>
                </Card>
            </div>
        </section>
    );
};
