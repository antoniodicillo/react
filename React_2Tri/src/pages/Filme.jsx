import { useState } from "react";

function Filme() {
  const [filmeDetails, setFilmeDetails] = useState([]);
  let currentMovie = localStorage.getItem('Filme')
 

    fetch("https://api.themoviedb.org/3/movie/"+currentMovie+'?api_key=7c572a9f5b3ba776080330d23bb76e1e')
    .then((response) => response.json())
    .then((response) => setFilmeDetails(response))
    .catch((error) => console.log(error));

  return (
    <>      
      <h1>{filmeDetails.title}</h1>
    </>
  );
}

export default Filme;
