var correct= 3
const mensagemElement = document.getElementById("msg");


window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new window.SpeechRecognition();
recognition.start();


function onSpeak(event) {
  const mensagem = event.results[0][0].transcript;
  escreverTexto(mensagem);
  verificar(mensagem);
}

function escreverTexto(message) {
  menssagemElement.innerHTML = `
    <div>A sua resposta: </div>
    <span class="box">${message}</span>
  `;
}

function verificar(mensagem) {
  const answer = +mensagem;
  
  if (answer === correct) {
    document.body.innerHTML = `
          <h2>Parabéns! Acertas-te! Vais ser redirecionado em alguns segundos... <br><br>
          A resposta era (3) Uma linguagem de programação</h2>
          
        `;
    
  } 
  if (answer === correct){ setTimeout(function(){ window.location.href= 'load.html';}, 3500);}

  else if (answer !== correct ){
 mensagemElement.innerHTML += "<div>Resposta errada :/</div>";
  } 
}

// Event Listeners
recognition.addEventListener("result", onSpeak);
recognition.addEventListener("end", () => recognition.start());

