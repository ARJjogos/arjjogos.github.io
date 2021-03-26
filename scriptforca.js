let song;
function preload() {
  song = loadSound('mario.mp3');}

function setup() {
  song.loop();}
var adobe_programas = [

 "premiere",

 "photoshop",

 "illustrator",

 "lightroom",

 "aftereffects",

 "indesign",

]

let resposta = '';

let maxerradas = 6;

let erradas = 0;

let guessed = [];

let wordStatus = null;

function palavraAl() {

  resposta = adobe_programas[Math.floor(Math.random() * adobe_programas.length)];

}

function botoes() {

  let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>

    `

      <button

        class="btn btn-lg btn-primary m-2"

        id='` + letter + `'

        onClick="handleGuess('` + letter + `')"

      >

        ` + letter + `

      </button>

    `).join('');

  document.getElementById('keyboard').innerHTML = buttonsHTML;

}

function handleGuess(chosenLetter) {

  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;

  document.getElementById(chosenLetter).setAttribute('disabled', true);

  if (resposta.indexOf(chosenLetter) >= 0) {

    paladivinhada();

    seganhou();

  } else if (resposta.indexOf(chosenLetter) === -1) {

    erradas++;

   atuerros();

    seperdeu();

    atuimagem();

  }

}

function atuimagem() {

  document.getElementById('hangmanPic').src = 'images/' + erradas + '.png';

}

function seganhou() {

  if (wordStatus === resposta) {

    document.getElementById('keyboard').innerHTML = 'Bom trabalho!!!';

  }

}

function seperdeu() {

  if (erradas === maxerradas) {

    document.getElementById('wordSpotlight').innerHTML = 'A resposta era: ' + resposta;

    document.getElementById('keyboard').innerHTML = 'GAME OVER!Tenta novamente!';

  }

}

function paladivinhada() {

  wordStatus = resposta.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

  document.getElementById('wordSpotlight').innerHTML = wordStatus;

}

function atuerros() {

  document.getElementById('erradas').innerHTML = erradas;

}

function reset() {

  erradas = 0;

  guessed = [];

  document.getElementById('hangmanPic').src = 'images/'

  palavraAl();

  paladivinhada();

  atuerros();

  botoes();
  atuimagem();

}

document.getElementById('maxerradas').innerHTML = maxerradas;

palavraAl();

botoes();

paladivinhada();