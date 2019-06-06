export class Character {
    
    constructor(options) {
        this.str = 10;
        this.dex = 10;
        this.con = 10;
        this.int = 10;
        this.wis = 10;
        this.cha = 10;
        this.speed = 30;
        this.hitDice = 8
        this.hp = 8;
        this.totalHp = 8;
        Object.assign(this, options);
    }
    
}