const image = document.querySelector("#randImage");
const images = ["test1.png", "test2.png", "test3.png"];

const selectImage = images[Math.floor(Math.random() * images.length)];

const img = document.createElement("img");
img.setAttribute("src", `image/${selectImage}`);

image.appendChild(img);
