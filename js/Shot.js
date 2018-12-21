
const SHOT_SPEED = 0.6,
  SHOT_LIFE = 30,
  SHOT_DISPLAY_RADIUS = 2.0;


class Shot {
  constructor() {
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.driftX = 0;
    this.driftY = 0;
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
    if (this.shotLife === 0) {
      this.x = ship.x;
      this.y = ship.y;

      this.xv = 0;
      this.yv = 0;
      this.shotLife = SHOT_LIFE;
    }
  }

  move() {
    if (this.shotLife > 0) {
      this.shotLife--;
    }
    // let nextCarX = this.x + this.driftX;
    // let nextCarY = this.y + this.driftY;
    // if (this.keyHeldGas) {
    //   this.driftX += THRUST_POWER * Math.cos(this.ang);
    //   this.driftY += THRUST_POWER * Math.sin(this.ang);
    // }
    // if (this.keyHeldTurnLeft) {
    //   this.ang -= TURN_RATE * Math.PI;
    // }
    // if (this.keyHeldTurnRight) {
    //   this.ang += TURN_RATE * Math.PI;
    // }
    // this.x = nextCarX;
    // this.y = nextCarY;
    // this.handleScreenWrap()
    // this.driftX *= SPACESPEED_DECAY_MULT;
    // this.driftY *= SPACESPEED_DECAY_MULT;
  }




  reset() {
    this.shotLife = 0;
  }



  initInput() {
    document.addEventListener('keydown', this.keyPressed.bind(this));
    document.addEventListener('keyup', this.keyReleased.bind(this));
  }




  // setKeyHoldState(e, state) {
  //   switch (e.keyCode) {
  //     case this.controlKeyForGas:
  //       this.keyHeldGas = state;
  //       break
  //     case this.controlKeyForTurnLeft:
  //       this.keyHeldTurnLeft = state;
  //       break;
  //     case this.controlKeyForTurnRight:
  //       this.keyHeldTurnRight = state;
  //       break;
  //   }
  // }

  // keyPressed(e) {
  //   e.preventDefault();
  //   this.setKeyHoldState(e, true)
  // }

  // keyReleased(e) {
  //   e.preventDefault();
  //   this.setKeyHoldState(e, false)
  // }
}


