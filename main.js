function validarFormulario() {
    // Obtém os valores dos campos A e B
    var valorA = document.getElementById('campoA').value;
    var valorB = document.getElementById('campoB').value;

    // Converte os valores para números
    valorA = parseFloat(valorA);
    valorB = parseFloat(valorB);

    // Verifica se B é maior que A
    if (valorB > valorA) {
        exibirMensagem(true, "Formulário válido!");
    } else {
        exibirMensagem(false, "Formulário inválido! O número B deve ser maior que o número A.");
    }
}

function exibirMensagem(valido, mensagem) {
    var elementoMensagem = document.getElementById('mensagem');

    // Limpa mensagens anteriores
    elementoMensagem.innerHTML = '';

    // Adiciona a nova mensagem
    var novaMensagem = document.createElement('div');
    novaMensagem.textContent = mensagem;
    novaMensagem.className = valido ? 'mensagem-positiva' : 'mensagem-negativa';
    elementoMensagem.appendChild(novaMensagem);
}