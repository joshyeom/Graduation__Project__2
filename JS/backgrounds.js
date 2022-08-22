const images = [
  "seoul-1.jpg",
  "seoul-2.jpg",
  "seoul-3.jpg",
  "seoul-4.jpg",
  "seoul-5.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/Seoul/${chosenImage}`;

document.body.appendChild(bgImage);
