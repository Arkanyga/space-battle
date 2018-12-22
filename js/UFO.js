
const UFO_SPEED = 1.9;
UFO_TIME_BETWEEN_CHANGE_DIR = 85;


class UFO {
  constructor(pic) {
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.xv = 0;
    this.yv = 0;
    this.pic = pic;

  }

  draw() {
    drawBitmapCenteredAtLocationWithRotation(this.pic, this.x, this.y, 0)
  }


  handleScreenWrap() {
    if (this.x > canvas.width) {
      this.x = 0;
    }
    if (this.x < 0) {
      this.x = canvas.width;
    }
    if (this.y < 0) {
      this.y = canvas.height;
    }
    if (this.y > canvas.height) {
      this.y = 0;
    }
  }



  move() {

    this.x += this.xv;
    this.y += this.yv;
    this.cyclesTilDirectionChange--;
    this.handleScreenWrap();
    if (this.cyclesTilDirectionChange <= 0) {
      let randAng = Math.random() * Math.PI * 2;
      this.xv = Math.cos(randAng) * UFO_SPEED;
      this.yv = Math.sin(randAng) * UFO_SPEED;
      this.cyclesTilDirectionChange = UFO_TIME_BETWEEN_CHANGE_DIR;
      console.log(randAng)
    }
  }

  reset() {
    this.cyclesTilDirectionChange = 0;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;

  }

}
