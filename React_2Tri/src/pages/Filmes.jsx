import MovieList from "../Componentes/MovieList";
import { useState, useEffect } from "react";

function Filmes() {
  const [filmes, setFilmes] = useState([]);
  const [novosFilmes, setNovosFilmes] = useState([]);
  let posterImagem = "https://image.tmdb.org/t/p/original";




  useEffect(() => {
    Promise.all([
      fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e"
      )
        .then((response) => response.json())
        .then((response) => setFilmes(response.results))
        .catch((error) => console.log(error)),
      fetch(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=7c572a9f5b3ba776080330d23bb76e1e"
      )
        .then((response) => response.json())
        .then((response) => setNovosFilmes(response.results))
        .catch((error) => console.log(error)),
    ]).then();
  }, []);

  return (
    <>
      <div className="filmeDetalhadoDiv">
        {filmes.length > 0 && (
          <img id="filmeDestaque" className="imgFilmeBackground" src={posterImagem + filmes[0].backdrop_path} alt="" />
        )}
        <div className="filmetextosPrincipal">
          <h1 className="text-white text-3xl">Bem vindo(a)</h1>
          <h2 className="text-gray-300 text-2xl mb-3">Milhares de filmes para descobrir. Explore já</h2>
          <form class="w-100 me-12">
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Pesquisar um filme ou serie..." required />
              <button type="submit" class="text-white absolute end-2.5 bottom-2.5
               bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none 
               focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600
                dark:hover:bg-green-700 dark:focus:ring-green-800">Search</button>
            </div>
          </form>

        </div>
      </div>
      <MovieList titulo="Mais Populares" filmes={filmes} />
      <MovieList titulo="Para lançar" filmes={novosFilmes} />
    </>
  );
}

export default Filmes;
