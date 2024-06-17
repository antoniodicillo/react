import data from "../../artigos.json";

function Home() {
  return (
    <>
      <div className="grid-cols-1 grid">
        {data.map((filme, index) => (
          <div className="card flex w-4/12" key={index}>
            <img src={filme.image} className="" style={{height: "auto"}} alt="" />
            <h1>{filme.title}</h1>
            <div className="tags">
              {filme.tags.map((tag) => (
                <span className="bg-pink-800 text-white p1 m1" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="texto">
              {filme.text.map((texto) => (
                <p key={texto}> {texto}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
