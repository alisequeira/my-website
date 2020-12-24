import { useState } from 'react'
export default function Header() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
                    <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                        <div className="flex items-center justify-between w-full md:w-auto">
                            <a href="#">
                                <span className="sr-only">Workflow</span>
                                <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" />
                            </a>
                            <div className="-mr-2 flex items-center md:hidden" open={open}>
                                <button type="button" onClick={() => setOpen(!open)} className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" id="main-menu" >
                                    <span className="sr-only">Open main menu</span>
                                    <svg className="h-6 w-6 text-blue-light" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                        <a href="#" className="font-Poppins text-blue-dark hover:text-blue-light">Home</a>

                        <a href="#about" className="font-Poppins text-blue-dark hover:text-blue-light">About me</a>

                        <a href="#skills" className="font-Poppins text-blue-dark hover:text-blue-light">Skills</a>

                        <a href="#projects" className="font-Poppins text-blue-dark hover:text-blue-light">Projects</a>

                        <a href="#" className="font-Poppins text-blue-dark hover:text-blue-light">Contact Me</a>
                    </div>
                </nav>
            </div>
            <div className={open ? "absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden" : "absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden hidden"}>
                <div className="rounded-lg shadow-md bg-text-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="px-5 pt-4 flex items-center justify-between">
                        <div>
                            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
                        </div>
                        <div className="-mr-2">
                            <button type=" button" onClick={() => setOpen(!open)} className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="sr-only">Close main menu</span>

                                <svg className="h-6 w-6 text-blue-light" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div role="menu">
                        <div className="px-2 pt-2 pb-3 space-y-1" role="none">
                            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-blue-dark hover:text-blue-lightest hover:bg-blue-darker" role="menuitem">Home</a>

                            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-blue-dark hover:text-blue-lightest hover:bg-blue-darker" role="menuitem">About me</a>

                            <a href="#skills" className="block px-3 py-2 rounded-md text-base font-medium text-blue-dark hover:text-blue-lightest hover:bg-blue-darker" role="menuitem">Skills</a>

                            <a href="#projects" className="block px-3 py-2 rounded-md text-base font-medium text-blue-dark hover:text-blue-lightest hover:bg-blue-darker" role="menuitem">Projects</a>
                        </div>
                        <div role="none">
                            <a href="#" className="block w-full px-5 py-3 text-center font-medium ext-blue-dark hover:text-blue-lightest hover:bg-blue-darker" role="menuitem">
                                Contact Me
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}