import Header from './Header';
import { motion } from 'framer-motion'
export default function hero() {
    return (
        <div className="container mx-auto bg-text-white border-text-black">
            <div className="relative bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="relative z-10 pb-8 bg-text-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                            <polygon points="50,0 100,0 50,100 0,100" />
                        </svg>
                        <Header />
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: {
                                    scale: .8,
                                    opacity: 0
                                },
                                visible: {
                                    scale: 1,
                                    opacity: 1,
                                    transition: {
                                        delay: .4
                                    }
                                }
                            }}
                        >
                            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                                <div className="sm:text-center lg:text-left">
                                    <h1 className="text-4xl tracking-tight font-Poppins text-text-black sm:text-5xl md:text-6xl">
                                        <span className="block xl:inline">Hello I'm</span>
                                    </h1>
                                    <h1 className="text-4xl tracking-tight font-Poppins text-blue-lightest sm:text-5xl md:text-6xl">
                                        <span className="block xl:inline">Ali Sequeira</span>
                                    </h1>
                                    <p className="mt-3 text-base text-text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 font-Lato">
                                        I build full stack applications from scratch. Embracing the best practices. Constantly learning new tools and technologies  to upgrade my skillset and delivers the best solution to all the possibles problems.
                                    </p>
                                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                        <div className="rounded-md shadow">
                                            <a href="#about" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-Puppins rounded-md text-text-white bg-blue-lightest hover:bg-blue-dark hover:text-text-white md:py-4 md:text-lg md:px-10">
                                                Download my CV
                                    </a>
                                        </div>
                                    </div>
                                </div>
                            </main>
                        </motion.div>
                    </div>
                </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full heroImg" src="/landscape.jpeg" alt="" />
                </div>
            </div>
            <style jsx>{`
                .heroImg{
                    width: 768px;
                    height: 640px;

                }
            `}</style>
        </div>
    )
}