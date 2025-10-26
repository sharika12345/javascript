const shariqa = "15 March 2025 22:00:00"; // 10:00 PM in 24-hour format

// Display the end date in the HTML
document.getElementById("end-date").innerText = shariqa;

// Select all input fields
const inputs = document.querySelectorAll("input");

function clock() {
    const end = new Date(shariqa);
    const now = new Date();
    const diff = (end - now) / 1000; // Get difference in seconds

    // If countdown is over, stop updating
    if (diff < 0) {
        document.querySelector(".overlay h2").innerText = "Countdown Over!";
        return;
    }

    // Convert remaining time into days, hours, minutes, and seconds
    inputs[0].value = Math.floor(diff / 86400); // Days (1 day = 86400 seconds)
    inputs[1].value = Math.floor((diff / 3600) % 24); // Hours (mod 24 to keep within a day)
    inputs[2].value = Math.floor((diff / 60) % 60); // Minutes (mod 60 to keep within an hour)
    inputs[3].value = Math.floor(diff % 60); // Seconds (mod 60 to keep within a minute)
}

// Run once immediately
clock();

// Run the function every second
setInterval(clock, 1000);
