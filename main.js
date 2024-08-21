import "./style.css";

const form = document.getElementById("kontakt");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("namn").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);
});
