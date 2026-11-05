
import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/icons/logo.svg";

export default function Navbar() {
  return (
    <>
      <nav className="bg-white shadow-md px-4 sm:px-6 md:px-8 py-4 flex justify-between items-center sticky top-0 z-50">

        <div className="flex items-center shrink-0">
          <img src={logo} alt="Grand Atlas Logo" className="h-8 sm:h-9 md:h-10 w-auto" />
        </div>

        <ul className="hidden md:flex space-x-8 text-[#847D7D] font-bold font-lato text-[20px]">
          <Link to="/">
            <li className="hover:text-red-700 transition duration-300">
              Home
            </li>
          </Link>

          <Link to="/units">
            <li className="hover:text-red-700 transition duration-300">
              units
            </li>
          </Link>

          <Link to="/zones">
            <li className="hover:text-red-700 transition duration-300">
              zones
            </li>
          </Link>

          <Link to="/Developers">
            <li className="hover:text-red-700 transition duration-300">
              Developers
            </li>
          </Link>

          <Link to="/contactUs">
            <li className="hover:text-red-700 transition duration-300">
              Contact
            </li>
          </Link>
        </ul>

        <button className="bg-red-700 text-white px-4 sm:px-5 md:px-6 py-2 rounded-lg font-bold hover:bg-red-700 transition duration-300 text-sm sm:text-base">
          Register
        </button>

      </nav>
    </>
  )
}
