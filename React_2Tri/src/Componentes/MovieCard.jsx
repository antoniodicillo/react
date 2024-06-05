import { Link } from 'react-router-dom'

function MovieCard(dados) {
  const posterImagem = 'https://image.tmdb.org/t/p/w500'+dados.poster

  ".cardfilme a".on('click', function(e) {
    
  })

    return ( 
        <>
        <Link onclick={()})>
          <img src={posterImagem} alt="posterFilme" />
          <h1 className="titulo-filme">{dados.titulo}</h1>
          <p className="data-lancamento">{dados.lancamento}</p>
        </Link>
        </>
     );
}

export default MovieCard;