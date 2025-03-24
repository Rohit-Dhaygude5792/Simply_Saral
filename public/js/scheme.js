document.addEventListener("DOMContentLoaded", function() {
    // Dark Mode Toggle
    const darkModeToggle = document.getElementById("darkModeToggle");

    function setDarkMode(enabled) {
        if (enabled) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("darkMode", "true");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("darkMode", "false");
        }
    }

    // Load dark mode preference
    const darkModeSetting = localStorage.getItem("darkMode") === "true";
    setDarkMode(darkModeSetting);

    darkModeToggle.addEventListener("click", function() {
        setDarkMode(!document.body.classList.contains("dark-mode"));
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    function setDarkMode(enabled) {
      if (enabled) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'true');
      } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'false');
      }
    }
    const darkModeSetting = localStorage.getItem('darkMode') === 'true';
    setDarkMode(darkModeSetting);
    darkModeToggle.addEventListener('click', function() {
      setDarkMode(!document.body.classList.contains('dark-mode'));
    });
    
    // Carousel Animation
    const slides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;
    
    function showSlide(index) {
      slides.forEach((slide) => slide.classList.remove('active'));
      slides[index].classList.add('active');
    }
    
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
    
    // Start the carousel animation
    setInterval(nextSlide, 1500);
  });


