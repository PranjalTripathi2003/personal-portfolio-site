const scrollUp = document.querySelector("#scroll-up");
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const projectsContainer = document.querySelector(".projects-container");
let scrollAmount = 0;
const scrollStep = 300;

prevBtn.addEventListener("click", () => {
  projectsContainer.scrollBy({
    left: -scrollStep,
    behavior: "smooth",
  });
});

nextBtn.addEventListener("click", () => {
  projectsContainer.scrollBy({
    left: scrollStep,
    behavior: "smooth",
  });
});


// ...existing code...

const darkModeToggle = document.getElementById('dark-mode-toggle');

// Check for saved user preference
if (localStorage.getItem('dark-mode') === 'enabled') {
  document.body.classList.add('dark-mode');
  darkModeToggle.innerHTML = '<ion-icon name="sunny-outline"></ion-icon>';
} else {
  darkModeToggle.innerHTML = '<ion-icon name="moon-outline"></ion-icon>';
}

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  if (document.body.classList.contains('dark-mode')) {
    darkModeToggle.innerHTML = '<ion-icon name="sunny-outline"></ion-icon>';
    localStorage.setItem('dark-mode', 'enabled');
  } else {
    darkModeToggle.innerHTML = '<ion-icon name="moon-outline"></ion-icon>';
    localStorage.setItem('dark-mode', 'disabled');
  }
});

