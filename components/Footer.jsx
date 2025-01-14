import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
    return (
        <div className='mt-20'>
            <div className='text-center'>
                <h1 className={`text-6xl`}>Aditya.</h1>

                <div className='w-max flex items-center gap-2 mx-auto'>
                    <Image src={isDarkMode? assets.mail_icon_dark :assets.mail_icon} alt='' className='w-6' />
                    adityarajdevanda1@gmail.com
                </div>
            </div>

            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
                <p>Copyright here. All rights reserved.</p>
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                    <li><a target='_blank' href="https://github.com/NINJAOGGY">Github</a></li>
                    <li><a target='_blank' href="https://www.linkedin.com/in/aditya-raj-devanda-b97774250/">LinkedIn</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
