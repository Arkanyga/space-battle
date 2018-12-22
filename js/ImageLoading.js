let picsToLoad = 0;
const shipPic = document.createElement("img");
const shipPicDriveOff = document.createElement("img");
const UFOPic = document.createElement("img");



function loadImages() {
  let imageList = [
    { picName: shipPicDriveOff, src: 'ship2.png' },
    { picName: shipPic, src: 'ship.png' },
    { picName: UFOPic, src: 'ufo.png' }
  ]
  picsToLoad = imageList.length;

  for (let i = 0; i < picsToLoad; i++) {

    beginLoadingImage(imageList[i].picName, imageList[i].src)

  }
}

function beginLoadingImage(picName, src) {
  picName.onload = countLoadedImageAndLaunchIfReady;
  picName.src = 'images/' + src;
}
