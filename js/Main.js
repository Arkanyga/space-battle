
const canvas = document.getElementById('gameCanvas'),
  canvasContext = canvas.getContext('2d'),
  FRAME_PER_SECOND = 30;


let ship = new Ship(87, 65, 68, shipPic, shipPicDriveOff);




window.onload = function () {
  loadImages();
  ship.initInput();
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
  ship.shipDraw();

}

function moveEverething() {
  ship.shipMove();

}

