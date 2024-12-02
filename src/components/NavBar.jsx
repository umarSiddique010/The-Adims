import React, { useState } from 'react';
import NavLogo from '../assets/logo/Admis-nav-logo.png'

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="h-16 w-full fixed z-50 top-0 flex items-center justify-between bg-slate-100 font-bold text-xl shadow-lg shadow-slate-200 px-4">
      {/* Logo */}
      <div className="text-black">
        <img className='h-16 w-24' src={NavLogo} alt="the adims logo" />
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden">
        <button 
          onClick={toggleMenu}
          className="text-black focus:outline-none"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-6 text-black">
        <li className="cursor-pointer hover:border-b-2 hover:border-cyan-700"><a href="#root">Home</a></li>
        <li className="cursor-pointer hover:border-b-2 hover:border-gray-700"><a href="#products">Products</a></li>
        <li className="cursor-pointer hover:border-b-2 hover:border-blue-700"><a href="#about">About</a></li>
        <li className="cursor-pointer hover:border-b-2 hover:border-emerald-700"><a href="contact-us">Contact us</a></li>
      </ul>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-slate-100 z-40 top-16">
          <ul className="flex flex-col items-center space-y-6 pt-8 text-black">
            <li className="cursor-pointer hover:text-cyan-700"><a href="#root">Home</a></li>
            <li className="cursor-pointer hover:text-gray-700"><a href="#products">Products</a></li>
            <li className="cursor-pointer hover:text-blue-700"><a href="#about">About</a></li>
            <li className="cursor-pointer hover:text-emerald-700"><a href="contact-us">Contact us</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavBar;