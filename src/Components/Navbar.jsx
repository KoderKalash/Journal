import React from 'react'
import { useState } from "react"
import { Link } from "react-router-dom"
import { AlignRight, X } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { GoogleLogin } from '@react-oauth/google'

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <nav className=' flex justify-between align-center p-4 text-[var(--secondary-color)] px-5 bg-[var(--primary-color)] sticky top-0 w-full mb-2 shadow-sm'>

      <div className='flex items-center gap-5 pl-6'>

        <Link to="/" className='flex items-center gap-2' >
          <img src="/" alt="logo" className='w-6 h-6' />
          <span><h1 className='text-xl font-bold text-[var(--secondary-color)]'>Journal</h1></span>
        </Link>

        {/* Hidden on all small screens  */}
        <div className='hidden md:flex items-center gap-5 pl-6'>
          <Link to="/about" className='hover:bg-[var(--shadow-color)] text-[var(--secondary-color)]  font-semibold p-1.5 rounded-md flex gap-2 items-center'>About
            <ChevronDown className='w-3 h-3' /></Link>
          <Link to="/templates" className='hover:bg-[var(--shadow-color)] text-[var(--secondary-color)]  font-semibold p-1.5 rounded-md flex gap-2 items-center'>Templates
            <ChevronDown className='w-3 h-3' /></Link>
          <Link to="/blog" className='hover:bg-[var(--shadow-color)] text-[var(--secondary-color)]  font-semibold p-1.5 rounded-md flex gap-2 items-center'>Blog
            <ChevronDown className='w-3 h-3' /></Link>
          <Link to="/pricing" className='hover:bg-[var(--shadow-color)] text-[var(--secondary-color)]  font-semibold p-1.5 rounded-md flex gap-2 items-center'>Pricing
          </Link>
        </div>
      </div>

      <div className="hidden md:flex justify-between gap-3">

        {/* <GoogleLogin onSuccess={(credentialResponse) => {console.log(credentialResponse)}} onError={() => console.log("Login Failed")} /> */}

        <Link to="/login"><button className='text-[var(--secondary-color)] text-sm font-semibold px-4 py-2 rounded-md shadow-sm hover:bg-[var(--shadow-color)] transition cursor-pointer'>Login</button></Link>
        <div className='px-0.5 rounded-md bg-[var(--shadow-color)]'></div>
        <Link to="/signup"><button className='bg-[var(--secondary-color)] text-[var(--primary-color)] text-sm font-semibold px-4 py-2 rounded-md shadow-sm hover:opacity-90 transition cursor-pointer'>Sign Up</button></Link>
      </div>

      {/* Hamburger Menu */}
      <button onClick={() => setOpen(!isOpen)} className='md:hidden focus:outline-none'>
        {isOpen ? (<X className='w-6 h-6 font-semibold text-[var(--secondary-color)]' />) :
          (<AlignRight className='w-6 h-6 font-semibold text-[var(--secondary-color)] md:hidden' />)}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='absolute top-16 right-0 w-50 bg-[var(--primary-color)] flex flex-col items-center gap-4 py-4 rounded-md shadow-md z-50 md:hidden'>
          <Link to="/about" className='hover:bg-[var(--shadow-color)] text-[var(--secondary-color)]  font-semibold p-1.5 rounded-md '>About</Link>
          <Link to="/templates" className='hover:bg-[var(--shadow-color)] text-[var(--secondary-color)]  font-semibold p-1.5 rounded-md '>Templates</Link>
          <Link to="/blog" className='hover:bg-[var(--shadow-color)] text-[var(--secondary-color)]  font-semibold p-1.5 rounded-md '>Blog</Link>
          <Link to="/pricing" className='hover:bg-[var(--shadow-color)] text-[var(--secondary-color)]  font-semibold p-1.5 rounded-md '>Pricing</Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
