export class TUI {

  constructor(term, display) {
    this.display = display;
    this.term = term;
    console.log(this);
    //this.drawInventory();

  }


  drawInventory(c) {
    let display = this.display;
    let pos = { x: 1, y: 1 };
    display.drawText(0, 0, `|----------------|--------------------------------|`);
    for (let i = 1; i < 40; i++) {
      display.drawText(0, i, `|`);
      display.drawText(50, i, `|`);
      display.drawText(17, i, `|`);
    }
    display.drawText(0, 40, `|----------------|--------------------------------|`);
    pos.y = 2;
    if (c !== undefined) {

      display.drawText(pos.x, pos.y++, `Name: Adventurer`);
      display.drawText(pos.x, pos.y+=1, `Hp: ${c.totalHp}/${c.hp}`);    
      display.drawText(pos.x, pos.y++, `Str: ${c.str < 10 ? '%c{red}': '%c{green}'}${c.str}(${Math.floor((c.str - 10) / 2)})`);
      display.drawText(pos.x, pos.y++, `Dex: ${c.dex < 10 ? '%c{red}': '%c{green}'}${c.dex}(${Math.floor((c.dex - 10) / 2)})`);
      display.drawText(pos.x, pos.y++, `Con: ${c.con < 10 ? '%c{red}': '%c{green}'}${c.con}(${Math.floor((c.con - 10) / 2)})`);
      display.drawText(pos.x, pos.y++, `Wis: ${c.wis < 10 ? '%c{red}': '%c{green}'}${c.wis}(${Math.floor((c.wis - 10) / 2)})`);
      display.drawText(pos.x, pos.y++, `Cha: ${c.cha < 10 ? '%c{red}': '%c{green}'}${c.cha}(${Math.floor((c.cha - 10) / 2)})`);
    }
  }

  drawMap() {
    let display = this.display;
    let pos = { x: 55, y: 1 };
    display.drawText(pos.x, 0, `**************************`);
    for (let i = 1; i < 40; i++) {
      display.drawText(pos.x, i, `*`);
      display.drawText(pos.x + 25, i, `*`);      
    }
    display.drawText(pos.x, 40, `**************************`);
    

    //display.drawText(70, 10, `   ()   `);
  }

  drawBattle() {
    let display = this.display;
    let pos = { x: 85, y: 0 };
    display.drawText(pos.x, pos.y, `|-----------------------------------------------------|`);
    for (let i = 1; i < 40; i++) {
      display.drawText(pos.x, i, `|`);
      display.drawText(pos.x+ 54, i, `|`);      
    }
    display.drawText(pos.x, 40, `|-----------------------------------------------------|`);        
  }

}