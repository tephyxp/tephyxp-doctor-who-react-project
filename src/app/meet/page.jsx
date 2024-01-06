// meet.jsx
'use client'
import { useState } from 'react';
import doctorsData from '../data'; // Importa tus datos de doctores
import DoctorCard from '@/components/SearchComponent'; // Importa tu componente DoctorCard

export default function MeetPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Realiza la lógica de búsqueda aquí
    const results = doctorsData.filter((doctor) =>
      doctor.doctor.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <div>
      <div className="text-white text-xl font-semibold flex items-center bg-gray-900 p-4">
        <input
          type="text"
          placeholder="Buscar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-2 py-1 bg-gray-800 text-white rounded-md focus:outline-none"
        />
        <button type="submit" onClick={handleSubmit}>
          {/* Agrega el ícono de búsqueda aquí si lo necesitas */}
        </button>
      </div>
      <div className="flex flex-col items-center mt-4">
        {/* Renderiza los resultados */}
        {searchResults.length > 0 ? (
          searchResults.map((doctor, index) => (
            <DoctorCard
              key={index}
              image={doctor.image}
              doctor={doctor.doctor}
              actor={doctor.actor}
              screenTime={doctor.screen_time}
            />
          ))
        ) : (
          <p>No se encontraron resultados</p>
        )}
      </div>
    </div>
  );
}



// import SearchComponent from '@/components/SearchComponent'; // Ruta correcta a tu componente SearchComponent

// export default function Meet() {
//   return (
//     <div className="flex justify-center items-center h-screen bg-cover" style={{ backgroundImage: "url('/img/backgrounds/background-meet.png')" }}>
//       <div className="container mx-auto">
//         <SearchComponent />
//       </div>
//     </div>
//   );
// }

