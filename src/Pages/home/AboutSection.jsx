
import React from 'react'
import { Link } from 'react-router-dom'
import aboutImage from '../../assets/images/frameabout.png'

export default function AboutSection() {
  return (
    <section className="bg-white px-6 py-16 sm:px-10 lg:px-16">

      <div className="mx-auto max-w-7xl">

        
        <div className="mb-12 text-center">
          <h2 className="font-heading text-[32px] font-bold text-[#000000] sm:text-3xl">
            About Grand Atlas
          </h2>

          <div className="mx-auto mt-3 h-1 w-36 bg-[#C34B4B]" />
        </div>

        
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:gap-12">

       
          <div className="h-[350px] w-full sm:h-[450px] lg:h-[565px]">
            <img
              src={aboutImage}
              alt="Modern luxury property"
              className="h-full w-full   object-contain"
            />
          </div>

         
          <div className="flex flex-col items-start">

            <p className=" font-lato text-2xl leading-7 text-[#554E4E] sm:text-base sm:leading-8">
              We began with a singular, uncompromising vision: to bridge
              the gap between world-class architecture and the individuals
              who define our global culture. We recognized that for the
              discerning client, a home is rarely just a physical structure;
              it is a curated environment, a private gallery, and the ultimate
              expression of a life well lived. Our journey started not in the
              pursuit of transactions, but in the pursuit of excellence. We
              set out to dismantle the traditional, high-volume real estate
              model in favor of a bespoke, private office approach—one where
              quality always supersedes quantity, and where every client is
              treated as the sole focus of our firm.
              <br />
              We don't just find you a home; we secure your peace of mind
              through a veil of absolute professional confidentiality.
            </p>

            <Link
              to="/about"
              className=" font-lato  text-[20px] mt-8 inline-flex items-center gap-3 bg-linear-to-r from-[#8E1616] to-[#C34B4B] px-8 py-3 font-bold text-white transition duration-300 hover:bg-[#A83B3B]"
            >
              Know More
              <span className="text-lg">→</span>
            </Link>

          </div>
        </div>

      </div>
    </section>
  )
}
