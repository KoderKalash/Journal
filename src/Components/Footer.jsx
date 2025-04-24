import React from 'react'
import { ArrowRight } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faSquareFacebook, faLinkedin, faXTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        // {grid}
        <footer className='bg-[var(--shadow-color)] pt-16 pb-10 px-6 md:px-20 text-sm'>
            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 '>
                <div className='space-y-6'>
                    <div className='flex items-center space-x-2'>
                        <Link to="/" >
                            <img src="/" alt="Logo" />
                            <h1 className='text-2xl font-bold text-[var(--secondary-color)]'>Journal</h1></Link>
                    </div>

                    <div className='flex gap-1 space-x-4 text-gray-600'>
                        <Link to="/i" className='hover:text-pink-700 rounded-md'><FontAwesomeIcon className='text-xl' icon={faInstagram} /></Link>
                        <Link to="/f" className='hover:text-blue-700 rounded-md'><FontAwesomeIcon className='text-xl' icon={faSquareFacebook} /></Link>
                        <Link to="/li" className='hover:text-blue-600 rounded-md'><FontAwesomeIcon className='text-xl' icon={faLinkedin} /></Link>
                        <Link to="/x" className='hover:text-black rounded-md'><FontAwesomeIcon className='text-xl' icon={faXTwitter} /></Link>
                        <Link to="/g" className='hover:text-purple-600 rounded-md'><FontAwesomeIcon className='text-xl' icon={faGithub} /></Link>
                    </div>

                    <div>
                        <select name="language" id="language" className='bg-[var(--shadow-color)] text-[var(--secondary-color)] font-semibold p-1.5 rounded-md border border-gray-300 hover:bg-gray-200 transition cursor-pointer'>
                            <option value="English">English</option>
                            <option value="Hindi">Hindi</option>
                            <option value="German">Deutsch</option>
                        </select>
                    </div>

                    <div className='text-[var(--paragraph-color)] text-xs'>
                        <p></p>
                        <p>
                            &copy; {new Date().getFullYear()} Journal. All rights reserved.
                        </p>
                    </div>

                </div>

                <div>
                    <h4 className='font-bold text-[var(--secondary-color)] mb-3'>Company</h4>
                    <div className='space-y-2 flex flex-col text-dec'>
                        <Link to="" className='
                         text-[var(--footer-color)] hover:underline decoration-yellow-500 decoration-2'>About us</Link>
                        <Link to="" className='
                         text-[var(--footer-color)] hover:underline decoration-yellow-500 decoration-2'>Careers</Link>
                        <Link to="" className='
                         text-[var(--footer-color)] hover:underline decoration-yellow-500 decoration-2'>Status</Link>
                        <Link to="" className='
                         text-[var(--footer-color)] hover:underline decoration-yellow-500 decoration-2'>Terms & Privacy</Link>
                    </div>
                </div>
                <div>
                    <h4 className='font-bold text-[var(--secondary-color)] mb-3'>Download</h4>
                    <div className='space-y-2 flex flex-col text-dec'>
                        <Link to="" className='
                    text-[var(--footer-color)] hover:underline decoration-yellow-500 decoration-2 '>iOS & Android</Link>
                        <Link to="" className='
                    text-[var(--footer-color)] hover:underline decoration-yellow-500 decoration-2 '>Mac & Windows</Link>
                        <Link to="" className='
                    text-[var(--footer-color)] hover:underline decoration-yellow-500 decoration-2 '>Calendar</Link>
                        <Link to="" className='
                    text-[var(--footer-color)] hover:underline decoration-yellow-500 decoration-2 '>Other Apps</Link>
                    </div>
                </div>
                <div>
                    <h4 className='font-bold text-[var(--secondary-color)] mb-3'>Resources</h4>

                    <div className='space-y-2 flex flex-col text-dec'>
                        <Link to="" className='
                    text-[var(--footer-color)] hover:underline decoration-yellow-500 decoration-2 '>Help Center</Link>
                        <Link to="" className='
                    text-[var(--footer-color)] hover:underline decoration-yellow-500 decoration-2 '>Pricing</Link>
                        <Link to="" className='
                    text-[var(--footer-color)] hover:underline decoration-yellow-500 decoration-2 '>Blog</Link>
                        <Link to="" className='
                    text-[var(--footer-color)] hover:underline decoration-yellow-500 decoration-2 '>Community</Link>
                        <Link to="" className='
                    text-[var(--footer-color)] hover:underline decoration-yellow-500 decoration-2 '>Templates</Link>
                        <Link to="" className='
                    text-[var(--footer-color)] hover:underline decoration-yellow-500 decoration-2 '>Demo</Link>
                    </div>

                </div>
                <div className='space-y-12'>
                    <div>
                        <h4 className='font-bold text-[var(--secondary-color)] mb-3'>Journal for</h4>
                        <div className='space-y-2 flex flex-col text-dec'>
                            <Link to="" className='
                        text-[var(--footer-color)] hover:underline decoration-yellow-500 decoration-2 '>Enterprise</Link>
                            <Link to="" className='
                        text-[var(--footer-color)] hover:underline decoration-yellow-500 decoration-2 '>Small Business</Link>
                        </div>
                    </div>
                    <div>
                        <Link to="" className='flex items-center gap-1'><h3 className='font-bold flex items-center gap-1'>Looking for more? </h3><ArrowRight className='w-4 h-4' /></Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
