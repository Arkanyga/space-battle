let picsToLoad = 0;
const shipPic = document.createElement("img");
let trackPics = [];


function loadImages() {
  let imageList = [
    { picName: shipPic, src: 'ship.png' }
  ]
  picsToLoad = imageList.length;

  for (let i = 0; i < picsToLoad; i++) {
    if (imageList[i].trackType != undefined) {
      loadImageForTrackCode(imageList[i].trackType, imageList[i].src);
    } else {
      beginLoadingImage(imageList[i].picName, imageList[i].src)
    }
  }
}

function beginLoadingImage(picName, src) {
  picName.onload = countLoadedImageAndLaunchIfReady;
  picName.src = 'images/' + src;
}

function loadImageForTrackCode(trackCode, src) {
  trackPics[trackCode] = document.createElement("img");
  beginLoadingImage(trackPics[trackCode], src);
}