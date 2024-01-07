
'use client'
import { useState } from 'react';
import Image from 'next/image';
import { useMediaQuery } from '@react-hook/media-query';

const images = [
  '/img/carrusel/carrusel-1.jpeg',
  '/img/carrusel/carrusel-2.jpg',
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isMobile = useMediaQuery('(max-width: 768px)'); // Establece el límite para el tamaño de pantalla móvil

  const changeImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <main className="flex justify-center items-center h-screen">
      {isMobile ? ( 
        <div className="relative w-full h-full">
          {images.map((image, index) => (
            <div key={index} className={`absolute top-0 left-0 w-full h-full ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}>
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg transition-opacity duration-500"
              />
              {index === 0 && (
                <div className="absolute left-0 top-[293px] w-[255px] h-[171px]">
                  <div className="absolute left-0 top-0 w-[255px] h-[74px] bg-orange-300 rounded-[40px]" />
                  <div className="absolute left-[47px] top-[14px] w-[162px] h-[42px] bg-buttons text-black text-[32px] font-bold font-lato text-center">Ver ahora</div>
                </div>
              )}
              {index === 0 && (
                <div className="absolute left-[12px] top-0 text-white text-5xl font-extrabold font-lato">Allons-y!</div>
              )}
            </div>
          ))}
          <div className="absolute bottom-4 right-4 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => changeImage(index)}
                className={`w-6 h-6 bg-transparent rounded-full focus:outline-none border-4 border-white transition-all duration-300 ${index === currentImageIndex ? 'opacity-75' : 'opacity-50'}`}
                // Pseudoclase hover
                style={{
                  ':hover': {
                    borderColor: '#FFFFFF',
                  }
                }}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="relative w-full h-full">
          {images.map((image, index) => (
            <div key={index} className={`absolute top-0 left-0 w-full h-full ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}>
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg transition-opacity duration-500"
              />
              {index === 0 && (
                <div className="absolute top-1/2 ml-52 transform -translate-x-1/2 -translate-y-1/2 text-center font-bold">
                  <p className="font-lato text-7xl text-white">Allons-y!</p>
                  <button className="bg-buttons hover:bg-orange-600 text-black font-bold py-2 px-16 rounded-[40px] flex justify-center items-center mt-12">
                    Ver ahora
                  </button>
                </div>
              )}
            </div>
          ))}
          <div className="absolute bottom-4 right-4 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => changeImage(index)}
                className={`w-6 h-6 bg-transparent rounded-full focus:outline-none border-4 border-white transition-all duration-300 ${index === currentImageIndex ? 'opacity-75' : 'opacity-50'}`}
                // Pseudoclase hover
                style={{
                  ':hover': {
                    backgroundColor: '#f8c67d',
                    borderColor: '#FFFFFF',
                  }
                }}
              />
            ))}
          </div>
        </div>
      )}
    </main>
  );
}

// import React from 'react';
// import Picture from '@/components/Carousel';

// // import Picture from '@/components/Carousel';
// function Page() {
//   return (
//     <div className="page-container flex justify-center items-center absolute z-0 bg-primary">

//       <div>
//       <Picture  />
//         {/* <Picture /> */}
//       </div>
//     </div>
//   );
// }

// export default Page;

