import { useState } from "react";

function Filme() {
  const [filmes, setFilmes] = useState([]);


    fetch("https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e")
    .then((response) => response.json())
    .then((response) => setFilmes(response.results))
    .catch((error) => console.log(error));

  return (
    <>
      <h1>{filmes.title}</h1>
    </>
  );
}

export default Filme;
