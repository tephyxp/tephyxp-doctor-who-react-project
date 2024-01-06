import doctorsData from "../data";


function DoctorCard(props) {
    return (
        <div className="w-[18rem] h-[40rem] relative flex flex-col justify-between items-center bg-primary rounded-lg shadow-md p-4 text-white">
            <img
                className="w-[14rem] h-[22rem] object-cover rounded-md"
                src={props.image}
                alt={props.doctor}
            />
            <div className="text-2xl font-extrabold font-lato mt-2">
                {props.doctor}
            </div>
            <div className="text-xl font-light italic font-montserrat">
                {props.actor}
            </div>
            <div className="text-xl font-thin font-montserrat">
                {props.screenTime}
            </div>
            <div className="mt-3 w-full flex justify-center">
                <div className="w-[9rem] py-2 bg-orange-300 rounded-[40px] text-center text-black text-xl font-bold font-lato">
                    Ver más
                </div>
            </div>
        </div>
    );
}

export default function Doctors() {
    return (
      <div className="flex flex-col bg-primary">
        <div className="md:pl-5 lg:pl-16">
          <h1 className="bg-primary text-white ml-6 font-lato">Doctores</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-5 md:p-8 lg:p-16">
          {doctorsData.map((doctor, index) => (
            <DoctorCard
              key={index}
              image={doctor.image}
              doctor={doctor.doctor}
              actor={doctor.actor}
              screenTime={doctor.screen_time}
            />
          ))}
        </div>
      </div>
    );
  }
  







// import doctorsData from "../data";

// function DoctorCard(props) {
//     return (
//         <div className="w-80 h-[707px] relative px-20 ">
//             <div className="w-[317px] h-[748px] left-0 top-0 absolute flex-col justify-center items- 
//         center inline-flex">
//                 <div className="w-[317px] h-[748px] relative flex-col justify-start items-start flex">
//                     <img
//                         className="w-[314px] h-[459.17px]"
//                         src={props.image}
//                         alt={props.doctor}
//                     />
//                     <div className="w-[310px] h-[45px] text-white text-4xl font-bold font-lato">
//                         {props.doctor}
//                     </div>
//                     <div className="w-[314px] h-[52px] text-white text-[32px] font-normal font-montserrat">
//                         {props.actor}
//                     </div>
//                     <div className="w-[263px] h-[58.19px] relative">
//                         <div className="w-full h-full absolute left-0 top-0 bg-orange-300 rounded-[40px] flex justify-center items-center">
//                             <div className="text-black text-[32px] font-bold font-lato">
//                                 Ver más
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="w-[317px] left-[3px] top-[671px] absolute text-white text-[32px] font-normal font-montserrat">
//                 {props.screenTime}
//             </div>
//         </div>
//     );
// }

// export default function Doctors() {
//     return (
//         <div className="grid grid-cols-4 gap-6 p-10 bg-gray-900">
//             {doctorsData.map((doctor, index) => (
//                 <DoctorCard
//                     key={index}
//                     image={doctor.image}
//                     doctor={doctor.doctor}
//                     actor={doctor.actor}
//                     screenTime={doctor.screen_time}
//                 />
//             ))}
//         </div>
//     );
// }