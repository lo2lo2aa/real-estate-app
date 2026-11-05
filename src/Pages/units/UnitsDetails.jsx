import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../helpers/api";


const PHONE = "201000000000";

export default function UnitDetails() {
  const { id } = useParams();
  const [unit, setUnit] = useState(null);
  const [loading, setLoading] = useState(true);

  const getUnitDetails = async () => {
    try {
      const response = await api.get(`/unit/${id}`);
      setUnit(response.data);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching unit:", error);
      setLoading(false);
    } 
  };

  useEffect(() => {
    getUnitDetails();
  }, [id]);

  if (loading) {
    return <h1 className="text-center text-red-500 mt-10">Loading...</h1>;
  }

  if (!unit) {
    return <h1 className="text-center mt-10">Unit Not Found</h1>;
  }

  const images = unit.images || [];

  return (
    <div className="px-6 md:px-20 py-10">
      
      <img
        src={images[0]}
        alt={unit.title_en}
        className="w-full h-[420px] object-cover rounded-2xl shadow"
      />

      
      <div className="flex justify-between items-start gap-4 mt-10">
        <h1 className="text-2xl font-bold text-[#9B2C2C]">{unit.title_en}</h1>

        <p className="text-xl text-gray-700 whitespace-nowrap">
          {Number(unit.price).toLocaleString()} EGP
        </p>
      </div>

      <div className="mt-10">
        <h2 className="font-semibold mb-4">Overview</h2>
        <p className="text-gray-500 leading-7">{unit.description_en}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
          <a
            href={`https://wa.me/${PHONE}`}
            target="_blank"
            rel="noreferrer"
            className="text-center bg-green-700 hover:bg-green-800 text-white rounded-md py-3 text-sm transition"
          >
            Contact via WhatsApp
          </a>

          <a
            href={`tel:+${PHONE}`}
            className="text-center border border-[#9B2C2C] text-[#9B2C2C] hover:bg-[#9B2C2C] hover:text-white rounded-md py-3 text-sm transition"
          >
            Call
          </a>
        </div>
      </div>
    </div>
  );
}