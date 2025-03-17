function displayDateTime() {
    const dateTimeElement = document.getElementById("date-time");
    const now = new Date();
    const formattedDateTime = now.toLocaleString();
    dateTimeElement.textContent = `Current Date and Time: ${formattedDateTime}`;
}

displayDateTime();
setInterval(displayDateTime, 1000);

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        event.preventDefault();
    } else {
        alert("Message sent successfully!");
    }
});

const projectItems = document.querySelectorAll('.project-item');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    });

    projectItems.forEach(item => {
        observer.observe(item);
    });