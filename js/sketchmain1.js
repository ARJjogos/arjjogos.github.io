
let song;
function preload() {
  song = loadSound('mario.mp3');
}

function setup() {
  song = createAudio('mario.mp3');
  song.autoplay(true);
}

  function imageEnlarge() {
 document.getElementById('1').style.height="26%";
 document.getElementById('1').style.width="26%";
 document.getElementById('1').style.position='';
  
 }
function imageEnlargee() {
 document.getElementById('2').style.height="26%";
 document.getElementById('2').style.width="26%";
 document.getElementById('2').style.position='';
  
 }
function imageEnlargeee() {
 document.getElementById('3').style.height="26%";
 document.getElementById('3').style.width="26%";
 document.getElementById('3').style.position='';
  
 }
function imageReset() {

 document.getElementById('1').style.height="16%";
 document.getElementById('1').style.width="16%";
 document.getElementById('1').style.posit='';
 }
function imageResett() {

 document.getElementById('2').style.height="16%";
 document.getElementById('2').style.width="16%";
document.getElementById('2').style.position='';
 }
function imageResettt() {

 document.getElementById('3').style.height="16%";
 document.getElementById('3').style.width="16%";
 document.getElementById('3').style.position='';
 }
