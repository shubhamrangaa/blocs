export default class Player {
  constructor(nickname, x, y) {
    this.nickname = nickname;
    this.x = x;
    this.y = y;
  }

  moveRight() {
    this.x += 1;
  }

  moveLeft() {
    this.x -= 1;
  }

  moveUp() {
    this.y -= 1;
  }

  moveDown() {
    this.y += 1;
  }
}
