import { GetRandom } from "./game";

export class Character {

    constructor(options) {
        // this.str = 10;
        // this.dex = 10;
        // this.con = 10;
        // this.int = 10;
        // this.wis = 10;
        // this.cha = 10;
        this.speed = 30;
        this.hitDice = 8
        this.hp = 8;
        this.totalHp = 8;
        Object.assign(this, options);
        Object.assign(this, rollStats());        
    }

}


function rollStats() {
    let rolls = [];
    for (let i = 0; i < 6; i++) {
        for (let i = 0; i < 4; i++) {
            rolls.push(GetRandom(1, 6))
        }
    }
    return {
        rolls: rolls,
        str: addArray(rolls, 0, 4),
        dex: addArray(rolls, 4, 8),
        con: addArray(rolls, 8, 12),
        int: addArray(rolls, 12, 16),
        wis: addArray(rolls, 16, 20),
        cha: addArray(rolls, 20, 24)
    }
}

function addArray(array, start, num) {
    let sum = 0;
    if (num === undefined || num > array.length) {
        num = array.length;
    }

    if (start === undefined || start < 0 || start > array.length - 1) {
        start = array.length;
    }

    for (let i = start; i < num; i++) {
        sum += array[i];
    }
    return sum;
}