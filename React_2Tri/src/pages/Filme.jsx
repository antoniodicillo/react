import { useEffect, useState } from "react";
import CastList from "../Componentes/CastList";
import CrewList from "../Componentes/CrewList";

function Filme() {
  const [filmeDetails, setFilmeDetails] = useState([]);
  const [classificacao, setClassificacao] = useState([]);
  const [creditos, setCreditos] = useState([]);
  const [crew, setCrew] = useState([]);

  const brasil = "BR";
  let currentMovie = localStorage.getItem("Filme");
  let posterImagem = "https://image.tmdb.org/t/p/original";

  const corIndicativa = (cor, ratingTexto, certificacao) => {
    ratingTexto.innerHTML = parseFloat(ratingTexto.innerHTML).toFixed(2);
    if (certificacao == "L") {
      cor.style.backgroundColor = "#45C630";
      return null;
    } else if (certificacao == "10") {
      cor.style.backgroundColor = "#38D6D6";
      return null;
    } else if (certificacao == "12") {
      cor.style.backgroundColor = "#A0B713";
      return null;
    } else if (certificacao == "14") {
      cor.style.backgroundColor = "#CB851C";
      return null;
    } else if (certificacao == "16") {
      cor.style.backgroundColor = "#FB3F3F";
      return null;
    } else if (certificacao == "18") {
      cor.style.backgroundColor = "#000000";
      return null;
    }
    cor.style.display = "none";
  };

  function pegarNegocios(data, br) {
    for (let result of data.results) {
      if (result.iso_3166_1 === br) {
        const element = document.querySelectorAll("#classificacaoIndicativa");
        setClassificacao(result.release_dates[0]);
        corIndicativa(
          document.getElementById("corClassificacao"),
          document.getElementById("rating"),
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
      fetch(
        "https://api.themoviedb.org/3/movie/" +
          currentMovie +
          "/credits?api_key=7c572a9f5b3ba776080330d23bb76e1e"
      )
        .then((response) => response.json())
        .then((response) => setCreditos(response.cast))
        .catch((error) => console.log(error)),
      fetch(
        "https://api.themoviedb.org/3/movie/" +
          currentMovie +
          "/credits?api_key=7c572a9f5b3ba776080330d23bb76e1e"
      )
        .then((response) => response.json())
        .then((response) => setCrew(response.crew))
        .catch((error) => console.log(error)),
    ]).then();
  }, []);

  return (
    <>
      <div className="filmeContainer">
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
                <h1 className="text-white mb-3 filmeCardNegocado" id="rating">
                  {filmeDetails.vote_average}
                </h1>
                <img
                  src="https://www.clker.com/cliparts/T/y/k/o/D/E/white-star.svg"
                  className="ratingCard"
                  alt=""
                />
              </div>
            </div>

            <h1 className="text-white w-9/12">{filmeDetails.overview}</h1>
          </div>
        </div>
        <CastList titulo="Atores" pessoas={creditos} />
        <CrewList titulo="Equipe" pessoas={crew} />
      </div>
    </>
  );
}

export default Filme;
