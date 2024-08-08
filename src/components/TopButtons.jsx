// import React from 'react'

const TopButtons = ({setQuery}) => {
  const cities = [
    {
      id: 1,
      name: "London",
    },
    {
      id: 2,
      name: "Sydney",
    },
    {
      id: 3,
      name: "Tokyo",
    },
    {
      id: 4,
      name: "Paris",
    },
    {
      id: 5,
      name: "Toronto",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-around gap-x-7 py-5 ">
        {cities.map((city) => {
          return (
            <button onClick={()=>setQuery({q:city.name})} className="text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in" key={city.id} >
              {city.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TopButtons;
