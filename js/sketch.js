let img;
let song;
function preload() {
  song = loadSound('mario.mp3');
img = loadImage("som1.png");}

function setup() {
  song = createAudio('mario.mp3');
  song.autoplay(true);
}
function draw() { image(img,250,150,150,150);}
function mousePressed() {
 
    song.stop();
 background(img);
  
}
function imageEnlarge() {
 document.getElementById('1').style.height="28%";
 document.getElementById('1').style.width="28%";
 document.getElementById('1').style.position='';
  
 }
function imageEnlargee() {
 document.getElementById('2').style.height="28%";
 document.getElementById('2').style.width="28%";
 document.getElementById('2').style.position='';
  
 }
function imageEnlargeee() {
 document.getElementById('3').style.height="28%";
 document.getElementById('3').style.width="28%";
 document.getElementById('3').style.position='';
  
 }
function imageReset() {

 document.getElementById('1').style.height="18%";
 document.getElementById('1').style.width="18%";
 document.getElementById('1').style.posit='';
 }
function imageResett() {

 document.getElementById('2').style.height="18%";
 document.getElementById('2').style.width="18%";
document.getElementById('2').style.position='';
 }
function imageResettt() {

 document.getElementById('3').style.height="18%";
 document.getElementById('3').style.width="18%";
 document.getElementById('3').style.position='';
 }
