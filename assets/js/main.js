
// obtendo o formulário
const form = document.querySelector('#form');

// 
form.addEventListener("submit", function (e) {
    e.preventDefault(); // não deixar o formulário ser enviado
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    
    /* tentando converter o valor digitado para Number, caso não seja
     possível, o valor das variáveis será falso. */
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }else if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const categoriaImc = getCategoriaImc(imc);

    const msg = `Seu IMC é ${imc} ( ${categoriaImc} ).`;
    setResultado(msg, true);
})

function getCategoriaImc (imc) {
    const categoria = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 
        'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

     if (imc >= 39.9) return categoria[5];
     if (imc >= 34.9) return categoria[4];
     if (imc >= 29.9) return categoria[3];
     if (imc >= 24.9) return categoria[2];
     if (imc >= 18.5) return categoria[1];
     if (imc < 18.5) return categoria[0];

     return;
}

function getImc(peso, altura) {
    return (peso / altura ** 2).toFixed(2);
}

function criaParagrafo () {
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';    
    
    const p = criaParagrafo();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}
