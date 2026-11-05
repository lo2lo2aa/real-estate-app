
import React from 'react'
import { ArrowRight } from 'lucide-react'
import aboutImage from '../assets/images/frameabout.png'

export default function AboutSection() {
  return (
    <section className="bg-white px-8 py-12 lg:py-16">

      <div className="mx-auto max-w-7xl">

        <h2 className="text-center font-heading text-2xl font-bold text-[#292524]">
          About Grand Atlas
        </h2>

        <div className="mx-auto mt-2 h-1 w-40 bg-[#98453F]"></div>

        <div className="mt-12 grid items-center gap-10 md:grid-cols-2">

          {/* Image */}
          <div className="overflow-hidden rounded-tl-[80px] border-2 border-[#98453F]">
            <img
              src={aboutImage}
              alt="Grand Atlas luxury property"
              className="h-[350px] w-full object-cover lg:h-[420px]"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col items-start">

            <p className="text-sm leading-7 text-[#55504D] lg:text-base">
              We began with a singular, uncompromising vision: to bridge
              the gap between world-class architecture and the individuals
              who define our global culture. We recognized that for the
              discerning client, a home is rarely just a physical structure;
              it is a curated environment, a private gallery, and the
              ultimate expression of a life well-lived. Our journey started
              not in the pursuit of transactions, but in the pursuit of
              excellence. We set out to dismantle the traditional,
              high-volume real estate model in favor of a bespoke, private
              office approach—one where quality always supersedes quantity,
              and where every client is treated as the sole focus of our
              firm. We don't just find you a home; we secure your peace of
              mind through a veil of absolute professional confidentiality.
            </p>

            <button
              type="button"
              className="mt-7 flex items-center gap-3 rounded-md bg-[#98453F] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#78332F]"
            >
              Know More
              <ArrowRight size={18} />
            </button>

          </div>
        </div>
      </div>
    </section>
  )
}
