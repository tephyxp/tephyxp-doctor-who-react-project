

// import React, { useRef } from 'react';

// export default function ContactUsView() {
//     const formRef = useRef();

//     const sendEmail = (e) => {
//         e.preventDefault();
//         // Agrega tu lógica para enviar el correo aquí
//     };

//     return (
//         <div className="w-[555px] h-[679px] flex ">
//             <section>
//                 <div className="w-[742px] h-[236px] text-center text-white text-[64px] font-bold font-['Lato']">Envia tu 
//                 mensaje al <br />Doctor
//                 </div>
//                 <div className="w-[824px] h-[739.79px] relative">
//                     <div className="w-[444.60px] h-[444.60px] p-[22.23px] left-[293.11px] top-[205.77px] absolute 
//                     origin-top-left rotate-[-12.60deg] justify-center items-center inline-flex">
//                         <div className="w-[400.14px] h-[400.14px] relative">
//                         </div>
//                     </div>

//                     <div className="w-[410.63px] h-[410.63px] pl-[108.63px] pr-[22.70px] pt-[112.98px] pb-[18.36px] 
//                     left-0 top-0 absolute justify-end items-center inline-flex">
//                         <div className="w-[279.29px] h-[279.29px] relative">
//                         </div>
//                     </div>
//                     <div className="w-[366.09px] h-[366.09px] pr-[36.61px] pt-[18.47px] pb-[18.14px] left-[82.56px] top- 
//                     [373.70px] absolute justify-start items-center inline-flex">
//                         <div className="w-[329.48px] h-[329.48px] relative">
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <form onSubmit={sendEmail} ref={formRef}>
//                 <div className="w-[575px] h-[66px] left-0 top-0 absolute">
//                     <input
//                         className="w-[575px] h-[66px] left-0 top-0 absolute bg-black border-2 border-white text-white 
//                         text-[32px] font-bold font-Lato pl-4"
//                         type="text"
//                         name="user_name"
//                         placeholder="Nombre *"
//                     />
//                 </div>
//                 <div className="w-[575px] h-[66px] left-0 top-[140px] absolute">
//                     <input
//                         className="w-[575px] h-[66px] left-0 top-0 absolute bg-black border-2 border-white text-white 
//                         text-[32px] font-bold font-Lato pl-4"
//                         type="email"
//                         name="user_email"
//                         placeholder="Email *"
//                     />
//                 </div>
//                 <div className="w-[575px] h-[277px] left-0 top-[280px] absolute">
//                     <textarea
//                         className="w-[575px] h-[277px] left-0 top-0 absolute bg-black border-2 border-white text-white 
//                         text-[32px] font-bold font-Lato pl-4 pt-4"
//                         name="message"
//                         placeholder="Mensaje *">
//                     </textarea>
//                 </div>
//                 <div className="w-[290px] h-[62px] left-0 top-[617px] absolute">
//                     <button
//                         className="w-[290px] h-[62px] left-0 top-0 absolute bg-orange-300 rounded-[40px] text-center 
//                         text-black text-[32px] font-bold font-Lato"
//                         type="submit">                   
//                         Send
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// }
