"use client";

import doctorsData from "../data";
import Link from 'next/link';

const SearchResults = () => {
  const storedResults = JSON.parse(localStorage.getItem("searchResults"));

  // Verificar si storedResults es null o undefined

  if (!storedResults) {
    return (
      <div>
        <h1>No hay resultados de búsqueda</h1>
      </div>
    );
  } else if (storedResults.length > 1) {
    return (
      <div
        className="bg-cover bg-center min-h-screen flex justify-center items-center bg-fixed border-b border-b-white"
        style={{
          backgroundImage: `url('/img/backgrounds/background-meet.png')`,
        }}
      >
        <div className="grid grid-cols-4 gap-6 p-10">
          {storedResults.map((result, index) => (
            <div key={index} className="col-span-1">
              <div className="relative px-5 py-10">
                <div className="relative flex items-center justify-center mb-4">
                  <img
                    className="w-[60.625rem] h-[28.694rem] rounded-md mb-3"
                    src={result.image}
                    alt={result.doctor}
                  />
                </div>
                <div className="text-white font-lato text-2xl font-bold mb-3">
                  {result.doctor}
                </div>
                <div className="text-white text-lg mb-3">{result.actor}</div>
                <div className="text-white text-lg mb-3">
                  {result.screen_time}
                </div>
                <button className="mt-2 bg-buttons w-52 px-4 py-2 rounded-[40px] text-black font-bold">
                  <Link href="https://www.doctorwho.tv/" target="_blank">Ver más</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className="bg-cover bg-center h-screen flex justify-center items-center bg-fixed border-b border-b-white"
      style={{ backgroundImage: `url('/img/backgrounds/background-meet.png')` }}
    >
      {storedResults.map((result) => (
        <div
          key={result.id}
          className="flex items-center justify-center w-full h-full"
        >
          <div className=" w-1/2 flex flex-col justify-center items-center space-y-16 text-center text-white mx-4 my-10">
            <h2 className="text-5xl font-bold font-lato">
              Conoce a .. {result.doctor}
            </h2>
            <p className="break-words font-lato text-xl py-5 ml-16">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim
              eu turpis egestas pretium aenean pharetra. Pretium fusce id velit
              ut. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper
              malesuada. Tempor id eu nisl nunc mi. In fermentum et sollicitudin
              ac orci phasellus egestas tellus. Non diam phasellus vestibulum
              lorem sed risus ultricies tristique nulla. Felis eget nunc
              lobortis mattis aliquam faucibus purus.
            </p>
            <button className="w-[16rem] py-2 bg-orange-300 rounded-[40px] text-center text-black text-xl font-bold font-lato">
            <Link href="https://www.doctorwho.tv/" target="_blank">Ver más</Link>
            </button>
          </div>
          <div className="w-1/2 flex items-center justify-center px-16 py-12 mb-20">
            <img
              className="w-11/12 h-auto"
              src={result.image}
              alt={result.doctor}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
