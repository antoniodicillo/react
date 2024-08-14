import data from "../../artigos.json";
import { Link } from "react-router-dom";
import { useState } from "react";

function Home() {
  const [search, setSearch] = useState([]);
  console.log(search)



  data.filter((filme) => {
    if(filme.title.match(search)) {
      filme.match = true
    }
  })
  
  return (
    <>
    <div className="w-100 mt-5 ms-6 me-6 border-2 flex">
      <input style={{width: '100%'}} type="text" placeholder="Pesquise Aqui!" onChange={(e)=>setSearch(e.target.value)}/>   
    </div>
      <div className="grid-cols-1 grid">
        {data.map((filme, index) => (
          filme.title.match(search) ? (
          <>
            <hr className="mt-5"/>
            <Link to="/">
            <div className="card flex w-100 mt-5 ml-5 mr-5 " key={index}>
              <img src={filme.image} className="imageNoticia" alt="" />
              <div className="flex flex-col ml-3 w-100">
              <div className="tags">
                {filme.tags.map((tag) => (
                  <span className="p1 m1" key={tag}>
                    {" "}{tag} |
                  </span>
                ))}
              </div>
              <h1 className="text-green-900  text-3xl">{filme.title}</h1>
              <div className="texto flex-initial">
                {filme.text.map((texto) => (
                  <p key={texto}> {texto}</p>
                ))}
              </div>
              </div>
            </div>
            </Link>
          </>
          ) : null
        ))}
      </div>
      <div className="mt-12"></div>
    </>
  );
}

export default Home;
