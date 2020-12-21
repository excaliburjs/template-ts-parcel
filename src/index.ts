import { Engine, Loader } from "excalibur";
import { Player } from "./player";
import { Resources } from "./resources";

class Game extends Engine {
  initialize() {
    const player = new Player();
    this.add(player);

    const loader = new Loader();
    loader.addResource(Resources.Sword);
    this.start(loader);
  }
}

export const game = new Game();

game.initialize();
