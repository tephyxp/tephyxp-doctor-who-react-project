import doctorsData from "../app/data";

function DoctorCard(props) {
  return (
    <div className="w-80 h-[707px] relative px-20">
      <div className="w-[317px] h-[748px] left-0 top-0 absolute flex-col justify-center items- 
        center inline-flex">
        <div className="w-[317px] h-[748px] relative flex-col justify-start items-start flex">
          <img
            className="w-[314px] h-[459.17px]"
            src={props.image}
            alt={props.doctor}
          />
          <div className="w-[310px] h-[45px] text-white text-4xl font-bold font-lato">
            {props.doctor}
          </div>
          <div className="w-[314px] h-[52px] text-white text-[32px] font-normal font-montserrat">
            {props.actor}
          </div>
          <div className="w-[263px] h-[58.19px] relative">
            <div className="w-full h-full absolute left-0 top-0 bg-orange-300 rounded-[40px] flex justify-center items-center">
              <div className="text-black text-[32px] font-bold font-lato">
                Ver más
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[317px] left-[3px] top-[671px] absolute text-white text-[32px] font-normal font-montserrat">
        {props.screenTime}
      </div>
    </div>
  );
}

export default function Doctors() {
  return (
    <div className="grid grid-cols-4 gap-6 p-10">
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
  );
}

// import doctorsData from '../app/data'; // Importa directamente la matriz de datos

// function DoctorsInformation(props) {
//   return (
//     <li>
//       <img src={props.image} alt={props.doctor} />
//       <h1>{props.doctor}</h1>
//       <h2>{props.actor}</h2>
//       <h3>{props.screen_time}</h3>
//     </li>
//   );
// }

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <ul>
//         {/* Mapea los datos de los doctores y crea instancias de DoctorsInformation */}
//         {doctorsData.map((doctor) => (
//           <DoctorsInformation
//             key={doctor.id}
//             image={doctor.image}
//             doctor={doctor.doctor}
//             actor={doctor.actor}
//             screen_time={doctor.screen_time}
//           />
//         ))}
//       </ul>
//     </main>
//   );
// }
