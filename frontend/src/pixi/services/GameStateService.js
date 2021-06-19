export default class GameStateService {
  constructor() {
    this.player = {
      id: null,
      nickname: null,
      x: null,
      y: null
    }

    this.companions = {};
  }
}