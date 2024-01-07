// DoctorCard.jsx

import React from 'react';

function DoctorCard({ image, doctor, actor, screenTime }) {
  return (
    <div className="doctor-card">
      <img src={image} alt={doctor} />
      <h2>{doctor}</h2>
      <p>{actor}</p>
      <p>{screenTime}</p>
    </div>
  );
}

export default DoctorCard;
