import React, { useState } from 'react';
import logo from '../assets/logo3.png';

const NavBar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLinkClick = (link) => {

        // Redirect to the news page with the selected category
        window.location.href = `/news?category=${link.toLowerCase()}`;
    };

    return (
        <nav style={{ backgroundColor: '#003057' }} className="text-white py-2 shadow-md">
            <div className="container mx-auto flex justify-between items-center px-2">
                {/* Logo Section */}
                <div className="flex items-center bg-transparent">
                    <img src={logo} alt="AgriConnect Logo" className="ml-4 h-16 w-26 sm:h-20 sm:w-20 mr-2" />
                </div>

                {/* Desktop Navigation Links */}
                <ul className="hidden md:flex space-x-4 sm:space-x-8 text-sm sm:text-lg mr-5">
                    {['Home', 'Sports', 'Weather', 'Government', 'Politics', 'Cricket', 'Business'].map((link, index) => (
                        <li key={index}>
                            <button
                                onClick={() => handleLinkClick(link)}
                                className="hover:text-orange-400"
                            >
                                {link}
                                <span className="absolute inset-0 h-0.5 bg-orange-400 transition-all duration-300 scale-x-0 group-hover:scale-x-100" />
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMobileMenu} aria-label="Toggle menu" className="text-white focus:outline-none">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Links */}
            {isMobileMenuOpen && (
                <ul className="md:hidden bg-gray-800 text-white flex flex-col space-y-4 p-4">
                    {['Home', 'Sports', 'Weather', 'Government', 'Politics', 'Cricket', 'Business'].map((link, index) => (
                        <li key={index}>
                            <button
                                onClick={() => handleLinkClick(link)}
                                className="hover:text-orange-400 transition duration-200 relative group"
                            >
                                {link}
                                <span className="absolute inset-0 h-0.5 bg-orange-400 transition-all duration-300 scale-x-0 group-hover:scale-x-100" />
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default NavBar;
