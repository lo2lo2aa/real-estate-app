import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../helpers/api";

export default function ZoneDetails() {
  const { id } = useParams();
  const [zone, setZone] = useState(null);
  const [loading, setLoading] = useState(true);

  const getZoneDetails = async () => {
    try {
      const response = await api.get(`/zone/${id}`);
      setZone(response.data);
    } catch (error) {
      console.error("API error:", error.response?.status, error.response?.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getZoneDetails();
  }, [id]);

  if (loading) {
    return <h1 className="text-center text-red-500 mt-10">Loading...</h1>;
  }

  if (!zone) {
    return <h1 className="text-center text-red-500 mt-10">Zone Not Found</h1>;
  }

  const images = zone.images || [];
  const projects = zone.projects || [];

  return (
    <div className="px-6 md:px-20 py-10">
      {/* Page heading + red underline */}
      <div className="text-center mb-8">
        <h1 className="inline-block font-serif text-2xl md:text-3xl font-semibold text-gray-900 pb-2 border-b-4 border-[#C34B4B]">
          {zone.name_en}
        </h1>
      </div>

      
      <img
        src={images[0]}
        alt={zone.name_en}
        className="w-full h-[300px] md:h-[480px] object-cover rounded-3xl shadow-lg"
      />

     
      <div className="flex justify-between items-start gap-4 mt-10">
        <p className="text-sm text-gray-500">📍 {zone.city}</p>

        <p className="text-gray-700 whitespace-nowrap">
          Projects: {projects.length}
        </p>
      </div>

     
      <div className="mt-8">
        <h3 className="font-semibold mb-4">Overview</h3>
        <p className="text-gray-500 leading-7">{zone.description_en}</p>
      </div>

     
      {projects.length > 0 && (
        <div className="mt-14">
          <h3 className="font-semibold mb-4">Projects in {zone.name_en}</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="border border-gray-100 rounded-xl shadow-sm overflow-hidden bg-white"
              >
                <div className="p-4">
                  <h4 className="font-semibold text-[#9B2C2C]">
                    {project.name_en}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}