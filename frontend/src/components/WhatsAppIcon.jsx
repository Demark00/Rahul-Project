import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppIcon = () => {
    return (
        <a
            href="https://wa.me/+918882168376" // Replace with your WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full 
                 hover:bg-green-600 transition-all duration-300 ease-in-out hover:scale-110
                 animate-bounce hover:animate-none
                 cursor-pointer
                 shadow-[0_5px_15px_rgba(0,0,0,0.3)]"
        >
            <FaWhatsapp className="text-3xl" />
        </a>
    );
};

export default WhatsAppIcon;