function ContactForm() {
  return (
    <section id="contact">
      <div
        style={{
          display: "flex",
          margin: "1rem",
          justifyContent: "space-around",
        }}
      >
        <div
          class="cardCoiso"
          style={{
            textAlign: "start",
            backgroundColor: "#F1C2B0",
            maxWidth: "20%",
          }}
        >
          <h1
            className="cardTitle"
            style={{
              width: "50%",
              fontSize: "3rem",
              marginBottom: "1rem",
              display: "inline-block",
            }}
          >
            01
          </h1>
          <img
            src="/yt.jpg"
            alt="fotinho yt"
            style={{
              maxWidth: "25%",
              alignSelf: "end",
              borderRadius: "100rem",
              marginLeft: "20%",
            }}
          />
          <h3 style={{ color: "#333333", fontSize: "1.5rem" }}>Youtube</h3>
          <p
            style={{
              width: "90%",
              margin: "0",
              fontSize: "0.75rem",
              color: "#333333",
              fontWeight: "400",
            }}
          >
            Produza conteúdo cativante e conquiste seu público com vídeos de
            alta qualidade no maior palco digital do mundo.
          </p>
        </div>
        <div
          class="cardCoiso"
          style={{
            textAlign: "start",
            backgroundColor: "#F9EB98",
            maxWidth: "20%",
          }}
        >
          <h1
            className="cardTitle"
            style={{
              width: "50%",
              fontSize: "3rem",
              marginBottom: "1rem",
              display: "inline-block",
            }}
          >
            02
          </h1>
          <img
            src="/tik.jpg"
            alt="fotinho yt"
            style={{
              maxWidth: "25%",
              alignSelf: "end",
              borderRadius: "100rem",
              marginLeft: "20%",
            }}
          />
          <h3 style={{ color: "#333333", fontSize: "1.5rem" }}>Tik Tok</h3>
          <p
            style={{
              width: "90%",
              margin: "0",
              fontSize: "0.75rem",
              color: "#333333",
              fontWeight: "400",
            }}
          >
            Produza conteúdo cativante e conquiste seu público com vídeos de
            alta qualidade no maior palco digital do mundo.
          </p>
        </div>
        <div
          class="cardCoiso"
          style={{
            textAlign: "start",
            backgroundColor: "#C0D9DD",
            maxWidth: "20%",
          }}
        >
          <h1
            className="cardTitle"
            style={{
              width: "50%",
              fontSize: "3rem",
              marginBottom: "1rem",
              display: "inline-block",
            }}
          >
            03
          </h1>
          <img
            src="/face.jpg"
            alt="fotinho yt"
            style={{
              maxWidth: "25%",
              alignSelf: "end",
              borderRadius: "100rem",
              marginLeft: "20%",
            }}
          />
          <h3 style={{ color: "#333333", fontSize: "1.5rem" }}>Facebook</h3>
          <p
            style={{
              width: "90%",
              margin: "0",
              fontSize: "0.75rem",
              color: "#333333",
              fontWeight: "400",
            }}
          >
            Conecte-se com sua audiência de forma autêntica e impactante através
            de vídeos que se destacam no feed do Facebook.
          </p>
        </div>
        <div
          class="cardCoiso"
          style={{
            textAlign: "start",
            backgroundColor: "#6975E8",
            maxWidth: "20%",
          }}
        >
          <h1
            className="cardTitle"
            style={{
              width: "50%",
              fontSize: "3rem",
              marginBottom: "1rem",
              display: "inline-block",
            }}
          >
            04
          </h1>
          <img
            src="/insta.jpg"
            alt="fotinho yt"
            style={{
              maxWidth: "25%",
              alignSelf: "end",
              borderRadius: "100rem",
              marginLeft: "20%",
            }}
          />
          <h3 style={{ color: "#333333", fontSize: "1.5rem" }}>Instagram</h3>
          <p
            style={{
              width: "90%",
              margin: "0",
              fontSize: "0.75rem",
              color: "#333333",
              fontWeight: "400",
            }}
          >
            Compartilhe suas histórias de maneira única e conquiste milhões de
            likes no Instagram utilizando Stories e Reels.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;