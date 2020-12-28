import Image from 'next/image'
export default function About() {
    return (
        <div className="container mx-auto max-w-full about-section mx-auto bg-fixed" id="about">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8  sm:pb-16 md:pb-20  mx-auto pt-0.5">
                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 mx-auto">
                        <div className="p-8 sm:text-center md:text-center mx-auto">
                            <div className="uppercase tracking-wide sm:text-center text-2xl text-blue-dark font-Poppins-bold">About Me</div>
                        </div>
                        <div className="lg:flex lg:justify-center">
                            <div className="lg:flex-shrink-0 shadow-xl">
                                <Image className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full lg:rounded-bl-lg lg:rounded-tl-lg" src="/me.jpg" width={400} height={400} alt="" />
                            </div>
                            <div className="p-8 sm:text-left lg:text-left bg-text-bright shadow-xl lg:rounded-br-lg lg:rounded-tr-lg">
                                <div className="uppercase tracking-wide text-xl text-blue-light font-Poppins-bold">Hi! I’m Ali Sequeira… </div>
                                <p className="mt-2 text-text-black font-Lato">
                                    I’m from Nicaragua (the land of lakes and volcanoes) <br /> besides software development I have a huge passion for <br /> movies, soon I hope to star a blog where a can post <br /> my opinions in my favorites movies.
                                </p>
                                <p className="mt-2 text-text-black font-Lato">
                                    I co-host a podcast in Spanish named: <br /> “La Estacion De Cine” (available on all platform)
                                </p>
                                <p className="mt-2 text-text-black font-Lato">
                                    I’m passionate about Javascript’s ecosystem. <br /> I’ve been building projects from vanillaJs <br /> to React, NodeJS, Redux, and NEXT.JS
                                </p>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}