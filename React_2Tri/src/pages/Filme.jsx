import { useState } from "react";

function Filme() {
  const [filmeDetails, setFilmeDetails] = useState([]);
  let currentMovie = localStorage.getItem('Filme')
  let posterImagem = 'https://image.tmdb.org/t/p/w500/'
  

    fetch("https://api.themoviedb.org/3/movie/"+currentMovie+'?api_key=7c572a9f5b3ba776080330d23bb76e1e')
    .then((response) => response.json())
    .then((response) => setFilmeDetails(response))
    .catch((error) => console.log(error));

  return (
    <>      
      <div className="imgFilmeBackground" >  
        <img className='imgFilmeBackground' src={posterImagem+filmeDetails.backdrop_path} alt="" />
        <h1 className="color-white">{filmeDetails.title}</h1>
      </div>
    </>
  );
}

export default Filme;
