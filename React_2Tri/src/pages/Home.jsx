import data from "../../artigos.json";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="grid-cols-1 grid">
        {data.map((filme, index) => (
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
        ))}
      </div>
      <div className="mt-12"></div>
    </>
  );
}

export default Home;
