const searchDoctor = (searchTerm, doctorsData) => {
    const results = doctorsData.filter((doctor) =>
      doctor.doctor.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return results;
  };
  
  export default searchDoctor;
  