import Image from "next/image";
import memojiImage from "@/assets/images/memoji-computer.png"
import ArrowDown from "@/assets/icons/arrow-down.svg"
import grainImage from "@/assets/images/grain.jpg"
import HeroRings from "@/components/HeroRings";
import HeroStars from "@/components/HeroStars";
import HeroSparkles from "@/components/HeroSparkles";
import HeroDots from "@/components/HeroDots";


export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0">
      <div className="absolute -z-10 inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] overflow-hidden">
        <div className="absolute -z-30 opacity-5 inset-0" style={{
          backgroundImage: `url(${grainImage.src})`
        }}>
        </div>
        <HeroRings></HeroRings>
        <HeroStars></HeroStars>
        <HeroSparkles></HeroSparkles>
        <HeroDots></HeroDots>
      </div>
      <div className="container z-0">
        <div className="flex flex-col items-center">
          <Image src={memojiImage} className="size-[100px]" alt="Person peeking from beghind laptop"></Image>
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 flex gap-4 items-center rounded-lg">
            <div className="size-2.5 bg-green-500 rounded-full relative">
              <div className="absolute rounded-full bg-green-500 inset-0 animate-ping-large"></div>
            </div>
            <div className="font-medium text-sm">Available for new projects</div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">Building Exceptional User Experiences</h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in transforming designs into functional , high-performing web applications . Let&rsquo;s discuss your next project.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <a href="#projects" className="font-semibold">Explore My Work</a>
            <ArrowDown className="size-4"></ArrowDown>
          </button>
          <button  className=" h-12 px-6 rounded-xl flex items-center gap-2 border border-white bg-white text-gray-900">
            <span>👋</span>
            <a href="#contact" className="font-semibold ">Let&rsquo;s Connect</a>
          </button>
        </div>
      </div>
    </div>
  );
};
