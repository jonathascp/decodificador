let areaTexto = document.querySelector(".area_texto");
const btnCriptar = document.querySelector(".btn_criptografar");
const btnDescriptar = document.querySelector(".btn_descriptografar");
const mensagem = document.querySelector('.resultado_mensagem');
const img = document.querySelector('.imagem');

const resultado = document.querySelector('.resultado_texto');
btnCriptar.addEventListener("click", () => {
    let novoTexto = '';
    let texto = areaTexto.value;
    novoTexto = texto.replaceAll('e', 'enter').replaceAll('i', 'imes').replaceAll('a', 'ai').replaceAll('o', 'ober').replaceAll('u', 'ufat');
    mensagem.innerHTML = '';
    img.style.display = 'none';
    resultado.setAttribute('class', 'resultado_criptografado');
    resultado.innerHTML = novoTexto;

});

btnDescriptar.addEventListener("click", () => {
    let novoTexto = '';
    let texto = areaTexto.value;
    novoTexto = texto.replaceAll('enter', 'e').replaceAll('imes', 'i').replaceAll('ai', 'a').replaceAll('ober', 'o').replaceAll('ufat', 'u');
    mensagem.innerHTML = '';
    img.style.display = 'none';
    resultado.setAttribute('class', 'resultado_criptografado');
    resultado.innerHTML = novoTexto;

});


