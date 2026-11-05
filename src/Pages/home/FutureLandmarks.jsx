import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../helpers/api";

export default function FutureLandmarks() {
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
    <section className="w-full bg-white px-6 py-16 sm:px-10 lg:px-14">
     
      <div className="mb-10 text-center">
        <h2 className="text-[32px] font-lato font-bold text-[#000000]">
          Future Landmarks
        </h2>

        <div className="mx-auto mt-3 h-1 w-36 rounded-full bg-[#C34B4B]" />
      </div>

      
      {loading && (
        <p className="py-10 text-center text-gray-500">Loading...</p>
      )}

     
      {!loading && zones.length === 0 && (
        <p className="py-10 text-center text-gray-500">
          No landmarks available.
        </p>
      )}

      
      {!loading && zones.length > 0 && (
        <div className="carousel carousel-center w-full gap-5 space-x-0 p-1">
          {zones.map((zone) => (
            <div
              key={zone.id}
              className="carousel-item w-[85%] sm:w-[46%] lg:w-[32%]"
            >
              <div className="flex w-full flex-col rounded-2xl border border-gray-100 bg-white p-2 shadow-sm transition duration-300 hover:shadow-md">
               
                <div className="relative">
                  <img
                    src={zone.images?.[0]}
                    alt={zone.name_en || "Landmark"}
                    className="h-[230px] w-full rounded-xl object-cover sm:h-[250px]"
                  />

                  <span className="absolute right-3 top-3 rounded-md bg-[#C34B4B] px-3 py-1.5 text-xs font-medium text-white">
                    {zone.city || "New Cairo"}
                  </span>
                </div>

                
                <div className="flex min-h-[86px] items-center gap-3 px-2 py-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#F8F1F1] text-lg font-bold text-[#C34B4B]">
                    {zone.name_en?.charAt(0) || "Z"}
                  </div>

                  <div className="min-w-0">
                    <h3 className="truncate text-base font-bold text-[#292929]">
                      {zone.name_en}
                    </h3>

                    <p className="mt-1 line-clamp-2 text-xs text-gray-500">
                      {zone.description_en}
                    </p>
                  </div>
                </div>

               
                <button
                  onClick={() => navigate(`/zones/${zone.id}`)}
                  className="mt-auto w-full rounded-lg border border-[#C34B4B] py-2 text-sm font-medium text-[#9F4545] transition duration-300 hover:bg-[#C34B4B] hover:text-white"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

     
      {zones.length > 0 && (
        <div className="mt-7 flex justify-center gap-2">
          <span className="h-2 w-12 rounded-full bg-[#C34B4B]" />
          <span className="h-2 w-2 rounded-full bg-gray-200" />
          <span className="h-2 w-2 rounded-full bg-gray-200" />
        </div>
      )}
    </section>
  );
}