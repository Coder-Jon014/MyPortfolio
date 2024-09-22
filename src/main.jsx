import React from "react";
import './index.css'



const Main = () => {
    return(
        <html lang="en">

<head>
  <meta charset="utf-8" />

  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#000000" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <title>Jon-Daniel Coombs Website</title>
</head>

<body>
  <div id="root">
    <header class="header">
      <a href="https://github.com/Coder-Jon014" class="logo"> Jon.</a>
  
      <nav class="navbar">
        <a href="https://github.com/Coder-Jon014" class="active">Home</a>
        <a href="https://github.com/Coder-Jon014">About</a>
        <a href="https://github.com/Coder-Jon014">Projects</a>
        <a href="https://github.com/Coder-Jon014">Contact</a>
      </nav>
    </header>
  
    <section class="home">
      <div class="home-image"></div>
      <div class="home-content">
        <h1>Hi, I'm Jon-Daniel Coombs</h1>
        <h3 id="role">Frontend Developer </h3>
       
        
  
        <div class="btn-box">
          <a href="/assets/Jon-Daniel Coombs.pdf" download>Get My CV</a>
          <a href="https://github.com/Coder-Jon014">See My Work</a>
        </div>
      </div>
  
      <div class="home-sci">
        <a href="https://github.com/Coder-Jon014" data-social="GitHub"><i class='bx bxl-github bx-tada-hover bx-border-circle' ></i></a>
        <a href="https://www.linkedin.com/in/jon-daniel-c-a3535b134/" data-social="LinkedIn"><i class='bx bxl-linkedin bx-tada-hover bx-border-circle' ></i></a>
        <a href="https://www.behance.net/jon-dancoombs" data-social="Behance"><i class='bx bxl-behance bx-tada-hover bx-border-circle' ></i></a>
        <a href="mailto:jon.coombs14@gmail.com" data-social="Gmail"><i class='bx bxl-gmail bx-tada-hover bx-border-circle'></i></a>
      </div>

      <span class="home-imgHover"></span>
    </section>
  </div>
</body>
</html>
    );
};

export default Main;