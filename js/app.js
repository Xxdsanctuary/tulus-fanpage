document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuBtn = document.getElementById('mobile-menu');
  const navLinks = document.getElementById('nav-links');

  mobileMenuBtn.addEventListener('click', () => {
    // Toggles the 'active' class on and off
    navLinks.classList.toggle('active');
  });
});

function scrollById(target) {
  return document.getElementById(`${target}`).scrollIntoView();
}