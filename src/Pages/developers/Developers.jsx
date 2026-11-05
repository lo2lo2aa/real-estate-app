import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Hero from '../../Components/Hero'
import developersImg from "../../assets/images/devolpers.png";
import api from '../../helpers/api';

export default function Developers() {
  const [loading, setLoading] = useState(true)
  const [developers, setDevelopers] = useState([])
  const navigate = useNavigate()

  const getDevelopers = async () => {
    try {
      const response = await api.get("/developer")
      setDevelopers(response.data)
      setLoading(false)
    } catch (error) {
      console.log("error", error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getDevelopers()
  }, [])

  return (
    <>
      <Hero
        bg={developersImg}
        title="Defining the Future Skyline."
        desc="Great developments require more than just capital; they require a narrative. We provide the elite marketing and specialized brokerage services needed to position your landmark projects in front of the world’s most discerning buyers."
        btn={false}
        btnContent="View Units"
        icons={true}
      />

      {loading && (
        <h1 className="text-center text-red-500 mt-10">Loading...</h1>
      )}

      {!loading && developers.length === 0 && (
        <p className="text-center text-gray-500 mt-10">No developers found</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20 py-12">
        {developers.map((developer) => (
          <div
            key={developer.id}
            className="border border-gray-100 rounded-2xl shadow-md overflow-hidden bg-white p-4 flex flex-col"
          >
            
            <div className="relative">
              <img
                src={developer.images?.[0]}
                alt={developer.name_en}
                className="w-full h-56 object-cover rounded-xl"
              />

              {(developer.city || developer.location) && (
                <span className="absolute top-3 right-3 bg-[#C34B4B] text-white text-xs px-3 py-1 rounded">
                  {developer.city || developer.location}
                </span>
              )}
            </div>

            
            <div className="flex items-center gap-3 mt-5">
              {developer.logo && (
                <img
                  src={developer.logo}
                  alt={developer.name_en}
                  className="h-10 object-contain"
                />
              )}
              <h2 className="font-serif text-lg font-semibold text-[#9B2C2C]">
                {developer.name_en}
              </h2>
            </div>

            <p className="text-gray-500 text-xs leading-5 mt-3 line-clamp-3 flex-1">
              {developer.description_en}
            </p>

            <button
              onClick={() => navigate(`/developers/${developer.id}`)}
              className="mt-5 w-full border border-[#9B2C2C] text-[#9B2C2C] rounded-md py-2 text-sm hover:bg-[#9B2C2C] hover:text-white transition"
            >
              View Projects
            </button>
          </div>
        ))}
      </div>
    </>
  )
}