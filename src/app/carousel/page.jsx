
'use client'
import { useState } from 'react';
import Image from 'next/image';

const images = [
    '/img/carrusel/carrusel-1.webp',
    '/img/carrusel/carrusel-2.jpg',
  ];
  
  export default function Home() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    const changeImage = (index) => {
      setCurrentImageIndex(index);
    };
  
    return (
      <main className="flex justify-center items-center h-screen">
        <div className="relative w-full h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg transition-opacity duration-500"
              />
            </div>
          ))}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => changeImage(index)}
                className={`w-4 h-4 bg-gray-500 rounded-full focus:outline-none ${
                  index === currentImageIndex ? 'opacity-75' : 'opacity-50'
                }`}
              />
            ))}
          </div>
        </div>
      </main>
    );
  }