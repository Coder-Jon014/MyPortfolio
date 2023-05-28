import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Main from './main.js';

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

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <Main />
    </React.StrictMode>
  );
});
