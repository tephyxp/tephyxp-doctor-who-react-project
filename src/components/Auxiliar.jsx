import React from 'react';
import Image from 'next/image'

export default function Picture(){
    return(
        <main>
            <Image
                src = {'/img/carrusel/carrusel-2.jpg'}
                width={500}
                height={500}
                alt='Segunda foto carrusel'
            />
        </main>
    )
}