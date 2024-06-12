import { useEffect, useState } from "react";

function Filme() {
  const [filmeDetails, setFilmeDetails] = useState([]);
  const [classificacao, setClassificacao] = useState([]);

  const brasil = "BR";
  let currentMovie = localStorage.getItem("Filme");
  let posterImagem = "https://image.tmdb.org/t/p/original";

  const corIndicativa = (e, d) => {
    console.log(e);
    console.log(d);
    if (d == "14") {
      e.style.backgroundColor = "#352356";
      return null;
    }
    e.style.backgroundColor = "#353234";
  };

  function pegarNegocios(data, br) {
    for (let result of data.results) {
      if (result.iso_3166_1 === br) {
        const element = document.querySelectorAll("#classificacaoIndicativa");
        setClassificacao(result.release_dates[0]);
        corIndicativa(
          document.getElementById("corClassificacao"),
          result.release_dates[0].certification
        );
        return null;
      }
    }
    return null;
  }

  useEffect(() => {
    Promise.all([
      fetch(
        "https://api.themoviedb.org/3/movie/" +
          currentMovie +
          "?api_key=7c572a9f5b3ba776080330d23bb76e1e"
      )
        .then((response) => response.json())
        .then((response) => setFilmeDetails(response))
        .catch((error) => console.log(error)),
      fetch(
        "https://api.themoviedb.org/3/movie/" +
          currentMovie +
          "/release_dates?api_key=7c572a9f5b3ba776080330d23bb76e1e"
      )
        .then((response) => response.json())
        .then((response) => pegarNegocios(response, brasil))
        .catch((error) => console.log(error)),
    ]).then();
  }, []);

  return (
    <>
      <div className="filmeDetalhadoDiv">
        <img
          className="imgFilmeBackground"
          src={posterImagem + filmeDetails.backdrop_path}
          alt=""
        />
        <div className="filmetextos">
          <h1 className="text-white text-3xl mb-3">{filmeDetails.title}</h1>

          <div className="listaCards">
            <div className="cardFilmesClass" id="corClassificacao">
              <h1 className="text-white mb-3 filmeCardNegocado">
                {classificacao.certification}
              </h1>
            </div>
            <div className="cardFilmesClass">
              <h1 className="text-white mb-3 filmeCardNegocado">
                {classificacao.certification}
              </h1>
            </div>
          </div>

          <h1 className="text-white w-9/12">{filmeDetails.overview}</h1>
        </div>
      </div>
    </>
  );
}

export default Filme;
