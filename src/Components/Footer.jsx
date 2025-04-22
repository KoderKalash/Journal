import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        // {grid}
            <footer className='flex flex-col justify-center items-center px-4 py-12 border-b-1 border-[var(--shadow-color)]'>
                <div>
                    <div>
                        <Link to="/">
                            <img src="/" alt="Logo" />
                            <h1>Journal</h1></Link>
                    </div>

                    <div>
                        <Link to="/">insta</Link>
                        <Link to="/">fb</Link>
                        <Link to="/">linkedin</Link>
                        <Link to="/">x</Link>
                    </div>

                    <div>
                        <select name="language" id="language" className='bg-[var(--shadow-color)] text-[var(--secondary-color)] font-semibold p-1.5 rounded-md'>
                            <option value="Hindi">Hindi</option>
                            <option value="English">English</option>
                            <option value="German">Deutsch</option>
                        </select>
                    </div>

                    <div>
                        <p>
                            &copy; {new Date().getFullYear()} Journal. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
    )
}

export default Footer
