document.querySelector('.navbar-toggler').addEventListener('click', function() {
  // When the navbar toggler button is clicked, add Bootstrap utility classes to center the text
  document.querySelectorAll('.navbar-nav').forEach(function(nav) {
      nav.classList.toggle('text-center'); // Toggle the 'text-center' class on the navbar
  });
});