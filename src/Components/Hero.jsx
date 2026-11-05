
import React from 'react'
import homeHero from "../assets/images/homehero.png";
import fb from "../assets/icons/fb.svg";
import x from "../assets/icons/Group.svg";
import tiktok from "../assets/icons/x.svg";
import instagram from "../assets/icons/tiktok.svg";

export default function Hero({ bg, title, desc, btn, btnContent, icons }) {
  return (
    <div
      className="h-screen relative bg-cover bg-center text-white flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-0"
      style={{ backgroundImage: `url(${bg || homeHero})` }}
    >

      <h1 className="text-3xl sm:text-4xl md:text-[42px] lg:text-5xl w-full sm:w-[90%] md:w-[85%] lg:w-140 max-w-full font-bold font-heading mb-8 leading-tight md:leading-[1.2] lg:leading-16">
        {title}
      </h1>

      <p className="text-base sm:text-lg md:text-[19px] lg:text-[20px] font-lato font-bold w-full sm:w-[90%] md:w-[85%] lg:w-247 max-w-full text-[#CEC7C7] mb-12">
        {desc}
      </p>

      {btn && (
        <button className="w-64 max-w-full py-2 text-white font-bold bg-linear-to-r from-[#8E1616] to-[#C34B4B] rounded-lg font-lato">
          {btnContent}
        </button>
      )}

      {icons && (
        <div className="hidden sm:flex absolute left-6 bottom-6 md:left-7 md:bottom-8 lg:left-9 lg:bottom-10 flex-row lg:flex-col gap-2">
          <img className="size-9 sm:size-10 md:size-11 lg:size-12 border border-white rounded-full p-1 mb-2" src={fb} alt="facebook" />
          <img className="size-9 sm:size-10 md:size-11 lg:size-12 border border-white rounded-full p-1 mb-2" src={instagram} alt="instagram" />
          <img className="size-9 sm:size-10 md:size-11 lg:size-12 border border-white rounded-full p-1 mb-2" src={x} alt="twitter" />
          <img className="size-9 sm:size-10 md:size-11 lg:size-12 border border-white rounded-full p-1 mb-2" src={tiktok} alt="tiktok" />
        </div>
      )}
    </div>
  );
}
