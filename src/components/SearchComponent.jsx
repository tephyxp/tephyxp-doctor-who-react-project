'use client' 
import { useState } from 'react';
import doctorsData from "../app/data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function DoctorCard(props) {
  return (
    <article className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 border-b border-gray-300 pb-6 mb-6 max-w-xl mx-auto bg-transparent">
      <div className="md:w-1/2 bg-transparent">
        <h2 className="text-2xl md:text-4xl font-bold text-white">Conoce a... {props.doctor}</h2>
        <p className="text-white text-base">{props.actor}</p>
        <p className="text-white text-sm">{props.screenTime}</p>
        <button className="bg-orange-300 px-4 py-2 rounded-md text-black font-bold mt-4">Ver más</button>
      </div>
      <aside className="md:w-1/2 bg-transparent">
        <img className="w-full h-auto" src={props.image} alt={props.doctor} />
      </aside>
    </article>
  );
}

export default function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const results = doctorsData.filter((doctor) =>
      doctor.doctor.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="text-white text-xl font-semibold flex items-center bg-gray-900 p-4">
        <input
          type="text"
          placeholder="Buscar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-2 py-1 bg-gray-800 text-white rounded-md focus:outline-none"
        />
        <button type="submit" onClick={handleSearch}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className="w-6 h-6 mr-2" />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto bg-transparent p-10">
        <div className="grid grid-cols-1 gap-6">
          {searchResults.map((doctor, index) => (
            <DoctorCard
              key={index}
              image={doctor.image}
              doctor={doctor.doctor}
              actor={doctor.actor}
              screenTime={doctor.screen_time}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

