import { Actor, vec } from "excalibur";
import { Resources } from "./resources";

export class Player extends Actor {
  constructor() {
    super({
      pos: vec(150, 150),
      width: 25,
      height: 25,
    });
  }

  onInitialize() {
    this.addDrawing(Resources.Sword);
  }
}
