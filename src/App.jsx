import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/home/home'
import Units from './Pages/units/Units'
import Zones from './Pages/zones/Zones'
import ContactUs from './Pages/contactUS/ContactUs'
import Layout from './Components/Layout/Layout'
import Developers from './Pages/developers/Developers'
import ZonesDetails from './Pages/zones/ZoneDetails'
import UnitDetails from './Pages/units/UnitsDetails'
import DeveloperDetails from './Pages/developers/DeveloperDetails'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/units" element={<Units />} />
                <Route path="/units/:id" element={<UnitDetails />} />

        <Route path="/zones" element={<Zones />} />
        <Route path="/zones/:id" element={<ZonesDetails />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/developers/:id" element={<DeveloperDetails />} />
      </Route>
    </Routes>
  )
}