import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contato() {
  const [nome, setNome] = useState([]);
  const [email, setEmail] = useState([]);
  const [mensagem, setMensagem] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_p8uinb6";
    const templateId = "template_pzjm06l";
    const publicKey = "8C6LEkeXJ_PmUK-gF";

    const templateParams = {
      from_name: nome,
      from_email: email,
      to_name: "Filminhos net",
      message: mensagem,
    };
    console.log(serviceId, templateId, templateParams, publicKey)
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email enviado com successo!", response);
        setNome("");
        setMensagem("");
        setEmail("");
      })
      .catch((error) => {
        console.log("Erro: ", error);
      });
  };

  return (
    <>
      <div className="bg-green-950 flex justify-center">
        <div className="mt-2 mb-6 text-center">
          <h1 className="text-white text-3xl mt-4">Contato</h1>
        </div>
      </div>
      <div className="flex flex-col mt-3 mb-80 ms-6">
        <h1 className="text-2xl">Entre em contato conosco</h1>
        <form action="">
          <div>
            <h1 className="mt-2">Nome</h1>
            <div className="mt-2">
              <input
                type="search"
                className="block w-2/4 p-2 ps-2 text-sm text-gray-900 border border-gray-300 rounded-lg
           bg-gray-50 focus:ring-blue-500 focus:border-blue-500 
           dark:bg-gray-200 dark:border-gray-100 dark:placeholder-gray-400
            dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Digite aqui"
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <h1 className="mt-2">Email</h1>
            <div className="mt-2">
              <input
                type="search"
                className="block w-2/4 p-2 ps-2 text-sm text-gray-900 border border-gray-300 rounded-lg
           bg-gray-50 focus:ring-blue-500 focus:border-blue-500 
           dark:bg-gray-200 dark:border-gray-100 dark:placeholder-gray-400
            dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Digite aqui"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <h1 className="mt-2">Mensagem</h1>
            <div className="mt-2">
              <input
                type="search"
                className="block w-2/4 p-2 ps-2 text-sm text-gray-900 border border-gray-300 rounded-lg
           bg-gray-50 focus:ring-blue-500 focus:border-blue-500 
           dark:bg-gray-200 dark:border-gray-100 dark:placeholder-gray-400
            dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Digite aqui"
                onChange={(e) => setMensagem(e.target.value)}
                required
              />
            </div>
          </div>
          <button
            className="mt-4 align-middle select-none font-bold text-center uppercase
             transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 
             rounded-lg bg-blue-900 text-white shadow-md shadow-blue-900/10 hover:shadow-lg
              hover:shadow-gray-900/20 focus:opacity-[0.85] 
            focus:shadow-none active:opacity-[0.85] active:shadow-none"
            type="button"
            onClick={(e) => handleSubmit(e)}
          >
            Enviar
          </button>
        </form>
      </div>
    </>
  );
}

export default Contato;
