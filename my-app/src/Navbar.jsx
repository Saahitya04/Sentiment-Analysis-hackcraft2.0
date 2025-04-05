import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import emotion from './assets/emotion.svg';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const handleHomeClick = (e) => {
    if (isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <nav className="bg-[#024950] text-white fixed w-full top-0 left-0 z-10">
      <div className="flex items-center justify-between p-4">
        <img src={emotion} alt="Logo" className="w-[50px] h-[50px]" />

        <ul className="hidden md:flex gap-10 text-xl font-bold pl-[100px]">
          <li>
            <a href="/" onClick={handleHomeClick} className="hover:text-gray-300">Home</a>
          </li>

          <li>
            {isHome ? (
              <a href="#about" className="hover:text-gray-300">About</a>
            ) : (
              <Link to="/#about" className="hover:text-gray-300">About</Link>
            )}
          </li>

          <li>
            <Link to="/products" className="hover:text-gray-300">Products</Link>
          </li>

          <li>
            {isHome ? (
              <a href="#contact" className="hover:text-gray-300">Contact Us</a>
            ) : (
              <Link to="/#contact" className="hover:text-gray-300">Contact Us</Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

