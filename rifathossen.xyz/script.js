// Theme Toggle

const toggleButton =
document.getElementById("theme-toggle");

const savedTheme =
localStorage.getItem("theme");

if(savedTheme === "dark"){
    document.body.classList.add("dark");
    toggleButton.textContent = "☀️";
}

toggleButton.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const darkMode =
    document.body.classList.contains("dark");

    localStorage.setItem(
        "theme",
        darkMode ? "dark" : "light"
    );

    toggleButton.textContent =
    darkMode ? "☀️" : "🌙";

});

// Video Fallback

const video =
document.getElementById("introVideo");

const placeholder =
document.getElementById("videoPlaceholder");

video.addEventListener("error", () => {
    video.style.display = "none";
    placeholder.style.display = "flex";
});

video.addEventListener("loadeddata", () => {
    placeholder.style.display = "none";
});