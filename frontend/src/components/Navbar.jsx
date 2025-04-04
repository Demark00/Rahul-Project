import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm px-5 py-2 fixed top-0 left-0 w-full z-50" style={{backgroundColor:"#25262A"}}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
                        >
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/portfolio">Portfolio</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-2xl">daisyUI</Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg gap-9 mr-96 font-medium text-neutral-100">
                        <li>
                            <Link
                                to="/"
                                className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[3px] after:bg-amber-50 after:transition-all after:duration-300 hover:after:w-full hover:bg-transparent hover:text-xl hover:font-bold poppins-medium"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/portfolio"
                                className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[3px] after:bg-amber-50 after:transition-all after:duration-300 hover:after:w-full hover:bg-transparent hover:text-xl hover:font-bold poppins-medium"
                            >
                                Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[3px] after:bg-amber-50 after:transition-all after:duration-300 hover:after:w-full hover:bg-transparent hover:text-xl hover:font-bold poppins-medium"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="navbar-end gap-11">
                    <Link
                        to="#"
                        className="text-yellow-400 bg-gray-800 p-3 rounded-2xl hover:text-black hover:bg-yellow-400 hover:scale-110 transition-all duration-300 ease-in-out"
                    >
                        <FaLinkedin className="text-3xl" />
                    </Link>
                    <Link
                        to="/contact"
                        className="btn py-8 px-12 bg-gradient-to-r from-yellow-400 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 hover:scale-105 transition-all duration-300 ease-in-out text-gray-950 text-xl rounded-2xl font-medium poppins-regular"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;