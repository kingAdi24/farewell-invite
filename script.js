// Countdown Timer Script
function startCountdown() {
    const eventDate = new Date('February 8, 2025 09:00:00').getTime();

    const timer = setInterval(() => {
        const now = new Date().getTime();
        const difference = eventDate - now;

        if (difference <= 0) {
            document.getElementById("countdown").innerHTML = "The Farewell Party has started! 🎉";
            clearInterval(timer);
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = `Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}

// Start the countdown when the page loads
window.onload = startCountdown;
