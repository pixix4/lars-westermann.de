document.addEventListener("DOMContentLoaded", () => {
    const toggleTheme = document.getElementById("toggle-theme");
    if (toggleTheme) {
        toggleTheme.addEventListener("click", function() {
            const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
            if (prefersDarkScheme.matches) {
                document.body.classList.toggle("light-theme");
            } else {
                document.body.classList.toggle("dark-theme");
            }
        });
    }
});
