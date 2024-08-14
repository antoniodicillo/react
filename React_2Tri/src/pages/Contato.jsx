function Sobre() {
    return (
        <>
            <div className="backgroundSobre bg-green-950 flex justify-center">
                <div className="mt-3 text-center">
                    <h1 className="text-white text-3xl mt-4">Bem vindo(a)</h1>
                    <h1 className="text-white text-1xl ms-96 me-96 mt-32">
                        Somos uma comunidade de pessoas unidas pela paixão pelos filmes.
                        Queremos compartilhar
                        nossas opiniões e ajudar outros
                        a encontrar novos filmes e desfrutar novas experiencias </h1>
                </div>
            </div>
            <h1 className="filme-tipos-titulo">Nesse site temos</h1>
            <div className="flex justify-evenly items-start mt-10 mb-32 grid-cols-1">
                <div className="flex justify-center flex-col">
                    <img src="/movie.svg" className="h-28 "  alt="" />
                    <h1 className="self-center " style={{maxWidth: "100px"}}>Mais de 100 filmes</h1>
                </div>
                <div className="flex justify-center flex-col ms-4">
                    <img src="/tv.svg" className="h-28"  alt="" />
                    <h1 className="self-center" style={{maxWidth: "100px"}}>Mais de 100 séries cadastradas</h1>
                </div>
                <div className="flex justify-center flex-col ms-4">
                    <img src="/person.svg" className="h-28"  alt="" />
                    <h1 className="self-center" style={{maxWidth: "100px"}}>Pessoas unidas para o bem de todos</h1>
                </div>
            </div>
        </>
    );
}

export default Sobre;