let tamanhoAtual = 20; // Mesmo tamanho base definido no CSS

function alterarFonte(valor) {
  tamanhoAtual += valor;
  
  // Limita o tamanho para não quebrar o layout
  if (tamanhoAtual >= 16 && tamanhoAtual <= 32) {
    document.documentElement.style.fontSize = tamanhoAtual + 'px';
  }
}

function lerPagina() {
  // Cancela qualquer leitura em andamento
  window.speechSynthesis.cancel();

  const texto = document.getElementById('conselhos').innerText;
  const fala = new SpeechSynthesisUtterance(texto);
  fala.lang = 'pt-BR';
  fala.rate = 0.9; // Velocidade um pouco mais pausada

  window.speechSynthesis.speak(fala);
}
