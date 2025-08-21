

const Hero = () => {
  return (
    <div>
      <section className="hero">
        <div>
          <img
            src="logo.jpeg"
            alt="Profile Picture"
            style={{
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              marginBottom: "20px",
              border: "6px solid #a955f4",
              objectFit: "cover",
              objectPosition: "top"
            }}
          />
        </div >
        <div>
          <h2>Hello, I'm Wadood</h2>
          <p>
            A passionate developer building modern and minimal digital
            experiences.
          </p>
          <a
            href="https://github.com/wadoodshaikh"
            target="_blank"
            className="github-btn"
          >
            <div style={{display: "flex", alignItems: "center"}}>
              <img
                alt="icon"
                loading="lazy"
                width="32"
                height="32"
                decoding="async"
                data-nimg="1"
                style={{color: "transparent", filter: "invert(1)"}}
                src="github-icon.png"
              />
              Github
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Hero