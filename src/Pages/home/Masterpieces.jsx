
import React from 'react'

import palmHills from '../../assets/images/palm.png'
import hacienda from '../../assets/images/hecinda.png'
import sawary from '../../assets/images/sawary.png'

export default function Masterpieces() {
  return (
    <section className="bg-white px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">

        
        <div className="mb-8 text-center">
          <h2 className="font-heading text-[32px] font-bold text-[#000000] sm:text-3xl">
            Hand-Selected Masterpieces
          </h2>

          <div className="mx-auto mt-3 h-1 w-48 bg-[#C34B4B]" />
        </div>

       
        <div className="carousel carousel-center w-full space-x-4 p-4">

         
          <div className="carousel-item w-[85%] flex-col sm:w-[48%] lg:w-[32%]">
            <img
              src={palmHills}
              alt="Palm Hills Office"
              className="h-[220px] w-full rounded-box object-cover sm:h-[250px]"
            />

            <h3 className="mt-4 font-heading text-base font-bold text-[#292524] sm:text-lg">
              01. Palm Hills Office No.3
            </h3>
          </div>

          <div className="carousel-item w-[85%] flex-col sm:w-[48%] lg:w-[32%]">
            <img
              src={hacienda}
              alt="Hacienda Duplex"
              className="h-[220px] w-full rounded-box object-cover sm:h-[250px]"
            />

            <h3 className="mt-4 font-heading text-base font-bold text-[#292524] sm:text-lg">
              02. Hacienda Duplex No.4
            </h3>
          </div>

        
          <div className="carousel-item w-[85%] flex-col sm:w-[48%] lg:w-[32%]">
            <img
              src={sawary}
              alt="Sawary Family Villa"
              className="h-[220px] w-full rounded-box object-cover sm:h-[250px]"
            />

            <h3 className="mt-4 font-heading text-base font-bold text-[#292524] sm:text-lg">
              03. Sawary Family Villa
            </h3>
          </div>

        </div>

       
        <div className="mt-6 flex justify-center gap-2">
          <span className="h-2 w-12 rounded-full bg-[#C34B4B]" />
          <span className="h-2 w-2 rounded-full bg-gray-300" />
          <span className="h-2 w-2 rounded-full bg-gray-300" />
        </div>

      </div>
    </section>
  )
}

