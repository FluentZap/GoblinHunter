import 'jquery.terminal';
import '../node_modules/jquery.terminal/css/jquery.terminal.min.css';
import './styles.css';
import $ from 'jquery';
import { Display } from "../node_modules/rot-js/lib/index";
import {Character} from './character'


let intro =
  `
                                                                                                                      
@@@@@@@@   @@@@@@   @@@@@@@   @@@       @@@  @@@  @@@     @@@  @@@  @@@  @@@  @@@  @@@  @@@@@@@  @@@@@@@@  @@@@@@@   
@@@@@@@@@  @@@@@@@@  @@@@@@@@  @@@       @@@  @@@@ @@@     @@@  @@@  @@@  @@@  @@@@ @@@  @@@@@@@  @@@@@@@@  @@@@@@@@  
!@@        @@!  @@@  @@!  @@@  @@!       @@!  @@!@!@@@     @@!  @@@  @@!  @@@  @@!@!@@@    @@!    @@!       @@!  @@@  
!@!        !@!  @!@  !@   @!@  !@!       !@!  !@!!@!@!     !@!  @!@  !@!  @!@  !@!!@!@!    !@!    !@!       !@!  @!@  
!@! @!@!@  @!@  !@!  @!@!@!@   @!!       !!@  @!@ !!@!     @!@!@!@!  @!@  !@!  @!@ !!@!    @!!    @!!!:!    @!@!!@!   
!!! !!@!!  !@!  !!!  !!!@!!!!  !!!       !!!  !@!  !!!     !!!@!!!!  !@!  !!!  !@!  !!!    !!!    !!!!!:    !!@!@!    
:!!   !!:  !!:  !!!  !!:  !!!  !!:       !!:  !!:  !!!     !!:  !!!  !!:  !!!  !!:  !!!    !!:    !!:       !!: :!!   
:!:   !::  :!:  !:!  :!:  !:!   :!:      :!:  :!:  !:!     :!:  !:!  :!:  !:!  :!:  !:!    :!:    :!:       :!:  !:!  
::: ::::  ::::: ::   :: ::::   :: ::::   ::   ::   ::     ::   :::  ::::: ::   ::   ::     ::     :: ::::  ::   :::  
:: :: :    : :  :   :: : ::   : :: : :  :    ::    :       :   : :   : :  :   ::    :      :     : :: ::    :   : :  
                                                                                                                     
`


var term = $('#term1').terminal(function (command, term) {
  if (command.match(/^\s*exit\s*$/)) {
    //$('.tv').addClass('collapse');
    term.disable();
  } else if (command !== '') {
    processCommand(command, term);
  }
}, {
    name: 'js_demo',
    exit: false,
    onInit: function () {
      //this.echo('Type [[b;#fff;]camera()] to get video and [[b;#fff;]pause()]/[[b;#fff;]play()] to stop/play');
    },
    prompt: '>: ',
    greetings: intro
  });



var disp = new Display({ width: 140, height: 50 });
console.log(disp);
$(disp.getContainer()).appendTo('#term2');


disp.draw(5, 4, `lk`);
disp.draw(15, 4, "%", "#0f0");          /* foreground color */
disp.draw(25, 4, "#", "#f00", "#009");  /* and background color */




$(() => {
  let player = new Character();
  drawInventory(player);
  // var context = new AudioContext()
  // var o = context.createOscillator()
  // o.type = "square"
  // o.connect(context.destination)
  // o.start()
  // o.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1)  

});

function processCommand(command, term) {
  let cmd = command.split(" ");
  // if (cmd[0] == "status") {

  // }

  // if (cmd[0] == "virus") {

  // }



}



function drawInventory(c) {
  let pos = {x: 1, y: 1};
  disp.drawText(0, 0, `|---------------------------------------------------|`);
  for (let i = 1; i < 40; i++) {
    disp.drawText(0, i, `|`);
    disp.drawText(52, i, `|`);
  }
  disp.drawText(0, 40, `|---------------------------------------------------|`);
  pos.y = 10;
  disp.drawText(pos.x, pos.y++, `Str: ${c.str}`)
  disp.drawText(pos.x, pos.y++, `Dex: ${c.dex}`)
  disp.drawText(pos.x, pos.y++, `Con: ${c.con}`)
  disp.drawText(pos.x, pos.y++, `Wis: ${c.wis}`)
  disp.drawText(pos.x, pos.y++, `Cha: ${c.cha}`)

}