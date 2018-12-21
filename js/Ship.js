
const GROUNDSPEED_DECAY_MULT = 0.95,
  DRIVE_POWER = 0.5,
  REVERSE_POWER = 0.2,
  TURN_RATE = 0.03,
  MAX_ROUNDS = 3,//кол-во кругов
  MIN_TURN_SPEED = 1.5;



class Ship {
  constructor(gasKey, reverseKey, leftKey, rightKey, shipPic) {
    this.shipX = canvas.width / 2;
    this.shipY = canvas.height / 2;
    this.shipSpeed = 0;
    this.shipAng = -0.5 * Math.PI;
    this.keyHeldGas = false;
    this.keyHeldReverse = false;
    this.keyHeldTurnLeft = false;
    this.keyHeldTurnRight = false;
    this.controlKeyForGas = gasKey;
    this.controlKeyForReverse = reverseKey;
    this.controlKeyForTurnLeft = leftKey;
    this.controlKeyForTurnRight = rightKey;
    this.shipPic = shipPic;

  }

  shipDraw() {
    drawBitmapCenteredAtLocationWithRotation(this.shipPic, this.shipX, this.shipY, this.shipAng)
  }


  handleScreenWrap() {
    if (this.shipX > canvas.width) {
      this.shipX = 0;
    }
    if (this.shipX < 0) {
      this.shipX = canvas.width;
    }
    if (this.shipY < 0) {
      this.shipY = canvas.height;
    }
    if (this.shipY > canvas.height) {
      this.shipY = 0;
    }
  }


  shipMove() {
    let nextCarX = this.shipX + Math.cos(this.shipAng) * this.shipSpeed;
    let nextCarY = this.shipY + Math.sin(this.shipAng) * this.shipSpeed;
    if (this.keyHeldGas) {
      this.shipSpeed += DRIVE_POWER;
    }
    if (this.keyHeldReverse) {
      this.shipSpeed -= REVERSE_POWER;
    }
    if (this.keyHeldTurnLeft && Math.abs(this.shipSpeed) > MIN_TURN_SPEED) {
      this.shipAng -= TURN_RATE * Math.PI;
    }
    if (this.keyHeldTurnRight && Math.abs(this.shipSpeed) > MIN_TURN_SPEED) {
      this.shipAng += TURN_RATE * Math.PI;
    }
    this.shipX = nextCarX;
    this.shipY = nextCarY;
    this.handleScreenWrap()
    this.shipSpeed *= GROUNDSPEED_DECAY_MULT;
  }

  initInput() {
    document.addEventListener('keydown', this.keyPressed.bind(this));
    document.addEventListener('keyup', this.keyReleased.bind(this));
  }




  setKeyHoldState(e, state) {
    switch (e.keyCode) {
      case this.controlKeyForGas:
        this.keyHeldGas = state;
        break
      case this.controlKeyForReverse:
        this.keyHeldReverse = state;
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
    this.setKeyHoldState(e, true)
  }

  keyReleased(e) {
    e.preventDefault();
    this.setKeyHoldState(e, false)
  }
}


