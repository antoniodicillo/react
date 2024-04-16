const Sobre = ()=>{
    return (
      <>
      <div className="mainInfo" style={{paddingBottom: '0'}}>
        <section id="info" style={{paddingBottom: '0'}}>
          <div style={{ flex: "1", display: "inline-block" }}>
            <h1 style={{ color: "#333333", fontSize: "3rem", weight: "700", marginRight: '3rem', width: '60%' }}>
              Bem-vindo à revolução dos vídeos!
            </h1>
            <p style={{ color: "#333333", width: "60%" }}>
              Somos uma startup com o objetivo de facilitar a produção de
              conteúdo em larga escala com qualidade profissional, capaz de
              atingir uma audiência de milhões de seguidores.
            </p>
            <div className="button">
              <a style={{ color: "white", fontWeight: "500" }}>
                Baixe o app
              </a>
            </div>
          </div>
          <img src="/cell1.png" alt="" style={{ marginRight: "2.5rem" }} />
          <img src="/cell2.png" alt="" />
        </section>
      </div>
      <div style={{background: '#F4F2F2', display: 'flex', alignItems: 'center', flexDirection: 'column', paddingBottom: '3rem'}}>
            <h1 style={{textAlign: 'center', fontWeight: '400', padding: '1rem'}}>Planos</h1>
            <div style={{display: 'inline-block'}}>
                <img src="/negocio1.png" alt="" />
                <img src="/negocio2.png" alt="" />
                <img src="/negocio3.png" alt="" />
            </div>
        </div>
      </>
    );
}

export default Sobre