window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = '#222';
  } else {
    navbar.style.backgroundColor = '#333';
  }
});

document.getElementById('newsletter-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Thank you for subscribing to our newsletter!');
});