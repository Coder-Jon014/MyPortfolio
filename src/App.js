// import logo from './logo.svg';
import './App.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from '@studio-freight/lenis'
import SplitType from 'split-type'

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

document.addEventListener('DOMContentLoaded', function() {
  // GSAP ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  const quoteSplitTypes = document.querySelectorAll('.quote')
  quoteSplitTypes.forEach((char, i) => {
    const text = new SplitType(char, { types: 'chars' })
    gsap.from(text.chars, {
      scrollTrigger: {
        trigger: char,
        start: 'top 80%',
        end: 'top 20%',
        scrub: true,
        // markers: true,
      },
      opacity: 0.3,
      stagger: 0.1,
    })
  })

  const projectSplitTypes = document.querySelectorAll('.project')
  projectSplitTypes.forEach((char, i) => {
    const fg = char.dataset.fgColor
    const bg = char.dataset.bgColor
    const text = new SplitType(char, { types: 'chars' })
    gsap.fromTo(text.chars, 
      {
        color: bg,
      },
      {
        color: fg,
        duration: 0.3,
        stagger: 0.02,
        scrollTrigger: {
          trigger: char,
          start: 'top 80%',
          end: 'top 20%',
          scrub: false,
          // markers: true,
          toggleActions: 'play play reverse reverse',
        }
      })
  })

  const aboutSplitTypes = document.querySelectorAll('.about')
  aboutSplitTypes.forEach((char, i) => {
    const fg = char.dataset.fgColor
    const bg = char.dataset.bgColor
    const text = new SplitType(char, { types: 'chars' })
    gsap.fromTo(text.chars, 
      {
        color: bg,
      },
      {
        color: fg,
        duration: 0.3,
        stagger: 0.02,
        scrollTrigger: {
          trigger: char,
          start: 'top 80%',
          end: 'top 20%',
          scrub: false,
          // markers: true,
          toggleActions: 'play play reverse reverse',
        }
      })
  })

  const footerSplitTypes = document.querySelectorAll('.footer')
  footerSplitTypes.forEach((char, i) => {
    const fg = char.dataset.fgColor
    const bg = char.dataset.bgColor
    const text = new SplitType(char, { types: 'chars' })
    gsap.fromTo(text.chars, 
      {
        color: bg,
      },
      {
        color: fg,
        duration: 0.3,
        stagger: 0.02,
        scrollTrigger: {
          trigger: char,
          start: 'top 80%',
          end: 'top 20%',
          scrub: false,
          // markers: true,
          toggleActions: 'play play reverse reverse',
        }
      })
  })
});




// Lenis section for Smooth Scroll
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

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
      {/* <div class="home-image"></div> */}
      <div class="home-content">
        <h1>Hi, I'm Jon-Daniel Coombs</h1>
        <h3 id="role">Frontend Developer </h3>
        <p>A <span class='hero-p'>passionate</span> designer crafting <span class='hero-p'>impactful</span>  digital experiences!</p>
  
        <div class="btn-box">
          <a href="https://drive.google.com/file/d/1UGfaVvMBT703eIpE1XNR-xfB1mt4_6tD/view?usp=sharing" target="_blank" rel="noreferrer">Get My CV</a>
          <a href="https://github.com/Coder-Jon014" target="_blank" rel="noreferrer">See My Work</a>
        </div>

        <div class="home-sci">
        <a href="https://github.com/Coder-Jon014" data-social="GitHub" target="_blank" rel="noreferrer"><i class='bx bxl-github bx-tada-hover bx-border-circle' ></i></a>
        <a href="https://www.linkedin.com/in/jon-daniel-c-a3535b134/" data-social="LinkedIn" target="_blank" rel="noreferrer"><i class='bx bxl-linkedin bx-tada-hover bx-border-circle' ></i></a>
        <a href="https://www.behance.net/jon-dancoombs" data-social="Behance" target="_blank" rel="noreferrer"><i class='bx bxl-behance bx-tada-hover bx-border-circle' ></i></a>
        <a href="mailto:jon.coombs14@gmail.com" data-social="Gmail" target="_blank" rel="noreferrer"><i class='bx bxl-gmail bx-tada-hover bx-border-circle'></i></a>
      </div>
      </div>
    </section>

    <section class="Quote">
      <div class="quote-content">
        <h1 class='quote'>“Design is not just what it looks like and feels like. Design is how it works.”</h1>
      </div>
    </section>

    <section class="Projects">
      <div class="project-content">
        <h1 class='project' data-bg-color = '#000000' data-fg-color='#ffff'>“Design is not just what it looks like and feels like. Design is how it works.”</h1>
      </div>
    </section>

    <section class="About">
      <div class="about-content">
        <h1 class='about' data-bg-color = '#000000' data-fg-color='#ffff'>“Design is not just what it looks like and feels like. Design is how it works.”</h1>
      </div>
    </section>

    <section class="Footer">
      <div class="footer-content">
        <h1 class='footer' data-bg-color = '#000000' data-fg-color='#52cdc9'>“Design is not just what it looks like and feels like. Design is how it works.”</h1>
      </div>
    </section>
    </div>
  );
}

export default App;
