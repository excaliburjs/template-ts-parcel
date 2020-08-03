import { Engine } from 'excalibur'

class Game extends Engine {
  initialize() {
    this.start();
  }
}

export const game = new Game();

game.initialize()