// import logo from './logo.svg';
import './App.css';

var roles = ["Frontend Developer", "Mobile Developer", "UX Designer"];
var index = 0; // Starting index
var intervalId; // Declare intervalId in a broader scope

function updateRole() {
  var roleElement = document.getElementById("role");
  if (roleElement) {
    roleElement.style.opacity = 0; // Hide the element
    roleElement.style.transition = "opacity 0.5s ease-in-out";
    setTimeout(function() {
      roleElement.textContent = roles[index];
      roleElement.style.opacity = 1; // Show the element
    }, 1000); // Delay for 1 second
  }
}

function cycleRoles() {
  updateRole();
  index = (index + 1) % roles.length;

  if (index === roles.length - 1) {
    // Stop cycling at the last index
    clearInterval(intervalId);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  updateRole(); // Show initial role
  intervalId = setInterval(cycleRoles, 4000); // Assign intervalId
});

function App() {
  return (
    <div className="App">
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
        <p>Unleash the power of design! With fiery passion and unwavering drive, I strive to create hassle-free digital
          products that solve real problems while delivering a satisfying user experience. Join me on this exhilarating
          journey as we craft practical and captivating designs that push boundaries, leaving users in awe. Get ready to
          embark on an unforgettable adventure where innovation meets imagination, and together, we'll shape a future
          filled with delightful and impactful digital experiences. Welcome to a world of limitless possibilities!</p>
  
        <div class="btn-box">
          <a href="https://drive.google.com/file/d/1UGfaVvMBT703eIpE1XNR-xfB1mt4_6tD/view?usp=sharing" target="_blank" rel="noreferrer">Get My CV</a>
          <a href="https://github.com/Coder-Jon014">See My Work</a>
        </div>
      </div>
  
      <div class="home-sci">
        <a href="https://github.com/Coder-Jon014" data-social="GitHub"><i class='bx bxl-github bx-tada-hover bx-border-circle' ></i></a>
        <a href="https://www.linkedin.com/in/jon-daniel-c-a3535b134/" data-social="LinkedIn" ><i class='bx bxl-linkedin bx-tada-hover bx-border-circle' ></i></a>
        <a href="https://www.behance.net/jon-dancoombs" data-social="Behance"><i class='bx bxl-behance bx-tada-hover bx-border-circle' ></i></a>
        <a href="mailto:jon.coombs14@gmail.com" data-social="Gmail"><i class='bx bxl-gmail bx-tada-hover bx-border-circle'></i></a>
      </div>

      <span class="home-imgHover"></span>
    </section>
    </div>
  );
}

export default App;
