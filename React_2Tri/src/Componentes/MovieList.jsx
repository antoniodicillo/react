import { Link } from 'react-router-dom'

function MovieList(dados) {
  let posterImagem = 'https://image.tmdb.org/t/p/w500/'

  function salve(e) {
    localStorage.setItem('Filme',e.target.parentNode.id)
  }

  return (
    <>
      <h1 className="filme-tipos-titulo">{dados.titulo}</h1>
      <div className="lista-filmes flex overflow-x-auto">
        {dados.filmes.map((filme) => (
          <div className="card-filme flex-none size-36" key={filme.id}  >
            <Link id={filme.id} to={'/filme/'+filme.id} className='linkFilminho' onClick={(e) => salve(e)}>
              <img src={posterImagem+filme.poster_path} alt="posterFilme" />
              <h1 className="titulo-filme">{filme.original_title}</h1>
              <p className="data-lancamento">{filme.release_date}</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default MovieList;