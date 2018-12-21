
const canvas = document.getElementById('gameCanvas'),
  canvasContext = canvas.getContext('2d'),
  FRAME_PER_SECOND = 30;


let p1 = new Car(87, 83, 65, 68, carPic);




window.onload = function () {
  loadImages();
  p1.initInput();
  countLoadedImageAndLaunchIfReady();
}


function loadingDoneSoStartGame() {
  setInterval(function () {
    moveEverething();
    drawEverething();
  }, 1000 / FRAME_PER_SECOND);
}

function countLoadedImageAndLaunchIfReady() {
  picsToLoad--;
  if (picsToLoad === 0) {
    loadingDoneSoStartGame();
  }
}

function drawEverething() {
  colorRect(0, 0, canvas.width, canvas.height, 'black')
  p1.carDraw();

}

function moveEverething() {
  p1.carMove();

}

