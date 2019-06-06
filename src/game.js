import { Character } from "./Character";

export class Game {
  constructor() {
    //this.player = new Character();
  }


}



export function GetRandom(min, max) {
  return min + Math.floor(Math.random() * Math.floor((max + 1) - min));
}