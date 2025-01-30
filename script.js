// Function to reveal elements step by step
function revealElements() {
    let elements = [
        document.getElementById("title"),
        document.getElementById("message"),
        document.getElementById("details"),
        document.getElementById("invite-box"),
        document.getElementById("image-container")
    ];
    
    let delay = 500; // Delay time in ms

    elements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add("visible");
        }, delay * index);
    });
}

// Run animation after page loads
window.onload = () => {
    setTimeout(revealElements, 500); // Small delay for suspense
};
