
import React from 'react'

import Building2 from "../../assets/icons/building2.svg"
import HandCoins from "../../assets/icons/HandCoins.svg"
import Smile from "../../assets/icons/smile.svg"
import Settings from "../../assets/icons/Settings.svg"

export default function Benchmarks() {

  const benchmarks = [
    {
      icon: Building2,
      number: "48",
      title: "Properties Managed"
    },
    {
      icon: HandCoins,
      number: "90M",
      title: "Total Managed Investments"
    },
    {
      icon: Smile,
      number: "500",
      title: "Happy Clients"
    },
    {
      icon: Settings,
      number: "99%",
      title: "Client Satisfaction"
    }
  ]

  return (
    <section className="bg-white px-8 py-12">

      <h2 className="text-center font-heading text-2xl sm:text-[28px] md:text-[30px] lg:text-[32px] font-bold text-[#000000]">
        Benchmarks of Success
      </h2>

      <div className="mx-auto mt-2 h-1 w-20 bg-[#C34B4B]"></div>

      <div className="mx-auto mt-8 grid max-w-7xl grid-cols-2 gap-4 lg:grid-cols-4">

        {benchmarks.map((item) => (
          <div
            key={item.title}
            className="flex min-h-[150px] flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white px-3 py-4 text-center shadow-[0_3px_2px_rgba(0,0,0,0.12)]"
          >

            <img
              src={item.icon}
              alt={item.title}
              className="mb-2 h-[22px] w-[22px] object-contain"
            />

            <h3 className="font-lato text-xl sm:text-2xl font-bold text-[#1D1616]">
              {item.number}
            </h3>

            <p className="mt-1 text-xs sm:text-sm md:text-[15px] lg:text-[16px] text-[#554E4E]">
              {item.title}
            </p>

          </div>
        ))}

      </div>

    </section>
  )
}
