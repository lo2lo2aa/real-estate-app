import React, { useEffect, useState } from "react";
import Hero from "../../Components/Hero";
import UnitCard from "../../Components/UnitCard";
import unitsHero from "../../assets/images/units.png";
import api from "../../helpers/api";

export default function Units() {
  const [loading, setLoading] = useState(true);
  const [units, setUnits] = useState([]);

  
  const [search, setSearch] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [price, setPrice] = useState("");

  
  const [filters, setFilters] = useState({ search: "", bedrooms: "", price: "" });

  const getUnits = async () => {
    try {
      const response = await api.get("/unit");
      setUnits(response.data);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getUnits();
  }, []);

  const handleSearch = () => {
    setFilters({ search, bedrooms, price });
  };

  
  const filteredUnits = units.filter((unit) => {
    const text = filters.search.trim().toLowerCase();

    const matchesSearch =
      unit.title_en.toLowerCase().includes(text) ||
      unit.title_ar.includes(text) ||
      unit.description_en.toLowerCase().includes(text);

    const matchesBedrooms =
      filters.bedrooms === "" || unit.bedrooms == filters.bedrooms;

    const matchesPrice =
      filters.price === "" || unit.price <= Number(filters.price);

    return matchesSearch && matchesBedrooms && matchesPrice;
  });

  return (
    <>
      <Hero
        bg={unitsHero}
        title="Discover Our Premium Units"
        desc="Explore a wide range of modern, spacious, and luxurious units designed to fit your lifestyle. Each unit combines comfort, elegance, and functionality."
        btn={false}
        icons={true}
      />

      
      <div className="px-6 md:px-20 mt-10">
        <div className="flex flex-col md:flex-row border border-[#B5545A] rounded-lg bg-white overflow-hidden">
          <input
            type="text"
            placeholder="Search Property"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 p-3 outline-none"
          />

          <select
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
            className="p-3 outline-none bg-white text-gray-500 border-t md:border-t-0 md:border-l border-[#B5545A]"
          >
            <option value="">Bedrooms</option>
            <option value="1">1 Bedroom</option>
            <option value="2">2 Bedrooms</option>
            <option value="3">3 Bedrooms</option>
            <option value="4">4 Bedrooms</option>
            <option value="5">5 Bedrooms</option>
          </select>

          <input
            type="number"
            min="0"
            placeholder="Max Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="p-3 outline-none border-t md:border-t-0 md:border-l border-[#B5545A]"
          />
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={handleSearch}
            className="w-full max-w-md bg-[#6B2327] hover:bg-[#561b1f] text-white rounded-md py-3 transition"
          >
            Search
          </button>
        </div>
      </div>

      {loading && (
        <h1 className="text-center text-red-500 mt-10">Loading...</h1>
      )}

      {!loading && filteredUnits.length === 0 && (
        <p className="text-center text-gray-500 mt-10">No units found</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 md:px-20">
        {filteredUnits.map((unit) => (
          <UnitCard key={unit.id} unit={unit} />
        ))}
      </div>
    </>
  );
}