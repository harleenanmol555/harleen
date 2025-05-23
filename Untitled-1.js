


// Change background color on button click
function changeBackgroundColor() {
    const colors = ['#F9F5EB', '#FFE4D9', '#F1F0F3', '#C5D1C5', '#E3D7B9']; // Neutral color palette
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Display greeting based on time of day
window.onload = function () {
    const greeting = document.getElementById('greeting');
    const currentTime = new Date();
    const hours = currentTime.getHours();

    if (hours < 12) {
        greeting.innerHTML = "Good Morning, Welcome to My Portfolio!";
    } else if (hours < 18) {
        greeting.innerHTML = "Good Afternoon, Great to see you!";
    } else {
        greeting.innerHTML = "Good Evening, Hope you're having a relaxing time!";
    }
}

// Handle form submission and display a personalized message
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const response = `Thank you, ${name}! We've received your message: "${message}". We'll get back to you at ${email} shortly.`;
    document.getElementById('form-response').innerText = response;

    // Optional: Clear form fields after submission
    document.getElementById('contact-form').reset();
});
