export default function Contact() {
    return (

        <div id="contact" className=" bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md font-Poppins text-blue-lightest">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Contact Me
            </h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-text-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form name="ContactForm" className="space-y-6" method="POST" data-netlify="true" data-netlify-recapcha="true">
                        <input type="hidden" name="form-name" value="ContactForm" />
                        <div>
                            <label htmlFor="email" className="block text-sm font-Lato-bold text-text-black">
                                Email address
                            </label>
                            <div className="mt-1">
                                <input id="email" name="email" type="email" autoComplete="email" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="name" className="block text-sm font-Lato-bold text-text-black">
                                Name
                            </label>
                            <div className="mt-1">
                                <input id="name" name="name" type="text" autoComplete="name" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-Lato-bold text-text-black"></label>
                            <div className="mt-1">
                                <textarea id="message" name="message" cols="30" rows="8" class="appearance-none  text-sm font-Lato-bold block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="What do you have in mind?"></textarea>
                            </div>
                        </div>
                        <div data-netlify-recaptcha="true"></div>
                        <div>
                            <button type="submit" name="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-Poppins text-white text-text-white bg-blue-lightest hover:bg-blue-dark hover:text-text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Submit
                            </button>
                        </div>
                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-text-white text-text-black font-Poppins">
                                    Or follow me
                                </span>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-3 gap-3">
                            <div>
                                <a href="https://www.linkedin.com/in/ali-sequeira-obregon-758a49189/" target="_blank" className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-blue-lightest hover:text-text-white">
                                    <span className="sr-only">Find me on linkedin</span>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 40 40" aria-hidden="true">

                                        <path fillRule="evenodd" d="m8.3 31.6h5.1v-15.5h-5.1v15.5z m5.5-20.3q0-1.2-0.8-1.9t-2.1-0.8-2.1 0.8-0.8 1.9q0 1.1 0.8 1.9t2 0.8h0.1q1.3 0 2.1-0.8t0.8-1.9z m13 20.3h5.2v-8.9q0-3.5-1.6-5.2t-4.3-1.8q-3.1 0-4.7 2.6h0v-2.2h-5.1q0 1.4 0 15.5h5.1v-8.7q0-0.8 0.2-1.2 0.3-0.8 1-1.4t1.7-0.5q2.5 0 2.5 3.5v8.3z m10.5-22.3v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>

                            <div>

                            </div>

                            <div>
                                <a href="https://github.com/alisequeira" target="_blank" className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-blue-lightest hover:text-text-white">
                                    <span className="sr-only">Checkout my github page</span>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}