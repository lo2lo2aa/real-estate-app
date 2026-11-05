import React from 'react'
import egyptMap from '../../assets/images/map.png'

export default function Locations() {
  return (
    <section className="w-full bg-white py-16">

      
      <div className="mb-6 text-center">
        <h2 className="text-[32px] font-heading font-bold text-[#000000]">
          Strategic Locations
        </h2>

        <div className="mx-auto mt-2 h-1 w-36 rounded-full bg-[#C34B4B]"></div>
      </div>

     
      <div className="w-full overflow-hidden">
        <img
          src={egyptMap}
          alt="Strategic Locations Map of Egypt"
          className="h-[300px] w-full object-cover sm:h-[400px] lg:h-[450px]"
        />
      </div>

    </section>
  )
}