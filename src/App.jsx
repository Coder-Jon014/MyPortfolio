// import logo from './logo.svg';
import './App.css';
import { gsap } from "gsap";
import { Flip } from 'gsap/Flip';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from 'gsap/all';
import Lenis from '@studio-freight/lenis'
import SplitType from 'split-type'
// import  ExpandLessIcon  from '@mui/icons-material/ExpandLess';
// import { Fab } from '@mui/material';
import Header from './Sections/Header'; 
import Home from './Sections/Home'; 
// import Project from './Sections/Project';
import Quote from './Sections/Quote';
// import About from './Sections/About';
// import Contact from './Sections/Contact';


<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />

var roles = ["Frontend Developer", "Mobile Developer", "UX Designer", "Passionate Creator"];
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

// function activeProjectCards(){
//   const cards = document.querySelectorAll('.project-content')
//   cards.forEach((card, i) => {
//     card.addEventListener('click', () => {
//       // Get State
//       const state = Flip.getState(cards);

//       // Add active class to flip and inactive to others
//       const isCardActive = card.classList.contains('active');
//       cards.forEach((otherCard, otherIndex) => {
//         otherCard.classList.remove('active');
//         otherCard.classList.remove('is-inactive');
//         if (!isCardActive && otherIndex !== i) otherCard.classList.add('is-inactive');
//       });
//       if (!isCardActive) card.classList.add('active');

//       Flip.from(state, {
//         duration: 1,
//         ease: "expo.out",
//         absolute: true,
//       });
//     });
//   });
// }

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

  // activeProjectCards(); // Activate project cards
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
      scrollToSection('quote');
    });
  }

  // Handle click event for "Project" button
  const projectLink = document.querySelector('.navbar .project');
  if (projectLink) {
    projectLink.addEventListener('click', function(event) {
      event.preventDefault();
      scrollToSection('quote');
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
  quoteSplitTypes.forEach((line, i) => {
    const text = new SplitType(line, { types: 'lines' })
    gsap.from(text.lines, {
      scrollTrigger: {
        trigger: line,
        start: 'top 100%',
        end: 'top 20%',
        scrub: true,
        // markers: true,
      },
      opacity: 0.3,
      stagger: 0.5,
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

// const styles = {
//   goToTopButton: {
//     position: 'fixed',
//     bottom: '20px',
//     right: '20px',
//     zIndex: 1000, // To ensure it's above other content
//     // color: 'white', // Set the color to white
//   },
// };

// const scrollToTop = () => {
//   gsap.to(window, { duration: 1, scrollTo: { y: 0 } });
// };


function App() {
  
  return (
    <div className="App">
      <Header />
      <Home />
      <Quote />
      {/* <Project />
      <About />
      <Contact />
      <Fab sx={styles.goToTopButton} onClick={scrollToTop}>
            <ExpandLessIcon fontSize="large" />
      </Fab> */}
    </div>
  );
}

export default App;
