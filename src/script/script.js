// ===== THEME TOGGLE =====
const toggle = document.querySelector('.theme-toggle');
const body = document.body;

toggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    toggle.textContent = 'Light Mode';
  } else {
    localStorage.setItem('theme', 'light');
    toggle.textContent = 'Dark Mode';
  }
});

window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggle.textContent = 'Light Mode';
  } else {
    toggle.textContent = 'Dark Mode';
  }
});



// ===== SCROLL TO TOP BUTTON =====
const scrollBtn = document.createElement('button');
scrollBtn.innerHTML = '↑';
scrollBtn.className = 'scroll-top';
document.body.appendChild(scrollBtn);

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});


const hamburger = document.getElementById("hid-btn");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
