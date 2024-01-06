
'use client'
import { useState } from 'react';
import React from 'react';
import Image from 'next/image';
import SecondImage from 'next/image';

export default function Picture(){
    return(
        <main>
            <Image
                src = {'/img/carrusel/carrusel-1.webp'}
                width={1920}
                height={886}
                alt='Segunda foto carrusel'
            />
            <SecondImage
                src = {'/img/carrusel/carrusel-2.jpg'}
                width={1920}
                height={886}
                alt='Segunda foto carrusel'            
            />
        </main>
    )
}

