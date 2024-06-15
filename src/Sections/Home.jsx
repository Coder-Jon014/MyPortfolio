
const Home = () => {
  return (
    <section id="home" className="home text-cursor">
      <div className="home-content">
        <h1>Hi, I'm Jon-Daniel Coombs</h1>
        <h3 id="role"> </h3>
        <p>I <span className='hero-p'>design</span> and <span className='hero-p'>develop</span> impactful and passionate <span className='hero-p'>experiences</span>  to makes people's lives simple</p>

        <div className="btn-box">
          <a href="https://drive.google.com/uc?export=download&id=1UGfaVvMBT703eIpE1XNR-xfB1mt4_6tD" target="_blank" rel="noreferrer">Download CV</a>
          <a href="https://github.com/Coder-Jon014" target="_blank" rel="noreferrer">See My Work</a>
        </div>

        <div className="home-sci">
          <a href="https://github.com/Coder-Jon014" data-social="GitHub" target="_blank" rel="noreferrer"><i className='bx bxl-github bx-tada-hover bx-border-circle'></i></a>
          <a href="https://www.linkedin.com/in/jon-daniel-c-a3535b134/" data-social="LinkedIn" target="_blank" rel="noreferrer"><i className='bx bxl-linkedin bx-tada-hover bx-border-circle'></i></a>
          <a href="https://www.behance.net/jon-dancoombs" data-social="Behance" target="_blank" rel="noreferrer"><i className='bx bxl-behance bx-tada-hover bx-border-circle' ></i></a>
          <a href="mailto:jon.coombs14@gmail.com" data-social="Gmail" target="_blank" rel="noreferrer"><i className='bx bxl-gmail bx-tada-hover bx-border-circle'></i></a>
        </div>
      </div>
    </section>
  );
};

export default Home;