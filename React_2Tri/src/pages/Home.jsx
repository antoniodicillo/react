import data from "../../artigos.json";
import { Link } from "react-router-dom";
import { useState } from "react";

function Home() {
  const [search, setSearch] = useState([]);
  console.log(search);

  data.filter((filme) => {
    if (filme.title.match(search)) {
      filme.match = true;
    }
  });

  return (
    <>
      <label
        for="default-search"
        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div class="relative mt-5 me-5 ms-5">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            class="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg
           bg-gray-50 focus:ring-blue-500 focus:border-blue-500 
           dark:bg-gray-200 dark:border-gray-100 dark:placeholder-gray-400
            dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Pesquisar um filme ou serie..."
          onChange={(e) => setSearch(e.target.value)}
          required
        />
      </div>
      <div className="grid-cols-1 grid">
        {data.map((filme, index) =>
          filme.title.match(search) ? (
            <>
              <hr className="mt-5" />
              <Link to="/">
                <div className="card flex w-100 mt-5 ml-5 mr-5 " key={index}>
                  <img src={filme.image} className="imageNoticia" alt="" />
                  <div className="flex flex-col ml-3 w-100">
                    <div className="tags">
                      {filme.tags.map((tag) => (
                        <span className="p1 m1" key={tag}>
                          {" "}
                          {tag} |
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
        )}
      </div>
      <div className="mt-12"></div>
    </>
  );
}

export default Home;
