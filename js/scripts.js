// scripts.js

document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if(targetSection){
        window.scrollTo({
          top: targetSection.offsetTop - 70, // Adjust for fixed navbar height
          behavior: 'smooth'
        });
      }
    });
  });
  