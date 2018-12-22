
const SHOT_SPEED = 6,
  SHOT_LIFE = 30,
  SHOT_DISPLAY_RADIUS = 2.0;


class Shot {
  constructor() {
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.xv = 0;
    this.yv = 0;
    this.ang = 0;
    this.shotLife = 0;

  }

  draw() {
    if (this.shotLife > 0) {
      colorCircle(this.x, this.y, SHOT_DISPLAY_RADIUS, 'white')
    }
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

  shootFrom(ship) {
    if (this.shotLife <= 0) {
      this.x = ship.x;
      this.y = ship.y;

      this.xv = Math.cos(ship.ang) * SHOT_SPEED + ship.xv;
      this.yv = Math.sin(ship.ang) * SHOT_SPEED + ship.yv;
      this.shotLife = SHOT_LIFE;

    }
  }

  move() {
    if (this.shotLife > 0) {
      this.shotLife--;
      this.x += this.xv;
      this.y += this.yv;
    }

    this.handleScreenWrap()
  }

  hitTest(enemy) {
    if (this.shotLife <= 0) {
      return false;
    }
    return enemy.isOverlappingPoint(this.x, this.y)
  }



  reset() {
    this.shotLife = 0;
  }


}


