import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"
import grainImage from "@/assets/images/grain.jpg"

export const ContactSection = () => {
    return (
        <section className="container pb-16 pt-12 lg:pb-24 lg:pt-20" id="contact">
            <div className="flex flex-col md:flex-row gap-y-8 gap-x-16 items-center relative z-0 overflow-hidden rounded-3xl text-center md:text-left bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10">
                <div className="absolute inset-0 opacity-5 -z-10" style={{
                    backgroundImage: `url(${grainImage.src})`
                }}></div>
                <div>
                    <h2 className="font-calistoga text-2xl md:text-3xl">Let&rsquo;s create something amazing together</h2>
                    <p className="text-sm md:text-base mt-2">Ready to bring your next project to life? Let&rsquo;s connect and discuss how I can help you achieve your goals.</p>
                </div>
                <div>
                    <button className="w-max border border-gray-900 text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2">
                        <span className="font-semibold">Contact Me</span>
                        <ArrowUpRightIcon className="size-4"></ArrowUpRightIcon>
                    </button>
                </div>
            </div>
        </section>
    );
};
