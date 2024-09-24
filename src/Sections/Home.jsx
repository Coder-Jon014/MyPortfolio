const Home = () => {
  return (
    <section id="home" className="home text-cursor min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="home-content max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Hi, I'm Jon-Daniel Coombs</h1>
        <h3 id="role" className="text-xl sm:text-2xl md:text-3xl mb-4"> </h3>
        <p className="text-lg sm:text-xl mb-8">
          I <span className='hero-p'>design</span> and <span className='hero-p'>develop</span> impactful and passionate <span className='hero-p'>experiences</span> to make lives simple
        </p>

        <div className="btn-box flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <a href="/Jon-Daniel Coombs.pdf" download className="btn bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Get My CV</a>
          <a href="https://github.com/Coder-Jon014" target="_blank" rel="noreferrer" className="btn bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">See My Work</a>
        </div>

        <div className="home-sci flex justify-center gap-4">
          <a href="https://github.com/Coder-Jon014" data-social="GitHub" target="_blank" rel="noreferrer" className="text-3xl hover:text-gray-600"><i className='bx bxl-github bx-tada-hover bx-border-circle'></i></a>
          <a href="https://www.linkedin.com/in/jon-daniel-c-a3535b134/" data-social="LinkedIn" target="_blank" rel="noreferrer" className="text-3xl hover:text-blue-600"><i className='bx bxl-linkedin bx-tada-hover bx-border-circle'></i></a>
          <a href="https://www.behance.net/jon-dancoombs" data-social="Behance" target="_blank" rel="noreferrer" className="text-3xl hover:text-blue-400"><i className='bx bxl-behance bx-tada-hover bx-border-circle' ></i></a>
          <a href="mailto:jon.coombs14@gmail.com" data-social="Gmail" target="_blank" rel="noreferrer" className="text-3xl hover:text-red-600"><i className='bx bxl-gmail bx-tada-hover bx-border-circle'></i></a>
        </div>
      </div>
    </section>
  );
};

export default Home;