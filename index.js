const firstAudio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
const firstButton = document.querySelectorAll("#first");

firstButton.forEach(button => {
  button.addEventListener("click", () => {
    firstAudio.play();
  });
});

const secondAudio = new Audio("https://www.fesliyanstudios.com/play-mp3/388");
const secondButton = document.querySelectorAll("#second");

secondButton.forEach(button => {
  button.addEventListener("click", () => {
    secondAudio.play();
  });
});

const thirdAudio = new Audio("https://www.fesliyanstudios.com/play-mp3/389");
const thirdButton = document.querySelectorAll("#third");

thirdButton.forEach(button => {
  button.addEventListener("click", () => {
    thirdAudio.play();
  });
});

const fourthAudio = new Audio("https://www.fesliyanstudios.com/play-mp3/390");
const fourthButton = document.querySelectorAll("#fourth");

fourthButton.forEach(button => {
  button.addEventListener("click", () => {
    fourthAudio.play();
  });
});