import React from 'react'
import Hero from '../../Components/Hero'
import homeHero from "../../assets/images/homehero.png";
import Benchmarks from './Benchmarks';

import AboutSection from './AboutSection';
import Masterpieces from './Masterpieces';
import Locations from './Locations';
import FutureLandmarks from './FutureLandmarks';

export default function Home() {
  return ( 
    <>
    <Hero
      bg={homeHero}
      title={"Redefining the Horizon of Modern Luxury Living"}
      desc={"We believe a home should be a sanctuary of innovation and an extension of your personal brand. By combining cutting-edge market data with a keen eye for world-class design, we help you navigate the complexities of the luxury market to find a space that inspires your best work and your deepest rest."}
      btn={true}
      btnContent={"Explore"}
      icons={true}
    /> 
     <Benchmarks/>
    <AboutSection/>
 <Masterpieces/>
 <Locations/>
 <FutureLandmarks/>
    </>
    
  );
}