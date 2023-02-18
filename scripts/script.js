let backBatton = document.querySelector("#back");
let nextBatton = document.querySelector("#next");
let image = document.querySelector("#image");
let position = 0;
let images = [
  "./images/1.jpg",
  "./images/2.jpg",
  "./images/3.jpg",
  "./images/4.jpg",
  "./images/5.jpg",
  "./images/6.jpg",
];

backBatton.addEventListener("click", (event) => {
  if (position == 0) {
    position = images.length - 1;
  } else {
    position--;
  }
  image.src = images[position];
});

nextBatton.addEventListener("click", (event) => {
  if (position == images.length - 1) {
    position = 0;
  } else {
    position++;
  }
  image.src = images[position];
});
