import React from 'react'
import WhatsappLogo from '../assets/logo/whatsapp.svg'
import GmailLogo from "../assets/logo/gmail.svg"
import InstagramLogo from "../assets/logo/instagram.svg"

function Footer() {
  return (
    <div className='px-4 md:px-14 py-12 flex flex-col md:gap-10 md:flex-row justify-evenly items-center font-serif'>
        
        <div id='contact-us' className='w-full md:w-96 mb-8 md:mb-0'>
            <div className='flex flex-col justify-center items-center h-48 bg-white border border-gray-200 rounded-lg p-6 max-w-2xl mx-auto'>
                <h3 className='text-gray-900 font-bold text-xl mb-6'>Stay tuned</h3>
                
                <div className='image-container flex justify-center items-center gap-10'>
                    <a href="" className='h-9 w-9 hover:scale-110 transition-transform'>
                        <img className='h-10 w-9' src={WhatsappLogo} alt="whatsapp logo" />
                    </a>
                    <a href="" className='h-9 w-9 hover:scale-110 transition-transform'>
                        <img className='h-10 w-9' src={GmailLogo} alt="gmail logo" />
                    </a>
                    <a href="" className='h-9 w-9 hover:scale-110 transition-transform'>
                        <img className='h-10 w-9' src={InstagramLogo} alt="instagram logo" />
                    </a>
                </div>
            </div>
        </div>

        <div id="copyright-container" className="w-full md:w-auto md:mt-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 max-w-2xl mx-auto mb-6">
                <div className="flex flex-col md:flex-row items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-emerald-900 mb-4 md:mb-0 md:mt-4">© 2024 The Addims</span>
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-center">
                        <a href="#" className="text-gray-600 hover:text-emerald-900">Privacy Policy</a>
                        <a href="#" className="text-gray-600 hover:text-emerald-900">Terms of Service</a>
                    </div>
                </div>
                <p className="text-gray-500 text-sm text-center md:text-left">
                    All rights reserved. The contents of this website, including text, graphics, images, and other material, are protected by copyright and other intellectual property laws. 
                    Unauthorized use or reproduction of any content is strictly prohibited.
                </p>
            </div>

            <div className="text-center text-gray-600">
                <p className="text-sm">
                    Designed by The Adims | Innovative Comfort Solutions
                </p>
            </div>
        </div>
    </div>
  )
}

export default Footer