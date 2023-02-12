// randomly render an image from assets to the canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var spawnButton = document.getElementById("spawn");

spawnButton.addEventListener("click", () => {
  var img = new Image();
  if (Math.random() < 0.05) {
    img.src = `./assets/coolbean${Math.floor(Math.random() * 10)}.png`;
  } else {
    img.src = `./assets/bean${Math.floor(Math.random() * 10)}.png`;
  }
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
