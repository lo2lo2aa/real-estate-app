import React from "react";
import { useNavigate } from "react-router-dom";

export default function UnitCard({ unit }) {
  const navigate = useNavigate();

  return (
    <div className="border border-gray-100 rounded-2xl shadow hover:shadow-lg transition overflow-hidden bg-white">
    
      <div
        className="relative cursor-pointer"
        onClick={() => navigate(`/units/${unit.id}`)}
      >
        <img
          src={unit.images?.[0]}
          alt={unit.title_en}
          className="w-full h-56 object-cover"
        />
        <span className="absolute top-3 right-3 bg-green-500 text-white text-xs px-3 py-1 rounded">
          {unit.status || "Available"}
        </span>
      </div>

     
      <div className="flex justify-between px-5 py-3 text-sm text-gray-500 border-b border-gray-100">
        <span>🛏 {unit.bedrooms} Bedrooms</span>
        <span>🛁 {unit.bathrooms} Bathrooms</span>
        <span>📐 {unit.area}m</span>
      </div>

    
      <div className="p-5">
        <div className="flex justify-between gap-2">
          <h2 className="text-lg font-semibold text-[#9B2C2C]">
            {unit.title_en}
          </h2>
          <p className="text-gray-700 whitespace-nowrap">
            {Number(unit.price).toLocaleString()}EGP
          </p>
        </div>

        <p className="text-gray-500 text-sm mt-3 line-clamp-3">
          {unit.description_en}
        </p>

        <button
          onClick={() => navigate(`/units/${unit.id}`)}
          className="mt-5 w-full border border-[#9B2C2C] text-[#9B2C2C] rounded-md py-2 text-sm hover:bg-[#9B2C2C] hover:text-white transition"
        >
          View Details
        </button>
      </div>
    </div>
  );
}