import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/icons/Logo.svg'

export default function Footer() {
  return (
    
<footer className="w-full bg-[#F8F7F5]  font-heading text-[#000000]">

      <div className="mx-auto max-w-7xl px-8 pt-16 pb-8">

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-16">

         
          <div className="flex flex-col items-center text-center">
            <img
              src={logo}
              alt="Grand Atlas"
              className="mb-4 w-28 object-contain"
            />

            <a
              href="tel:+176355471297"
              className="mb-4 text-sm font-lato transition-colors hover:text-[#9B555B]"
            >
              +1 (7635) 547-12-97
            </a>

            <a
              href="mailto:support@lift.agency"
              className="font-lato text-sm transition-colors hover:text-[#9B555B]"
            >
              support@lift.agency
            </a>
          </div>

         
          <div>
            <h3 className="mb-5 text-sm font-semibold font-heading text-[#000000]">
              Quick Links
            </h3>

            <ul className="space-y-3 font-lato text-sm">
              <li>
                <Link to="/" className="transition-colors hover:text-[#9B555B]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/units" className="transition-colors hover:text-[#9B555B]">
                  Inventories
                </Link>
              </li>
              <li>
                <Link to="/zones" className="transition-colors hover:text-[#9B555B]">
                  Zones
                </Link>
              </li>
              <li>
                <Link to="/developers" className="transition-colors hover:text-[#9B555B]">
                  Developers
                </Link>
              </li>
              <li>
                <Link to="/contactus" className="transition-colors hover:text-[#9B555B]">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          
          <div>
            <h3 className="mb-5 font-heading text-sm font-semibold text-[#000000]">
              About
            </h3>

            <ul className="space-y-3 font-lato text-sm">
              <li>
                <a href="#" className="transition-colors hover:text-[#9B555B]">
                  Grand Atlas
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-[#9B555B]">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-[#9B555B]">
                  Legal
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-[#9B555B]">
                  Help
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-[#9B555B]">
                  Support
                </a>
              </li>
            </ul>
          </div>

        
          <div>
            <h3 className="mb-6 text-sm font-heading font-semibold text-[#000000]">
              Get In touch
            </h3>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex w-full overflow-hidden rounded-md border border-[#C9B8B6]"
            >
              <input
                type="email"
                placeholder="Get in touch"
                aria-label="Email address"
                className="min-w-0 flex-1 bg-transparent px-3 py-3 text-xs outline-none placeholder:text-[#AAA09D]"
              />

              <button
                type="submit"
                aria-label="Submit email"
                className="bg-[#9B555B] px-4 text-lg text-white transition-colors hover:bg-[#82444A]"
              >
                →
              </button>
            </form>

            
            <div className="mt-7 flex items-center gap-7 text-sm font-semibold text-[#9B555B]">
              <a href="#" aria-label="LinkedIn" className="hover:opacity-60">
                in
              </a>
              <a href="#" aria-label="Facebook" className="hover:opacity-60">
                f
              </a>
              <a href="#" aria-label="Twitter" className="hover:opacity-60">
                ♥
              </a>
            </div>
          </div>

        </div>

        
        <div className="mt-10 border-t border-[#E6E0DC] pt-7 text-center">
          <p className="text-xs text-[#77706D]">
            © 2020 Lift Media. All rights reserved.
          </p>
        </div>

      </div>
    </footer>

  )
}
