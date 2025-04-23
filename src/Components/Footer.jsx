import React from 'react'
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
                        <Link to="/i" className='p-1 hover:bg-[var(--shadow-color)] rounded-md'>insta</Link>
                        <Link to="/f" className='p-1 hover:bg-[var(--shadow-color)] rounded-md'>fb</Link>
                        <Link to="/li" className='p-1 hover:bg-[var(--shadow-color)] rounded-md'>linkedin</Link>
                        <Link to="/x" className='p-1 hover:bg-[var(--shadow-color)] rounded-md'>x</Link>
                        <Link to="/g" className='p-1 hover:bg-[var(--shadow-color)] rounded-md'>github</Link>
                    </div>

                    <div>
                        <select name="language" id="language" className='bg-[var(--shadow-color)] text-[var(--secondary-color)] font-semibold p-1.5 rounded-md border border-gray-300 hover:bg-gray-200 transition cursor-pointer'>
                            <option value="English">English</option>
                            <option value="Hindi">Hindi</option>
                            <option value="German">Deutsch</option>
                        </select>
                    </div>

                    <div className='text-[var(--paragraph-color)] text-xs'>
                        <p>
                            &copy; {new Date().getFullYear()} Journal. All rights reserved.
                        </p>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer
