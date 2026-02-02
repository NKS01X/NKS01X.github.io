const noButton = document.getElementById("no-button");
const yesButton = document.getElementById("yes-button");
const message = document.querySelector(".message");
const question = document.getElementById("question-heading");
const banner = document.getElementById("banner");
const audio = new Audio("congratulations.mp3");

let prevX = -1000;
let prevY = -1000;

function moveNoButton() {
    const container = document.querySelector(".container");

    const containerRect = container.getBoundingClientRect();
    const buttonRect = noButton.getBoundingClientRect();

    const maxX = Math.max(0, containerRect.width - buttonRect.width);
    const maxY = Math.max(0, containerRect.height - buttonRect.height);

    let randomX, randomY;
    let attempts = 0;

    do {
        randomX = Math.random() * maxX + 120;
        randomY = Math.random() * maxY + 120;
        attempts++;
    } while (
        Math.abs(randomX - prevX) < 120 &&
        Math.abs(randomY - prevY) < 120 &&
        attempts < 10
    );

    prevX = randomX;
    prevY = randomY;

    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

noButton.addEventListener("mouseenter", moveNoButton);

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
