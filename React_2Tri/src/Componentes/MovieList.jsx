import MovieCard from './MovieCard'

function MovieList(dados) {
  return (
    <>
      <h1 className="filme-tipos-titulo">{dados.titulo}</h1>
      <div className="lista-filmes flex overflow-x-auto">
        {dados.filmes.map((filme) => (
          <div className="card-filme flex-none size-36" id={filme.id} key={filme.id} >
            <MovieCard poster={filme.poster_path} 
            titulo={filme.original_title}
            idFilme={filme.id}
              lancamento={filme.release_date} />
          </div>
        ))}
      </div>
    </>
  );
}

export default MovieList;