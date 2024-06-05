function MovieCard(dados) {

    const posterImagem = 'https://image.tmdb.org/t/p/w500'+dados.poster
    
    return ( 
        <>
            <img src={posterImagem} alt="posterFilme" />
            <h1 className="titulo-filme">{dados.titulo}</h1>
            <p className="data-lancamento">{dados.lancamento}</p>
        </>
     );
}

export default MovieCard;