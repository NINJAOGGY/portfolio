'use client'
import React, { useState } from 'react'
import './Contact.css'

const Contact = ({isDarkMode}) => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "5463df58-40bb-4101-a666-0af48b68df6a");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className='footer w-full px-[12%] py-10 scroll-mt-20 bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none' id='contact'>
            <h4 className='text-center mb-2 text-lg '>Conect with Me</h4>
            <h2 className='text-center text-5xl '>Get in touch</h2>

            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 '>
                I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.
            </p>

            <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
                <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
                    <input name='name' className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' type='text' placeholder='Enter your name' required />
                    <input name='email' className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' type='email' placeholder='Enter your email' required />
                </div>

                <textarea name='message' className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90' rows='6' placeholder='Enter your message' required></textarea>
                <button className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover' type='submit'>
                    Submit Now
                </button>

                <p className='mt-4'>
                    {
                        result
                    }
                </p>
            </form>

        </div>
    )
}

export default Contact
