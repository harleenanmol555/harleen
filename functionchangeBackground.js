function changeBackground() {
  const colors = ['#FFDEAD', '#ADD8E6', '#D3FFCE', '#FFE4E1'];
  document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

function displayGreeting() {
  const now = new Date();
  const hour = now.getHours();
  let message = "Hello!";
  if (hour < 12) message = "Good morning!";
  else if (hour < 18) message = "Good afternoon!";
  else message = "Good evening!";
  document.getElementById("greeting").textContent = message;
}

function displayInput(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;
  document.getElementById("output").innerHTML = `<p>Thanks, <strong>${name}</strong>! You said: "${message}"</p>`;
}

window.onload = displayGreeting;