import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../helpers/api";

export default function DeveloperDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [developer, setDeveloper] = useState(null);
  const [loading, setLoading] = useState(true);

  const getDeveloperDetails = async () => {
    try {
      const response = await api.get(`/developer/${id}`);
      setDeveloper(response.data);
      setLoading(false);
    } catch (error) {
      console.error("API error:", error.response?.status, error.response?.data);
      setLoading(false);
    } 
  };

  useEffect(() => {
    getDeveloperDetails();
  }, [id]);

  if (loading) {
    return <h1 className="text-center text-red-500 mt-10">Loading...</h1>;
  }

  if (!developer) {
    return <h1 className="text-center text-red-500 mt-10">Developer Not Found</h1>;
  }

  const projects = developer.projects || [];

  return (
    <div className="px-6 md:px-20 py-10">

     
      <div className="text-center mb-8">
        <h1 className="inline-block font-serif text-2xl md:text-3xl font-semibold text-[#1F2A5A] pb-2 border-b-4 border-[#C34B4B]">
          Developers Projects
        </h1>
      </div>

      
      <img
        src={developer.images?.[0] || developer.image}
        alt={developer.name_en}
        className="w-full h-[300px] md:h-[480px] object-cover rounded-3xl shadow-lg"
      />

      
      {projects.length === 0 && (
        <p className="text-center text-gray-500 mt-10">No projects found</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-gray-100 rounded-2xl shadow-md overflow-hidden bg-white"
          >
            <img
              src={project.images?.[0]}
              alt={project.name_en}
              className="w-full h-56 object-cover"
            />

            
            <div className="flex justify-between px-5 py-3 text-xs text-gray-500 border-b border-gray-100">
              <span>🏢 {project.units ?? 0} Units</span>
              <span>🏋️ {project.gyms ?? 0} Gyms</span>
              <span>📐 {Number(project.area ?? 0).toLocaleString()}m</span>
            </div>

            <div className="p-5">
              <h2 className="font-serif text-lg font-semibold text-[#9B2C2C]">
                {project.name_en}
              </h2>

              <p className="text-gray-500 text-xs leading-5 mt-3 line-clamp-3">
                {project.description_en}
              </p>

              <button
                onClick={() => navigate(`/projects/${project.id}`)}
                className="mt-5 w-full border border-[#9B2C2C] text-[#9B2C2C] rounded-md py-2 text-sm hover:bg-[#9B2C2C] hover:text-white transition"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}