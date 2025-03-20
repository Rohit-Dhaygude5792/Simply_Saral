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
