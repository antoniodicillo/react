import { useState } from "react";

function CastList(dados) {
  let posterImagem = "https://image.tmdb.org/t/p/w500/";

  function salve(e) {
    localStorage.setItem("Filme", e.target.parentNode.id);
  }
  function mudarImagem(e) {
    e.target.src =
      "/defaultProfile.png";
  }
  return (
    <>
      <h1 className="filme-tipos-titulo" style={{marginTop: '0'}}>{dados.titulo}</h1>
      <div className="lista-filmes flex overflow-x-auto">
        {dados.pessoas.map((pessoa) => (
          <div className="card-filme flex-none size-36" key={pessoa.id}>
            <img
              src={posterImagem + pessoa.profile_path}
              onError={(e) => mudarImagem(e)}
              alt="posterImagem"
            />
            <h1 className="titulo-filme">{pessoa.name}</h1>
            <p className="data-lancamento">{pessoa.job}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default CastList;
