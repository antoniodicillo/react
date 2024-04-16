const Contato = ()=>{
    return (
      <>
        <div className="mainInfo" style={{ paddingBottom: "0" }}>
          <section id="info" style={{ paddingBottom: "0", display: "flex" }}>
            <div style={{ flex: "1", display: "inline-block" }}>
              <h1
                style={{
                  color: "#333333",
                  fontSize: "3rem",
                  weight: "700",
                  marginRight: "3rem",
                  width: "75%",
                }}
              >
                Dúvidas e suporte, entre em contato:
              </h1>

              <div style={{ display: "inline-block", paddingTop: "5rem" }}>
                <img
                  src="/discord.png"
                  style={{ marginRight: "2rem" }}
                  alt=""
                />
                <img
                  src="/instagram.png"
                  style={{ marginRight: "2rem" }}
                  alt=""
                />
                <img
                  src="/twitter.png"
                  style={{ marginRight: "2rem" }}
                  alt=""
                />
              </div>
            </div>
            <div
              style={{
                borderLeft: "1px solid #B9B7B7",
                height: "35rem",
                alignSelf: "end",
                display: "flex",
                justifyContent: "start",
              }}
            ></div>
            <div
              style={{
                flex: "1",
                display: "inline-block",
                justifyContent: "end",
                marginLeft: "2rem",
              }}
            >
              <div>
                <h1
                  style={{
                    fontWeight: "400",
                    display: "inline-block",
                    color: "#333333",
                    marginRight: "1rem",
                  }}
                >
                  Nome:
                </h1>
                <input
                  type="text"
                  style={{
                    width: "75%",
                    borderRadius: "20px",
                    borderColor: "#E4E4E4",
                    borderStyle: "solid",
                  }}
                />
              </div>
              <div>
                <h1
                  style={{
                    fontWeight: "400",
                    display: "inline-block",
                    color: "#333333",
                    marginRight: "1rem",
                    marginTop: "2.75rem",
                  }}
                >
                  E-mail:
                </h1>
                <input
                  type="text"
                  style={{
                    width: "70%",
                    borderRadius: "20px",
                    borderColor: "#E4E4E4",
                    borderStyle: "solid",
                  }}
                />
              </div>
              <div>
                <h1
                  style={{
                    fontWeight: "400",
                    color: "#333333",
                    marginRight: "1rem",
                    marginTop: "2.75rem",
                    marginBottom: "1rem",
                  }}
                >
                  Mensagem:
                </h1>
                <textarea
                  readonly
                  type="text"
                  cols="50"
                  rows="15"
                  style={{
                    width: "90%",
                    borderRadius: "20px",
                    borderColor: "#E4E4E4",
                    borderStyle: "solid",
                  }}
                />
              </div>
              <div className="button" style={{borderRadius: '10px', backgroundColor: '#6975E8', marginLeft: '50%', padding: '8px'}}>
                <a style={{ color: "white", fontWeight: "500", fontSize: '.9rem' }}>
                  Enviar
                </a>
              </div>
            </div>
          </section>
        </div>
      </>
    );
}

export default Contato