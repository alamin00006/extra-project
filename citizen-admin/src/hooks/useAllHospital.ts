export const useAllHospital = async () => {
  const data = await fetch("http://localhost:5000/api/v1/hospital-service");
  const hospital = await data.json();
  console.log(hospital);

  return { hospital };
};
