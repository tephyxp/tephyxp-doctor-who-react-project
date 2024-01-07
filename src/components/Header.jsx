'use client'
import { useState, useEffect } from 'react';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import doctorsData from '@/app/data';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


export default function Header({ onContactClick }) {
  const [inputValue, setInputValue] = useState('');

  const [isDesktop, setIsDesktop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); 

  //logica para el buscador
  const router = useRouter()
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const searchResults = doctorsData.filter(
      (doctor) =>
        doctor.doctor.toLowerCase().includes(inputValue.toLowerCase()) ||
        doctor.actor.toLowerCase().includes(inputValue.toLowerCase())||
        doctor.screen_time === parseInt(inputValue)
    );
  
    localStorage.setItem('searchResults', JSON.stringify(searchResults));
    router.push('/meet');
    }

  //Logica responsive

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
            <Link className="h-45" href="/">
              <img
                className="w-[190.92px] h-[195.62px] absolute -bottom-8 mr-4"
                src="/img/logos/logo.png"
                alt="Logo"
              />
            </Link>
            <div className="text-white text-xl font-semibold flex items-center pb-6">
              <form onSubmit={handleSubmit}>
              <button className="font-lato" type="submit" >
                <FontAwesomeIcon icon={faMagnifyingGlass} className="w-5 h-5 mr-2" />
              </button>
              <input
                type="text"
                placeholder="Buscar"
                value={inputValue}
    onChange={(e) => setInputValue(e.target.value)}
                className="px-2 py-1 bg-primary text-white rounded-md focus:outline-none"
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
          <div className="flex items-center justify-between px-4 md:px-20 py-4 md:h-40 relative z-10">
            <div className="flex items-center">
              <Link href="/">
                <div className="h-16 md:h-16">
                  <img
                    className="w-auto h-full absolute -bottom-4 mb-2"
                    src="/img/logos/logo.png"
                    alt="Logo"
                  />
                </div>
              </Link>
            </div>
            <div className="flex items-center space-x-5 md:hidden mr-3 mt-4">
              <button onClick={toggleMobileMenu}>
                <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} className="w-8 h-8" />
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






