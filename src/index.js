// randomly render an image from assets to the canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var spawnButton = document.getElementById("spawn");

spawnButton.addEventListener("click", () => {
  var img = new Image();
  img.src = `./assets/bean${Math.floor(Math.random() * 10)}.png`;
  img.style.width = "10px";
  img.style.height = "10px";
  img.onload = () => {
    ctx.drawImage(
      img,
      Math.floor(Math.random() * (canvas.width - 100)) + 50,
      Math.floor(Math.random() * (canvas.height - 100)) + 50,
      22,
      50
    );
  };
});

const img = new Image();
img.src = `./assets/bean${Math.floor(Math.random()) * 10}.png`;

// setInterval(() => {}, 1000);

img.onload = () => {
  ctx.drawImage(
    imgs,
    this.position.x + this.parallaxOffsetX,
    this.position.y + this.parallaxOffsetY
  );
};
