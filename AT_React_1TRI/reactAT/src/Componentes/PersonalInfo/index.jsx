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
      <div
        className="button"
        style={{
          marginTop: '1rem',
          backgroundColor: "#333333",
          borderRadius: "40px",
          padding: '15px',
          gap: '10px',
          width: '40%',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <a style={{ color: "white", fontWeight: "500" }}>Começar agora!</a>
      </div>
    </div>
  );
}

export default PersonalInfo;
