'use client'
import { useState, useEffect } from 'react';
import PersistenciaImage from 'next/image';
import ResistenciaImage from 'next/image';
import VencerImage from 'next/image';

export default function Contact() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Define el tamaño de pantalla que desees para considerarlo como móvil
        };

        handleResize(); // Llamada inicial para establecer el estado al cargar la página

        window.addEventListener('resize', handleResize); // Agrega un listener para detectar cambios en el tamaño de la pantalla

        return () => {
            window.removeEventListener('resize', handleResize); // Limpia el listener al desmontar el componente
        };
    }, []);

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-primary font-lato p-0 border-b border-b-white">
            {/* Versión Desktop */}
            {!isMobile && (
                <div className="flex justify-center items-center w-full">
                    <div className="w-1/2 ml-6 p-6 mb-28 pt-2 flex flex-col justify-center items-center relative">
                        <div className="flex flex-start ml-14 h-26 pt-6 w-11/12">
                            <h1 className="text-white text-5xl font-bold font-lato">
                                Envía tu mensaje al <span className="block ml-24">Doctor</span>
                            </h1>
                        </div>
                        <div className="h-96 w-full bg-primary p-3 pl-10 relative">
                            <div className="ml-10 absolute inset-0 flex justify-center items-center">
                                {/* Imagen 1 */}
                                <div className="mt-96 mr-80 w-80 h-80 left-0 relative z-0">
                                    <VencerImage
                                        src="/img/symbols/vencer.png"
                                        width={240}
                                        height={240}
                                        alt="Persistencia icono"
                                    />
                                </div>
                                {/* Imagen 2 */}
                                <div className="ml-56 mt-12 w-96 h-96 absolute top-0 p-0 left-0 z-10 ">
                                    <ResistenciaImage
                                        src="/img/symbols/resistencia.png"
                                        width={387}
                                        height={387}
                                        alt="Resistencia icono"
                                    />
                                </div>
                                {/* Imagen 3 */}
                                <div className="w-80 h-80 ml-12 mt-6 absolute top-0 left-0 z-20">
                                    <PersistenciaImage
                                        src="/img/symbols/persistencia-2.png"
                                        width={200}
                                        height={200}
                                        alt="Vencer icono"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Formulario */}
                    <div className="w-1/2 ml-16 mb-36">
                        <form className="w-11/12 bg-primary p-6 pr-10">
                            <div className="mb-10">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full border text-lg py-2 px-3 text-gray-900 bg-black placeholder-white"
                                    placeholder="Nombre *"
                                />
                            </div>
                            <div className="mb-10">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full border text-lg py-2 px-3 text-gray-900 bg-black placeholder-white"
                                    placeholder="Email *"
                                />
                            </div>
                            <div className="mb-10">
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    className="w-full border text-lg py-2 px-3 text-gray-900 bg-black placeholder-white"
                                    placeholder="Mensaje *"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-buttons hover:bg-orange-600 text-black font-bold py-2 px-16 rounded-[40px] flex justify-center items-center"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Versión Mobile */}
            {isMobile && (
                <div className="sm:hidden flex flex-col justify-start items-center w-full mb-48">
                    <h1 className=" text-wrap text-white text-5xl font-bold font-lato mb-20 flex flex-col justify-center items-center ">
                        Envía tu mensaje <span className="flex justify-center items-center">al</span><span className="flex justify-center items-center">Doctor</span>
                    </h1>
                    <div className="flex justify-around mb-12 w-11/12 relative z-0">
                        {/* Imagen 1 */}
                        <div className="mb-4">
                            <VencerImage
                                src="/img/symbols/vencer.png"
                                width={120}
                                height={120}
                                alt="Persistencia icono"
                            />
                        </div>
                        {/* Imagen 2 */}
                        <div className="mb-4">
                            <ResistenciaImage
                                src="/img/symbols/resistencia.png"
                                width={200}
                                height={200}
                                alt="Resistencia icono"
                            />
                        </div>
                        {/* Imagen 3 */}
                        <div className="mb-4">
                            <PersistenciaImage
                                src="/img/symbols/persistencia-2.png"
                                width={120}
                                height={120}
                                alt="Vencer icono"
                            />
                        </div>
                    </div>
                    {/* Formulario */}
                    <form className="mt-52 bg-transparent absolute p-6 pr-10  z-10 w-11/12 top-24 left-4">
                        <div className="mb-4">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full border text-lg py-2 px-3 text-gray-900 bg-black placeholder-white"
                                placeholder="Nombre *"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full border text-lg py-2 px-3 text-gray-900 bg-black placeholder-white"
                                placeholder="Email *"
                            />
                        </div>
                        <div className="mb-4">
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                className="w-full border text-lg py-2 px-3 text-gray-900 bg-black placeholder-white"
                                placeholder="Mensaje *"
                            ></textarea>
                        </div>
                        <div className="flex justify-center items-center">
                            <button
                                type="submit"
                                className="bg-buttons hover:bg-orange-600 text-black font-bold py-2 px-12 rounded-[40px] flex justify-center items-center text-sm"
                            >
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}




// import PersistenciaImage from 'next/image'
// import ResistenciaImage from 'next/image'
// import VencerImage from 'next/image'


// export default function Contact() {
//     return (
//         <div className="flex justify-center items-center h-screen bg-primary font-lato p-0 border-b border-b-white">
//             {/* Div con la imagen */}
//             <div className="w-1/2 ml-6 p-6 mb-28 pt-2 flex flex-col justify-center items-center relative">
//                 <div className="flex flex-start ml-14 h-26 pt-6 w-11/12">
//                     <h1 className="text-white text-5xl font-bold font-lato">
//                         Envía tu mensaje al <span className="block ml-24">Doctor</span>
//                     </h1>
//                 </div>
//                 <div className="h-96 w-full bg-primary p-3 pl-10 relative">
//                     <div className="ml-10 absolute inset-0 flex justify-center items-center">
//                         {/* Imagen 1 */}
//                         <div className="mt-96 mr-80 w-80 h-80 left-0 relative z-0">
//                             <VencerImage
//                                 src="/img/symbols/vencer.png"
//                                 width={240}
//                                 height={240}
//                                 alt="Persistencia icono"
//                             />
//                         </div>
//                         {/* Imagen 2 */}
//                         <div className="ml-56 mt-12 w-96 h-96 absolute top-0 p-0 left-0 z-10 ">
//                             <ResistenciaImage
//                                 src="/img/symbols/resistencia.png"
//                                 width={387}
//                                 height={387}
//                                 alt="Resistencia icono"
//                             />
//                         </div>
//                         {/* Imagen 3 */}
//                         <div className="w-80 h-80 ml-12 mt-6 absolute top-0 left-0 z-20">
//                             <PersistenciaImage
//                                 src="/img/symbols/persistencia-2.png"
//                                 width={200}
//                                 height={200}
//                                 alt="Vencer icono"
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Formulario */}
//             <div className="w-1/2 ml-16 mb-36">
//                 <form className="w-11/12 bg-primary p-6 pr-10 ">
//                     <div className="mb-10">
//                         <input
//                             type="text"
//                             id="name"
//                             name="name"
//                             className="w-full border text-lg py-2 px-3 text-gray-900 bg-black placeholder-white "
//                             placeholder="Nombre *"
//                         />
//                     </div>

//                     <div className="mb-10">
//                         <input
//                             type="email"
//                             id="email"
//                             name="email"
//                             className="w-full border text-lg py-2 px-3 text-gray-900 bg-black placeholder-white "
//                             placeholder="Email *"
//                         />
//                     </div>

//                     <div className="mb-10">
//                         <textarea
//                             id="message"
//                             name="message"
//                             rows="4"
//                             className="w-full border text-lg py-2 px-3 text-gray-900 bg-black placeholder-white "
//                             placeholder="Mensaje *"
//                         ></textarea>
//                     </div>

//                     <button
//                         type="submit"
//                         className="bg-buttons hover:bg-orange-600 text-black font-bold py-2 px-16 rounded-[40px] flex justify-center items-center"

//                     >
//                         Send
//                     </button>
//                 </form>
//             </div>


//         {/* Versión Mobile */}
//         <div className="sm:hidden flex flex-col justify-center items-center w-full">
//                 {/* Título */}
//                 <div className="text-white text-4xl font-bold font-lato mb-4">
//                     Envía tu mensaje al <span className="block">Doctor</span>
//                 </div>

//                 {/* Contenedor de Imágenes */}
//                 <div className="mb-6">
//                     {/* Imagen 1 */}
//                     <div className="mb-4">
//                         <VencerImage
//                             src="/img/symbols/vencer.png"
//                             width={160}
//                             height={160}
//                             alt="Persistencia icono"
//                         />
//                     </div>
//                     {/* Imagen 2 */}
//                     <div className="mb-4">
//                         <ResistenciaImage
//                             src="/img/symbols/resistencia.png"
//                             width={260}
//                             height={260}
//                             alt="Resistencia icono"
//                         />
//                     </div>
//                     {/* Imagen 3 */}
//                     <div>
//                         <PersistenciaImage
//                             src="/img/symbols/persistencia-2.png"
//                             width={160}
//                             height={160}
//                             alt="Vencer icono"
//                         />
//                     </div>
//                 </div>

//                 {/* Formulario */}
//                 <form className="bg-primary p-6 pr-10 relative z-30 mb-6 w-11/12">
//                     {/* Contenido del formulario */}
//                 </form>

//                 {/* Botón */}
//                 <div className="flex justify-center items-center">
//                     <button
//                         type="submit"
//                         className="bg-buttons hover:bg-orange-600 text-black font-bold py-2 px-12 rounded-[40px] flex justify-center items-center text-sm"
//                     >
//                         Send
//                     </button>
//                 </div>
//             </div>
            
//         </div>
//     );
// }


