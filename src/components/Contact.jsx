import React from 'react'
import { FaLinkedin, FaTwitter, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <div id='contact' >
        <div className='flex flex-col justify-center items-center relative  '>
                <p className='z-10 md:text-[40px] text-[32px] font-bold'>Contact Me</p>
                <div className='absolute md:translate-x-[70px] md:-translate-y-[10px] translate-x-[60px] -translate-y-[10px] w-[50px] h-[40px] bg-[#DCB6AB]'></div>
        </div>
        <div>
            <div>
                <p>Contact Me</p>
                <p>Have something to share or a project in mind? Reach out via the contact form  and let's start a conversation!</p>
                <div>
                    <div>
                    <p>Don't want to send Mails</p>
                    <p>Write me on social media</p>
                    </div>
                    <div>
                          <FaLinkedin/>
                          <FaTwitter/>
                    </div>
                </div>
            </div>
            <div>


                
            </div>
        </div>
    </div>
  )
}
