const words = ["Create", "Play", "Enjoy", "Love", "Build", "Design", "Craft", "Code", "Develop", "Solve", "Shape", "Dream"];
let index = 0;

function changeWord() {
    const wordElement = document.getElementById("changing-word");

    // Add the 'hidden' class to fade out the word
    wordElement.classList.add("hidden");

    // Wait for the fade-out to complete before changing the word
    setTimeout(() => {
        // Change the word after the fade-out (500ms)
        index = (index + 1) % words.length;
        wordElement.textContent = words[index];

        // Remove the 'hidden' class to trigger fade-in
        wordElement.classList.remove("hidden");
    }, 500); // Timeout for fade-out duration
}

// Change the word every 2.5 seconds
setInterval(changeWord, 2500);
 