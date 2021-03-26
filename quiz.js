var correct= 3
const messageElement = document.getElementById("msg");


window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new window.SpeechRecognition();
recognition.start();


function onSpeak(event) {
  const message = event.results[0][0].transcript;
  escreverTexto(message);
  verificar(message);
}

function escreverTexto(message) {
  messageElement.innerHTML = `
    <div>A sua resposta: </div>
    <span class="box">${message}</span>
  `;
}

function verificar(message) {
  const answer = +message;
  
  if (answer === correct) {
    document.body.innerHTML = `
          <h2>Parabéns! Acertas-te! Vais ser redirecionado em alguns segundos... <br><br>
          A resposta era (3) Uma linguagem de programação</h2>
          <button class="play-again" id="play-again">Play Again</button>
        `;
    
  } 
  if (answer === correct){ setTimeout(function(){ window.location.href= 'load.html';}, 3500);}

  else if (answer !== correct ){
    messageElement.innerHTML += "<div>Resposta errada :/</div>";
  } 
}

// Event Listeners
recognition.addEventListener("result", onSpeak);
recognition.addEventListener("end", () => recognition.start());

