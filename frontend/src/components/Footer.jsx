import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaFacebook , FaInstagram} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#25262A] text-gray-300 py-4 mt-24">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Logo Section */}
                    <div className="mb-4 md:mb-0">
                        <p className="text-2xl font-bold text-yellow-400 poppins-medium">Click Aarambh</p>
                        
                    </div>

                    {/* Text Content */}
                    <div className="content">
                    <p className="text-lg poppins-light">© 2025 Click Aarambh. All rights reserved.</p>
                    </div>
                    {/* Social Media Links */}
                    <div className="flex gap-4">
                        <Link
                            to="#"
                            className="text-yellow-400 bg-gray-800 p-3 rounded-full hover:text-black hover:bg-yellow-400 hover:scale-110 transition-all duration-300 ease-in-out"
                        >
                            <FaLinkedin className="text-xl" />
                        </Link>
                        <Link
                            to="#"
                            className="text-yellow-400 bg-gray-800 p-3 rounded-full hover:text-black hover:bg-yellow-400 hover:scale-110 transition-all duration-300 ease-in-out"
                        >
                            <FaTwitter className="text-xl" />
                        </Link>
                        <Link
                            to="#"
                            className="text-yellow-400 bg-gray-800 p-3 rounded-full hover:text-black hover:bg-yellow-400 hover:scale-110 transition-all duration-300 ease-in-out"
                        >
                            <FaInstagram className="text-xl" />
                        </Link>
                        <Link
                            to="#"
                            className="text-yellow-400 bg-gray-800 p-3 rounded-full hover:text-black hover:bg-yellow-400 hover:scale-110 transition-all duration-300 ease-in-out"
                        >
                            <FaFacebook className="text-xl" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;