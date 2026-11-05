import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../../Components/Hero";
import zonesImg from "../../assets/images/zones.png";
import api from "../../helpers/api";

export default function Zones() {
  const [loading, setLoading] = useState(true);
  const [zones, setZones] = useState([]);
  const navigate = useNavigate();

  const getZones = async () => {
    try {
      const response = await api.get("/zone");
      setZones(response.data);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getZones();
  }, []);

  return (
    <>
      <Hero
        bg={zonesImg}
        title="Destinations Defined by Distinction"
        desc="From the quiet pulse of the shoreline to the vibrant energy of the metropolitan center, explore our guide to the neighborhoods that mirror your ambition and your aesthetic."
        btn={false}
        icons={true}
      />

      {loading && (
        <h1 className="text-center text-red-500">Loading...</h1>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {zones.map((zone) => (
          <div
            key={zone.id}
             onClick={() => navigate(`/zones/${zone.id}`)}
             className="cursor-pointer border rounded-lg shadow hover:shadow-lg transition"
                >
            <img
              src={zone.images[0]}
              alt={zone.name_en}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{zone.name_en}</h2>
              <p className="text-gray-600">{zone.description_en}</p>
              <p className="text-gray-500 mt-2">City: {zone.city}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}