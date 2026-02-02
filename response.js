const noButton = document.getElementById("no-button");
const yesButton = document.getElementById("yes-button");
const message = document.querySelector(".message");
const question = document.getElementById("question-heading");
const banner = document.getElementById("banner");
const audio = new Audio("congratulations.mp3");
function moveNoButton() {
    const container = document.querySelector(".container");

    const containerRect = container.getBoundingClientRect();
    const buttonRect = noButton.getBoundingClientRect();

    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

noButton.addEventListener("mouseenter", moveNoButton);
//for phone
noButton.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveNoButton();
});

yesButton.addEventListener("click", () => {
    question.style.display = "none";
    document.querySelector(".buttons").style.display = "none";

    message.style.display = "block";

    banner.src = "images/yes.gif";

    banner.style.transform = "scale(1.1)";

    audio.currentTime = 0;
    audio.play();
});
noButton.addEventListener("touchmove", (e) => {
    e.preventDefault();
    moveNoButton();
});
