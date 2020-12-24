import { motion } from 'framer-motion'
import Project from './Project'
export default function Projects() {
    const projects = [
        {
            id: 1,
            name: "YelpCamp",
            description: "Made it using Nodejs, Express, Ejx and MongoDb. You can store and watch you favorite campground.",
            image: "https://source.unsplash.com/random/200x200",
            link: "https://github.com/alisequeira/yepCamp"
        },
        {
            id: 2,
            name: "Blogster",
            description: "Made it using React, Nodejs, Express, MongoDb. Storage, Create, Read and Delete blogpost.",
            image: "https://source.unsplash.com/random/200x200",
            link: "https://github.com/alisequeira/Blogster"
        },
        {
            id: 3,
            name: "Budgety",
            description: "Made it full  with JavaScript, html and css. Calculate your expenses of the month or your incomes",
            image: "https://source.unsplash.com/random/200x200",
            link: "https://github.com/alisequeira/complete-javascript-course"
        }
    ]
    return (
        <>
            <div className="py-12 bg-text-bright" id="projects">
                <div className="lg:text-center lg: mb-9 sm: text-center">
                    <h2 className="text-base text-blue-lightest font-Poppins-bold text-2xl tracking-wide uppercase">My Projects</h2>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <dl className="space-y-10 md:space-y-0 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 md:gap-x-8 md:gap-y-10">
                        {projects.map(({ id, name, description, image, link }) => {
                            return (
                                <motion.div
                                    whileHover={{
                                        position: "relative",
                                        zIndex: 1,
                                        background: "white",
                                        scale: 1.2,
                                        transition: {
                                            duration: .5
                                        }
                                    }}
                                >
                                    <Project
                                        key={id}
                                        name={name}
                                        description={description}
                                        image={image}
                                        link={link}
                                    />
                                </motion.div>
                            )
                        })}
                    </dl>
                </div>
            </div>
        </>
    )
}