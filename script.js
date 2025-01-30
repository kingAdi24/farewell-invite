// Function to reveal elements step by step
function revealElements() {
    let elements = [
        document.getElementById("title"),
        document.getElementById("message"),
        document.getElementById("details"),
        document.getElementById("countdown-box"),
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

// Countdown Timer
function startCountdown() {
    const eventDate = new Date("February 8, 2025 09:00:00").getTime();
    const countdownElement = document.getElementById("countdown");

    setInterval(() => {
        let now = new Date().getTime();
        let timeLeft = eventDate - now;

        let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}

// Run animation and countdown after page loads
window.onload = () => {
    setTimeout(revealElements, 500);
    startCountdown();
};
