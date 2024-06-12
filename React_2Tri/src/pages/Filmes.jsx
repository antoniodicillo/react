import MovieList from "../Componentes/MovieList";
import { useState,useEffect } from "react";

function Filmes() {
  const [filmes, setFilmes] = useState([]);
  const [novosFilmes, setNovosFilmes] = useState([]);
  
  useEffect(() => {
    Promise.all([
      fetch("https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e")
      .then((response) => response.json())
      .then((response) => setFilmes(response.results))
      .catch((error) => console.log(error)),
    fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=7c572a9f5b3ba776080330d23bb76e1e")
      .then((response) => response.json())
      .then((response) => setNovosFilmes(response.results))
      .catch((error) => console.log(error)),  
    ]).then()
  },[])
  
 
  return (
    <>
      <MovieList titulo="Mais Populares" filmes={filmes}/>
      <MovieList titulo="Para lançar" filmes={novosFilmes}/>
    </>
  );
}

export default Filmes;
