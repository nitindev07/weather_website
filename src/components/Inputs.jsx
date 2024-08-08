// import React from 'react'

import { useState } from "react";
import { BiCurrentLocation, BiSearch } from "react-icons/bi";

const Inputs = ({ setQuery, setUnits }) => {
  const [city, setCity] = useState("");
  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };
  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setQuery({ lat: latitude, lon: longitude });
      });
    }
  };

  return (
    <div className="flex md:flex-row flex-col gap-y-5 items-center w-full pt-5 md:pt-0 pb-5">
      <div className="flex md:w-3/4 w-full px-4 md:px-0 items-center justify-center gap-3">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          type="text"
          className="w-full p-2 focus:outline-none shadow-xl text-gray-500 text-xl placeholder:lowercase"
          placeholder="Search By city.."
        />
        <BiSearch
          onClick={handleSearchClick}
          size={30}
          className="cursor-pointer hover:scale-125 transition-all ease-out"
        />
        <BiCurrentLocation
          onClick={handleLocation}
          size={30}
          className="cursor-pointer hover:scale-125 transition-all ease-out"
        />
      </div>
      <div className="flex w-1/4 items-center justify-center gap-2">
        <button className="text-2xl font-medium hover:scale-125 transition ease-out cursor-pointer "
        onClick={()=>setUnits("metric")}>
          °C
        </button>
        <p className="text-2xl font-medium ">|</p>
        <button className="text-2xl font-medium hover:scale-125 transition ease-out cursor-pointer "
        onClick={()=>setUnits("imperial")}>
          °F
        </button>
      </div>
    </div>
  );
};

export default Inputs;
