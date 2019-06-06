import 'jquery.terminal';
import '../node_modules/jquery.terminal/css/jquery.terminal.min.css';
import './styles.css';
import $ from 'jquery';
import { Display } from "../node_modules/rot-js/lib/index";
import { Character } from './character'
import { Game } from './game';
import { TUI } from './ui';

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


var game, ui, disp;
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
    greetings: ""
  });

$(() => {
  disp = new Display({ width: 140, height: 50 });
  $(disp.getContainer()).appendTo('#term2');  


  game = new Game(disp);
  game.player = new Character();
  ui = new TUI(term, disp);
  term.clear();
  term.echo(intro);
  ui.drawInventory(game.player);  
  ui.drawMap();
  ui.drawBattle();
});



function processCommand(command, term) {
  let cmd = command.split(" ");
  if (cmd[0] == "start" && game == undefined) {
 
  }

  // if (cmd[0] == "virus") {

  // }
}
