'use client'
import { useState, useEffect } from 'react';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';


export default function Header({ onContactClick, onSearch }) {
  const [inputValue, setInputValue] = useState('');

  const [isDesktop, setIsDesktop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); 

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkScreenWidth();

    window.addEventListener('resize', checkScreenWidth);
    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(inputValue); // Llama a la función onSearch con el valor del input
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className={`${isDesktop ? 'hidden md:block' : 'block md:hidden'} bg-primary text-white flex items-center justify-between px-4 md:px-15 py-4 md:h-40 relative z-10`}>
      {isDesktop ? (
        /* Contenido para versión de escritorio */
        <div className="w-full h-40 bg-transparent text-white flex items-center justify-between px-20 relative z-10">
          <ul className="flex items-center space-x-4 font-lato mr-12 pb-6">
            <Link href="/meet">
              <span className="text-lg font-semibold cursor-pointer whitespace-nowrap">Conoce a</span>
            </Link>
            <Link href="/doctors">
              <span className="text-lg font-semibold cursor-pointer">Doctores</span>
            </Link>
            <Link href="/contactUs">
              <span className="text-lg font-semibold cursor-pointer" onClick={onContactClick}>Contacto</span>
            </Link>
          </ul>
          <div className="flex items-center justify-around w-full space-x-3 ml-10">
            <Link className="h-45" href="/carousel">
              <img
                className="w-[190.92px] h-[195.62px] absolute -bottom-8 mr-4"
                src="/img/logos/logo.png"
                alt="Logo"
              />
            </Link>
            <div className="text-white text-xl font-semibold flex items-center pb-6">
              <form >
              <button className="font-lato" type="submit" onSubmit={handleSubmit} >
                <FontAwesomeIcon icon={faMagnifyingGlass} className="w-6 h-6 mr-2" />
              </button>
              <input
                type="text"
                placeholder="Buscar"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="px-2 py-1 bg-gray-800 text-white rounded-md focus:outline-none"
              />
              </form>
            </div>
          </div>
          <div className="flex items-center space-x-4 pb-6">
            <FontAwesomeIcon icon={faFacebook} className="w-6 h-6 rounded-full" />
            <FontAwesomeIcon icon={faXTwitter} className="w-6 h-6 rounded-full" />
            <FontAwesomeIcon icon={faInstagram} className="w-6 h-6 rounded-full" />
            <FontAwesomeIcon icon={faTiktok} className="w-6 h-6 rounded-full" />
          </div>
        </div>
      ) : (

        /* Contenido para versión móvil */
        <div className="w-full bg-primary text-white">
          {/* Encabezado */}
          <div className="flex items-center justify-between px-4 md:px-20 py-4 md:h-40 relative z-10">
            <div className="flex items-center">
              <Link href="/">
                <div className="h-12 md:h-16">
                  <img
                    className="w-auto h-full"
                    src="/img/logos/logo.png"
                    alt="Logo"
                  />
                </div>
              </Link>
            </div>
            <div className="flex items-center space-x-3 md:hidden">
              <button onClick={toggleMobileMenu}>
                <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Menú desplegable */}
          {mobileMenuOpen && (
            <div className="w-[430px] h-[530px] bg-slate-950 fixed top-[70px] left-0 right-0 mx-auto z-20 ">
              <ul className="text-white text-2xl font-semibold mt-4 ml-8 flex flex-col justify-center items-center">
                <li className="my-4">
                  <Link href="/meet">
                    <span className="cursor-pointer">Conoce a</span>
                  </Link>
                </li>
                <li className="my-4">
                  <Link href="/doctors">
                    <span className="cursor-pointer">Doctores</span>
                  </Link>
                </li>
                <li className="my-4">
                  <Link href="/contactUs">
                    <span className="cursor-pointer" onClick={onContactClick}>Contacto</span>
                  </Link>
                </li>
              </ul>
              <div className="flex items-center flex-col absolute bottom-0 left-0 right-0 mb-8">
                <div className="flex items-center">
                  <button type="submit" onClick={handleSubmit}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="w-6 h-6 mr-2 text-white" />
                  </button>
                  <input
                    type="text"
                    placeholder="Buscar"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="px-2 py-1 bg-gray-800 text-white rounded-md focus:outline-none"
                  />
                </div>
                <div className="flex items-center space-x-4 mt-4">
                  <FontAwesomeIcon icon={faFacebook} className="w-4 h-4 text-white rounded-full" />
                  <FontAwesomeIcon icon={faXTwitter} className="w-4 h-4 text-white rounded-full" />
                  <FontAwesomeIcon icon={faInstagram} className="w-4 h-4 text-white rounded-full" />
                  <FontAwesomeIcon icon={faTiktok} className="w-4 h-4 text-white rounded-full" />
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}


// export default function Header({ onContactClick, setSearchTerm }) {
//   const [inputValue, setInputValue] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const handleSearch = () => {
//     // Lógica de búsqueda aquí
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     handleSearch();
//     setSearchTerm(inputValue);
//   };

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen);
//   };

//   return (
//     <div className="w-full bg-primary text-white flex items-center justify-between px-4 md:px-20 py-4 md:h-40 relative z-10">
//       <div className="flex items-center">
//         <Link href="/">
//           <div className="h-12 md:h-16">
//             <img
//               className="w-auto h-full"
//               src="/img/logos/logo.png"
//               alt="Logo"
//             />
//           </div>
//         </Link>
//       </div>
//       <div className="flex items-center space-x-3 md:hidden">
//         <button onClick={toggleMobileMenu}>
//           <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
//         </button>
//       </div>
//       <div className={`md:flex flex-col md:flex-row md:items-center md:space-x-4 md:ml-auto md:w-auto ${mobileMenuOpen ? 'block' : 'hidden'}`}>
//         {/* Resto de los elementos del menú */}
//         <ul className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 font-lato">
//           <Link href="/meet">
//             <span className="text-lg font-semibold cursor-pointer whitespace-nowrap">Conoce a</span>
//           </Link>
//           <Link href="/doctors">
//             <span className="text-lg font-semibold cursor-pointer">Doctores</span>
//           </Link>
//           <Link href="/contactUs">
//             <span className="text-lg font-semibold cursor-pointer" onClick={onContactClick}>Contacto</span>
//           </Link>
//         </ul>
//         <div className="flex items-center md:text-xl font-semibold md:ml-auto">
//           <div className="flex items-center">
//             <button type="submit" onClick={handleSubmit}>
//               <FontAwesomeIcon icon={faMagnifyingGlass} className="w-6 h-6 mr-2" />
//             </button>
//             <input
//               type="text"
//               placeholder="Buscar"
//               value={inputValue}
//               onChange={(e) => setInputValue(e.target.value)}
//               className="px-2 py-1 bg-gray-800 text-white rounded-md focus:outline-none"
//             />
//           </div>
//           <div className="flex items-center space-x-4 ml-4">
//             <FontAwesomeIcon icon={faFacebook} className="w-6 h-6 rounded-full" />
//             <FontAwesomeIcon icon={faXTwitter} className="w-6 h-6 rounded-full" />
//             <FontAwesomeIcon icon={faInstagram} className="w-6 h-6 rounded-full" />
//             <FontAwesomeIcon icon={faTiktok} className="w-6 h-6 rounded-full" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


//versión desktop

// 'use client'
// import { useState } from 'react';
// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faXTwitter, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
// import SearchComponent from '@/components/SearchComponent';
// import Link from 'next/link';

// export default function Header({ onContactClick,setSearchTerm }) {
//   const [inputValue, setInputValue] = useState('');
//   const [searchResults, setSearchResults] = useState([]);

//   const handleSearch = () => {
//     const results = doctorsData.filter(
//       (doctor) => doctor.doctor.toLowerCase().includes(inputValue.toLowerCase())
//     );
//     setSearchResults(results);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     handleSearch();
//     setSearchTerm(inputValue);
//   };
//   return (
//     <div className="w-full h-40 bg-primary text-white flex items-center justify-between px-20 relative z-10">
//       <ul className="flex items-center space-x-4 font-lato mr-12">
//         <Link href="/meet">
//           <span className="text-lg font-semibold cursor-pointer whitespace-nowrap">Conoce a</span>
//         </Link>
//         <Link href="/doctors">
//           <span className="text-lg font-semibold cursor-pointer">Doctores</span>
//         </Link>
//         <Link href="/contactUs">
//           <span className="text-lg font-semibold cursor-pointer" onClick={onContactClick}>Contacto</span>
//         </Link>
//       </ul>
//       <div className="flex items-center justify-around w-full space-x-3">
//         <Link className="h-45" href="/carousel">
//           <img
//             className="w-[190.92px] h-[195.62px] absolute -bottom-8"
//             src="/img/logos/logo.png"
//             alt="Logo"
//           />
//         </Link>
//         <div className="text-white text-xl font-semibold flex items-center">
//         <button className="font-lato" type="submit" onClick={handleSearch}>
//           <FontAwesomeIcon icon={faMagnifyingGlass} className="w-6 h-6 mr-2" />
//         </button>
//           <input
//               type="text"
//               placeholder="Buscar"
//               value={inputValue}
//               onChange={(e) => setInputValue(e.target.value)}
//               className="px-2 py-1 bg-gray-800 text-white rounded-md focus:outline-none"
//             />
//         </div>
//       </div>
//       <div className="flex items-center space-x-4">
//         <FontAwesomeIcon icon={faFacebook} className="w-6 h-6 rounded-full" />
//         <FontAwesomeIcon icon={faXTwitter} className="w-6 h-6 rounded-full" />
//         <FontAwesomeIcon icon={faInstagram} className="w-6 h-6 rounded-full" />
//         <FontAwesomeIcon icon={faTiktok} className="w-6 h-6 rounded-full" />
//       </div>
//     </div>
//   );
// }



