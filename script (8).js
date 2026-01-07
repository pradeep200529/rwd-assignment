const button = document.getElementById("changeTextBtn");
const text = document.getElementById("welcomeText");

button.addEventListener("click", () => {
    text.innerText = "You clicked the button! 🎉";
});
