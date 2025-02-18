function generateNumber(min, max) {
    const numeroSorteado = document.querySelector('.numero-sorteado');
    const premioSorteado = document.querySelector('.premio-sorteado');
    const btnSorteio = document.querySelector('.btn-sorteio');
    const premioSorteio = document.querySelector('.premio');

    premioSorteado.style.display ="block";
    btnSorteio.style.display ="none";

    min = Math.ceil(1);
    max = Math.floor(20);

    const result = Math.floor(Math.random() * (max - min +1)) + min;

    numeroSorteado.innerText = result;

    if (result == "1") {
        premioSorteio.innerText ="Celular"
    }
    else if (result == "2") {
        premioSorteio.innerText ="Video Game"
    }
    else if (result == "3") {
        premioSorteio.innerText ="Tv 65"
    }
    else if (result == "4") {
        premioSorteio.innerText ="Moto"
    }
    else if (result == "5") {
        premioSorteio.innerText ="Carro"
    }
    else if (result == "6") {
        premioSorteio.innerText ="Casa"
    }else{
        premioSorteado .innerText ="Tente novamente!"
    }

}