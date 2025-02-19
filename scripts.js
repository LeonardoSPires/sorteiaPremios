

function generateNumber(min, max) {
    
    const premioSorteado = document.querySelector('.premio-sorteado');
    const btnSorteio = document.querySelector('.btn-sorteio');
    const numeroSorteado = document.querySelector('.numero-sorteado');

    premioSorteado.style.display ="block";
    btnSorteio.style.display ="none";

    min = Math.ceil(1);
    max = Math.floor(20);

    const result = Math.floor(Math.random() * (max - min +1)) + min;

    if (result === 1) {
      premioSorteado.innerText ="Parabéns você acaba de ganhar um(a): Celular"
    }
    else if (result === 2) {
      premioSorteado.innerText ="Parabéns você acaba de ganhar um(a): Video Game"
    }
    else if (result === 3) {
      premioSorteado.innerText ="Parabéns você acaba de ganhar um(a): Tv 65"
    }
    else if (result === 4) {
        premioSorteado.innerText ="Parabéns você acaba de ganhar um(a): Moto"
    }
    else if (result === 5) {
      premioSorteado.innerText ="Parabéns você acaba de ganhar um(a): Carro"
    }
    else if (result === 6) {
      premioSorteado.innerText ="Parabéns você acaba de ganhar um(a): Casa"
    }else{
        premioSorteado.innerText ="Tente novamente!"
    }

    numeroSorteado.innerText = result;

}

function credito() {
    const btnVoltar = document.getElementById('btn-voltar');
    const premioApagar = document.getElementById('premio-apagar');

    btnVoltar.style.display ="block";
    premioApagar.style.display ="none";
}






