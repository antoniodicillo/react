import { useState } from "react";
import MovieCard from "../Componentes/MovieCard";

function Filmes() {
  const [filmes, setFilmes] = useState([]);

  fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e"
  )
    .then((response) => response.json())
    .then((response) => setFilmes(response.results))
    .catch((error) => console.log(error));

  return (
    <>
      <h1 className="filme-tipos-titulo">Mais Populares</h1>
      <div className="lista-filmes">
        {filmes.map((filme) => (
          <div className="card-filme" key={filme.id}>
            <MovieCard
              titulo={filme.title}
              descricao={filme.overview}
              lancamento={filme.release_date}
              poster={filme.poster_path}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Filmes;
