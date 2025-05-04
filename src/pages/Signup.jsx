import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[var(--shadow-color)]">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-8">

                {/* Header */}
                <div className="text-center mb-6">
                    <h2 className="font-bold text-3xl sm:text-4xl text-[var(--secodary-color)]">Journal</h2>
                    <p className="font-semibold text-lg sm:text-xl text-[var(--paragraph-color)]">Capture. Build. Organise.</p>
                </div>

                {/* Decorative Divider */}
                <div className="w-full h-px bg-[var(--deco-yellow)] mb-6" />

                {/* Social Signup */}
                <div className="text-center mb-6">
                    <h1 className="font-bold text-2xl text-[var(--secodary-color)] mb-1">Capture Your Thoughts</h1>
                    <p className="text-sm text-[var(--paragraph-color)] mb-4">Sign Up with an Open account</p>
                    <div className="flex justify-center gap-4">
                        {/* <Link to="/apple"><button className="border px-4 py-2 rounded w-20">Apple</button></Link> */}
                        <Link to="/google"><button className="border px-4 py-2 rounded w-20">Google</button></Link>
                        {/* <Link to="/x"><button className="border px-4 py-2 rounded w-20">X</button></Link> */}
                    </div>
                </div>

                {/* Divider with OR */}
                <div className="flex items-center justify-center my-6">
                    <div className="flex-grow h-px bg-[var(--deco-yellow)]" />
                    <span className="mx-3 text-sm font-semibold text-[var(--secodary-color)]">or</span>
                    <div className="flex-grow h-px bg-[var(--deco-yellow)]" />
                </div>

                {/* Signup Form */}
                <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                        <input
                            id="username"
                            type="text"
                            placeholder="john_doe"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="johndoe@example.com"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <div className="relative">
                            <input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="********"
                                className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                            >
                                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="remember"
                            className="w-4 h-4 accent-black"
                        />
                        <label htmlFor="remember" className="text-sm text-gray-600 cursor-pointer">
                            Remember me
                        </label>
                    </div>

                    <Link to="/"> <button
                        type="submit"
                        className="w-full bg-[var(--secondary-color)] text-white font-semibold py-2 rounded-md hover:opacity-90 transition duration-200"
                    >
                        Let's Start
                    </button></Link>
                </form>
            </div>
        </div>
    );
};

export default Signup;
