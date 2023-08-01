// import logo from './logo.svg';
import './App.css';
import { gsap } from "gsap";
import { Flip } from 'gsap/Flip';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from 'gsap/all';
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

function activeProjectCards(){
  const cards = document.querySelectorAll('.project-content')
  cards.forEach((card, i) => {
    card.addEventListener('click', () => {
      // Get State
      const state = Flip.getState(cards);

      // Add active class to flip and inactive to others
      const isCardActive = card.classList.contains('active');
      cards.forEach((otherCard, otherIndex) => {
        otherCard.classList.remove('active');
        otherCard.classList.remove('is-inactive');
        if (!isCardActive && otherIndex !== i) otherCard.classList.add('is-inactive');
      });
      if (!isCardActive) card.classList.add('active');

      Flip.from(state, {
        duration: 1,
        ease: "expo.out",
        absolute: true,
      });
    });
  });
}

// Function to handle smooth scrolling to a specific section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const offsetTop = section.getBoundingClientRect().top;
    const headerHeight = document.querySelector('.header').clientHeight;
    const targetScroll = "+=" + (offsetTop - headerHeight);
    gsap.to(window, { scrollTo: targetScroll, duration: 1, ease: "power2.inOut" });
  }
}

document.addEventListener('DOMContentLoaded', function() {
  updateRole(); // Show initial role
  intervalId = setInterval(cycleRoles, 4000); // Assign intervalId
  // GSAP ScrollTrigger 
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);
  gsap.registerPlugin(Flip);

  activeProjectCards(); // Activate project cards
  // Handle click event for navigation links
  const navLinks = document.querySelectorAll('.navbar a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const sectionId = link.getAttribute('href').substring(1); // Get the target section ID from the href attribute
      scrollToSection(sectionId);

      // Update the active status for the navigation buttons
      navLinks.forEach(navLink => navLink.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // Handle click event for "Home" button
  const homeLink = document.querySelector('.navbar .home');
  if (homeLink) {
    homeLink.addEventListener('click', function(event) {
      event.preventDefault();
      scrollToSection('home');
    });
  }

  // Handle click event for "About" button
  const aboutLink = document.querySelector('.navbar .about');
  if (aboutLink) {
    aboutLink.addEventListener('click', function(event) {
      event.preventDefault();
      scrollToSection('about');
    });
  }

  // Handle click event for "Project" button
  const projectLink = document.querySelector('.navbar .project');
  if (projectLink) {
    projectLink.addEventListener('click', function(event) {
      event.preventDefault();
      scrollToSection('project');
    });
  }

  // Handle click event for "Contact" button
  const contactLink = document.querySelector('.navbar .contact');
  if (contactLink) {
    contactLink.addEventListener('click', function(event) {
      event.preventDefault();
      scrollToSection('contact');
    });
  }

  // GSAP Animations for Quote Section
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

  // GSAP Animations for Project Section
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

  // GSAP Animations for About Section
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

  // GSAP Animations for contact Section
  const contactSplitTypes = document.querySelectorAll('.contact')
  contactSplitTypes.forEach((char, i) => {
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
});


function App() {
  return (
    <div className="App">
       <header className="header">
        <a href="#home" className="logo"> Jon.</a>
    
        <nav className="navbar">
          <a href="#home" className="active home">Home</a>
          <a href="#project" className='project'>My Projects</a>
          <a href="#about" className='about'>About Me</a>
          <a href="#contact" className='contact'>Contact</a>
        </nav>
      </header>
  
      <section id="home" className="home">
        {/* <div className="home-image"></div> */}
        <div className="home-content">
          <h1>Hi, I'm Jon-Daniel Coombs</h1>
          <h3 id="role">Frontend Developer </h3>
          <p>A <span className='hero-p'>passionate</span> designer crafting <span className='hero-p'>impactful</span>  digital experiences!</p>
    
          <div className="btn-box">
            <a href="https://drive.google.com/uc?export=download&id=1UGfaVvMBT703eIpE1XNR-xfB1mt4_6tD" target="_blank" rel="noreferrer">Get My CV</a>
            <a href="https://github.com/Coder-Jon014" target="_blank" rel="noreferrer">See My Work</a>
          </div>

          <div className="home-sci">
          <a href="https://github.com/Coder-Jon014" data-social="GitHub" target="_blank" rel="noreferrer"><i className='bx bxl-github bx-tada-hover bx-border-circle' ></i></a>
          <a href="https://www.linkedin.com/in/jon-daniel-c-a3535b134/" data-social="LinkedIn" target="_blank" rel="noreferrer"><i className='bx bxl-linkedin bx-tada-hover bx-border-circle' ></i></a>
          <a href="https://www.behance.net/jon-dancoombs" data-social="Behance" target="_blank" rel="noreferrer"><i className='bx bxl-behance bx-tada-hover bx-border-circle' ></i></a>
          <a href="mailto:jon.coombs14@gmail.com" data-social="Gmail" target="_blank" rel="noreferrer"><i className='bx bxl-gmail bx-tada-hover bx-border-circle'></i></a>
        </div>
        </div>
      </section>

      <section id="quote" className="Quote">
        <div className="quote-content">
          <h1 className='quote'>“Design is not just what it looks like and feels like. Design is how it works.”</h1>
        </div>
      </section>

      <section id="project" className="Projects">
        <div className="project-content">
          <h1 className='project' data-bg-color = '#000000' data-fg-color='#ffff'>“Card 1”</h1>
          <p className='project' data-bg-color = '#000000' data-fg-color='#ffff'>Design is not just what it looks like and feels like. Design is how it works.</p>
        </div>
        <div className="project-content">
          <h1 className='project' data-bg-color = '#000000' data-fg-color='#ffff'>“Card 2”</h1>
          <p className='project' data-bg-color = '#000000' data-fg-color='#ffff'>Design is not just what it looks like and feels like. Design is how it works.</p>
        </div>
        <div className="project-content">
          <h1 className='project' data-bg-color = '#000000' data-fg-color='#ffff'>“Card 3”</h1>
          <p className='project' data-bg-color = '#000000' data-fg-color='#ffff'>Design is not just what it looks like and feels like. Design is how it works.</p>
        </div>
        <div className="project-content">
          <h1 className='project' data-bg-color = '#000000' data-fg-color='#ffff'>“Card 4”</h1>
          <p className='project' data-bg-color = '#000000' data-fg-color='#ffff'>Design is not just what it looks like and feels like. Design is how it works.</p>
        </div>
      </section>

      <section id="about" className="About">
        <div className="about-content">
          <h1 className='about' data-bg-color = '#000000' data-fg-color='#ffff'>“Design is not just what it looks like and feels like. Design is how it works.”</h1>
        </div>
      </section>

      <section id="contact" className="Contact">
        <div className="contact-content">
          <h1 className='contact' data-bg-color = '#ffff' data-fg-color='#ff0000'>“Design is not just what it looks like and feels like. Design is how it works.”</h1>
        </div>
      </section>
    </div>
  );
}

export default App;
