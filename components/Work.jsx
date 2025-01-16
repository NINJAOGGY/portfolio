import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import './Work.css';
import { motion } from 'framer-motion';  // Ensure correct import

const Work = ({ isDarkMode }) => {
    return (
        <div className="w-full px-[12%] py-14 scroll-mt-20" id="work">
            <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
            <h2 className="text-center text-5xl font-Ovo">My latest work</h2>

            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in full-stack development.
            </p>

            <div className="grid grid-cols-auto my-10 gap-5 dark:text-black">
                {workData.map((project, index) => {
                    // Define the animation properties based on index
                    const directions = [
                        { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, ease: 'easeOut' } }, // Top
                        { initial: { opacity: 0, x: -20 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.6, ease: 'easeOut' } }, // Right
                        { initial: { opacity: 0, y: -20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, ease: 'easeOut' } }, // Bottom
                        { initial: { opacity: 0, x: 20 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.6, ease: 'easeOut' } }, // Left
                    ];

                    const animationProps = directions[index % directions.length];

                    return (
                        <a
                            href={project.githubUrl} // Link to GitHub
                            target="_blank" // Open in a new tab
                            rel="noopener noreferrer" // For security
                            key={index}
                            className="group" // Allow group hover effect
                        >
                            <motion.div
                                whileInView={animationProps.whileInView}
                                initial={animationProps.initial}
                                transition={animationProps.transition}
                                className={`aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer`}
                                style={{ backgroundImage: `url(${project.bgImage})` }}
                            >
                                <div
                                    className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7"
                                >
                                    <div>
                                        <h2 className="font-semibold">{project.title}</h2>
                                        <p className="text-sm text-gray-700">{project.description}</p>
                                    </div>

                                    <div
                                        className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition"
                                    >
                                        <Image
                                            src={assets.send_icon}
                                            alt=""
                                            className="w-5"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </a>
                    );
                })}
            </div>

            <a
                className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
                target="_blank"
                href="https://github.com/NINJAOGGY"
            >
                show more
                <Image
                    src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
                    alt=""
                    className="w-4"
                />
            </a>
        </div>
    );
};

export default Work;
