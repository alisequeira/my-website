
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
                                <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full lg:rounded-bl-lg lg:rounded-tl-lg" src="https://via.placeholder.com/400x400" alt="" />
                            </div>
                            <div className="p-8 sm:text-left lg:text-left bg-text-bright shadow-xl lg:rounded-br-lg lg:rounded-tr-lg">
                                <div className="uppercase tracking-wide text-xl text-blue-light font-Poppins-bold">Lorem Ipsum</div>
                                <p className="mt-2 text-text-black font-Lato">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting <br />  industry.Lorem Ipsum has been the industry's
                                    software like Aldus <br />  PageMaker including versions of Lorem Ip
                                </p>
                                <p className="mt-2 text-text-black font-Lato">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting <br />  industry.Lorem Ipsum has been the industry's
                                    software like Aldus <br />  PageMaker including versions of Lorem Ip
                                </p>
                                <p className="mt-2 text-text-black font-Lato">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting <br />  industry.Lorem Ipsum has been the industry's
                                    software like Aldus <br />  PageMaker including versions of Lorem Ip
                                </p>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}