console.log("Hey! How are you? Why are you checking the inspector? Ah, okay, you're not the one who hacked NASA, right? 🙂 Never mind, have a nice day!");

document.getElementById("currentYear").textContent = new Date().getFullYear();


document.addEventListener("DOMContentLoaded", () => {
    const largeCursor = document.querySelector(".cursor--large");
    const smallCursor = document.querySelector(".cursor--small");

    // Set initial opacity to 0
    largeCursor.style.opacity = "0";
    smallCursor.style.opacity = "0";

    // Show after 1 second by setting opacity to 1
    setTimeout(() => {
        largeCursor.style.opacity = "1";
        smallCursor.style.opacity = "1";
    }, 1000);
});


