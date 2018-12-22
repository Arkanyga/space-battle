
const SPACESPEED_DECAY_MULT = 0.99,
  THRUST_POWER = 0.15,
  TURN_RATE = 0.03;


class Ship {
  constructor(gasKey, leftKey, rightKey, spaceBar, pic, picDriveOff) {
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.xv = 0;
    this.yv = 0;
    this.ang = 0;
    this.keyHeldGas = false;
    this.keyHeldTurnLeft = false;
    this.keyHeldTurnRight = false;
    this.controlKeySpaceBar = spaceBar;
    this.controlKeyForGas = gasKey;
    this.controlKeyForTurnLeft = leftKey;
    this.controlKeyForTurnRight = rightKey;
    this.pic = pic;
    this.picDriveOff = picDriveOff;
    this.myShot;
  }

  draw() {
    this.myShot.draw();
    if (this.keyHeldGas) {
      drawBitmapCenteredAtLocationWithRotation(this.pic, this.x, this.y, this.ang)
    } else {
      drawBitmapCenteredAtLocationWithRotation(this.picDriveOff, this.x, this.y, this.ang)
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


  move() {
    let nextCarX = this.x + this.xv;
    let nextCarY = this.y + this.yv;
    if (this.keyHeldGas) {
      this.xv += THRUST_POWER * Math.cos(this.ang);
      this.yv += THRUST_POWER * Math.sin(this.ang);
    }
    if (this.keyHeldTurnLeft) {
      this.ang -= TURN_RATE * Math.PI;
    }
    if (this.keyHeldTurnRight) {
      this.ang += TURN_RATE * Math.PI;
    }
    this.x = nextCarX;
    this.y = nextCarY;
    this.handleScreenWrap()
    this.xv *= SPACESPEED_DECAY_MULT;
    this.yv *= SPACESPEED_DECAY_MULT;
    this.myShot.move();
  }

  cannonFire() {
    this.myShot.shootFrom(this);
  }

  reset() {
    this.myShot.reset();
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
  }
  // carReset() {
  //   if (this.homeX == undefined) {
  //     for (let i = 0; i < trackGrid.length; i++) {
  //       if (trackGrid[i] === TRACK_PLAYER) {
  //         let tileRow = Math.floor(i / TRACK_COLS);
  //         let tileCol = i % TRACK_COLS;
  //         this.homeX = tileCol * TRACK_W + TRACK_W / 2;
  //         this.homeY = tileRow * TRACK_H + TRACK_H / 2;
  //         trackGrid[i] = TRACK_ROAD;
  //         break
  //       }
  //     }
  //   }
  //   this.carX = this.homeX;
  //   this.carY = this.homeY;
  //   this.carAng = -0.5 * Math.PI;
  //   this.timer = 0;
  //   this.timeCounter = 0;
  //   this.roundCounter = 0;
  //   this.bestTimeArr = []
  //   this.bestTime = 0;
  //   this.achieveFinish = false;
  // }

  checkMyShipAndShotCollisionAgainst(enemy) {
    if (enemy.isOverlappingPoint(this.x, this.y)) {
      this.reset();
      console.log(123);

    }
    if (this.myShot.hitTest(enemy)) {
      enemy.reset();
      this.myShot.reset();
    }
  }


  initInput() {
    this.myShot = new Shot();
    document.addEventListener('keydown', this.keyPressed.bind(this));
    document.addEventListener('keyup', this.keyReleased.bind(this));
  }




  setKeyHoldState(e, state) {
    switch (e.keyCode) {
      case this.controlKeyForGas:
        this.keyHeldGas = state;
        break
      case this.controlKeyForTurnLeft:
        this.keyHeldTurnLeft = state;
        break;
      case this.controlKeyForTurnRight:
        this.keyHeldTurnRight = state;
        break;
    }
  }

  keyPressed(e) {
    e.preventDefault();
    if (e.keyCode === this.controlKeySpaceBar) {
      this.cannonFire();
    }
    this.setKeyHoldState(e, true)
  }

  keyReleased(e) {
    e.preventDefault();
    this.setKeyHoldState(e, false)
  }
}


