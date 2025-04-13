import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import CheckCircleIcon from "@/assets/icons/check-circle.svg"
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import Card from "@/components/Card";

const portfolioProjects = [
    {
        company: "Acme Corp",
        year: "2022",
        title: "Dark Saas Landing Page",
        results: [
            { title: "Enhanced user experience by 40%" },
            { title: "Improved site speed by 50%" },
            { title: "Increased mobile traffic by 35%" },
        ],
        link: "",
        image: darkSaasLandingPage,
    },
    {
        company: "Innovative Co",
        year: "2021",
        title: "Light Saas Landing Page",
        results: [
            { title: "Boosted sales by 20%" },
            { title: "Expanded customer reach by 35%" },
            { title: "Increased brand awareness by 15%" },
        ],
        link: "",
        image: lightSaasLandingPage,
    },
    {
        company: "Quantum Dynamics",
        year: "2023",
        title: "AI Startup Landing Page",
        results: [
            { title: "Enhanced user experience by 40%" },
            { title: "Improved site speed by 50%" },
            { title: "Increased mobile traffic by 35%" },
        ],
        link: "",
        image: aiStartupLandingPage,
    },
];

export const ProjectsSection = () => {
    return (
        <section className="mb-16 lg:py-24" id="projects">
            <div className="container">
                <SectionHeading title="Featured Projects" eyebrow="Real-world Results" description="See how I transformed concepts into engaging digital experiences"></SectionHeading>
                <div className="flex flex-col mt-10 md:mt-20 gap-20">
                    {portfolioProjects.map((project, index) => (
                        <Card key={index} className='sticky lg:flex lg:gap-16  px-8 pt-8 lg:px-8 lg:pt-16 md:pt-12 md:px-10' style={{
                            top: `${64+index*40}px`
                        }}>
                            <div className="lg:flex-1 lg:pb-16">
                                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 flex items-center font-bold uppercase tracking-widest text-sm w-fit gap-2 text-transparent bg-clip-text">
                                    <span>{project.company}</span>
                                    <span>&bull;</span>
                                    <span>{project.year}</span>
                                </div>
                                <h3 className="font-calistoga text-2xl md:text-4xl mt-2 md:mt-5">{project.title}</h3>
                                <hr className="border-t-2 border-white/5 mt-4 md:mt-5"></hr>
                                <ul>
                                    {project.results.map((result, index) => (
                                        <li key={index} className="flex items-center gap-2 text-sm text-white/50 mt-4 md:mt-5 md:text-base">
                                            <CheckCircleIcon className="size-5 md:size-6"></CheckCircleIcon>
                                            <span>{result.title}</span>
                                        </li>
                                    ))}
                                </ul>
                                <a href={project.link} className="md:w-fit block">
                                    <button className="mt-8 bg-white text-gray-950 rounded-xl h-12 w-full  md:px-6 font-semibold flex items-center gap-2 justify-center">
                                        <span >Visit Live Site</span>
                                        <ArrowUpRightIcon className="size-4"></ArrowUpRightIcon>
                                    </button>
                                </a>
                            </div>
                            <div className="lg:flex-1 lg:relative">
                                <Image src={project.image} alt={project.title} className="mt-8 lg:mt-0 lg:h-full lg:w-auto lg:max-w-none lg:absolute   -mb-4 md:mb-0"></Image>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
};
