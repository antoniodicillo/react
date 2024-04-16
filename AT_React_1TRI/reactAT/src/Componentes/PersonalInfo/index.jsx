function PersonalInfo({ name, email, phone }) {
  return (
    <div className="personal-info">
      <h1 style={{ color: "#333333", fontSize: "3rem", weight: "700" }}>
        Crie seus vídeos online
      </h1>
      <p style={{ color: "#333333", width: '60%'}}>
        Transforme suas ideias em filmes memoráveis: onde a criatividade
        encontra a simplicidade.
      </p>
      <div className="button" style={{ borderRadius: '40px'}}>
        <a style={{ color: "white", fontWeight: "500" }}>Começar agora!</a>
      </div>
    </div>
  );
}

export default PersonalInfo;
