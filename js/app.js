var jogosAlugados = 0;

function declaraAlugados() {
  let mensagem = "";
  switch (jogosAlugados) {
    case 0:
      mensagem = 'Nenhum jogo alugado';
      break;
    case 1:
      mensagem = '1 jogo alugado';
      break;
    default:
      mensagem = `${jogosAlugados} jogos alugados`;
  }
    console.log(mensagem);
}

function alterarStatus(id){
  let itemClicado = document.getElementById(`game-${id}`);
  
  let imagem = itemClicado.children[0];
  //let imagem = itemClicado.querySelector('.dashboard__item__img');
  let botao = itemClicado.children[2];
  //let botao = itemClicado.querySelector('.dashboard__item__button');

  switch(botao.textContent){
    case 'Alugar':
      imagem.classList.add('dashboard__item__img--rented');
      botao.classList.add('dashboard__item__button--return');
      botao.innerText = "Devolver";
      jogosAlugados++;
      break;
    
    case 'Devolver':
      if (confirm('Confirma a devolução do jogo?')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.innerText = "Alugar";
        jogosAlugados--;
        break;
      }
  }
  declaraAlugados();
}

document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    declaraAlugados();
});
