import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import {motion} from 'motion/react'
import './Header.css'

const Header = ({isDarkmode}) => {
    return (
        <div className='header w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
            {/* animation box */}
            <div className="box border-6 border-solid border-customOrange">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <motion.div
                initial={{scale:0}} whileInView={{scale:1}}
                transition={{duration:0.8, type:'spring', stiffness:100}}
            >
                <Image src={assets.goku} alt='' className='rounded-full w-32 border border-gray-600' />
            </motion.div>
            <motion.h3 initial={{y:-20, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.6, delay:0.3}}
             className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
                Hi, I'm Aditya Raj Devanda
                <Image src={assets.hand_icon} alt='' className='w-6' />
            </motion.h3>
            <motion.h1 initial={{y:-30, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.8, delay:0.5}}
            className='text-3xl sm:text-6xl lg:text-[60px] font-Ovo'>
                Competetive Programmer and Web Developer based in India.
            </motion.h1>
            <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.6, delay:0.7}}
            className='max-w-2xl mx-auto font-Ovo'>
                Feel free to explore my portfolio and discover my projects, skills, and passion for creating impactful work.
            </motion.p>
            <div className='flex items-center gap-4 mt-4'>
                <motion.a initial={{y:30, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.6, delay:0.6}}
                href="#contact" className='px-10 py-3 border rounded-full border-white text-white bg-black flex items-center gap-2 dark:bg-transparent'>
                    Contact Me
                    <Image src={assets.right_arrow_white} alt='' className='w-4' />
                </motion.a>
                <motion.a initial={{y:30, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.6, delay:0.6}}
                href="/aditya_resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'>
                    My Resume
                    <Image src={assets.download_icon} alt='' className='w-4' />
                </motion.a>
            </div>
        </div>
    )
}

export default Header
