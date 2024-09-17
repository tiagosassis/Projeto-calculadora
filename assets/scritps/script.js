function Clear() {
    let input = document.getElementById('input-label');
    let result = document.getElementById('result-label');

    document.getElementById('input-label').innerHTML = "";
    document.getElementById('result-label').innerHTML = "0";

    result.style.fontSize = "1.5em";
    result.style.lineHeight = "3.2em";
    input.style.fontSize = "2.8em";
    input.style.lineHeight = "1.5em";
    
    /*Quando o resultado é solicitado, isso altera os valores padrões de fontSize e fontHeight tanto do label de resultado,
    quanto do label de input, essa função alem de limpar ambos, também volta os valores ao padrão*/
}

function Insert(num) {
    let input = document.getElementById('input-label').innerHTML;
    if(input == 0){
        document.getElementById('input-label').innerHTML = num;
    }
    else{
        if(input.length == 10 || input.length + num.length > 10){
            return; // limitação de caracteres para evitar overflow no label
        }
        document.getElementById('input-label').innerHTML = input + num;
    }
    
}

function BackSpace(){
    let input = document.getElementById('input-label').innerHTML;
    if(!(input == '0' || input == '')){
        if(input.length == 1){
            document.getElementById('input-label').innerHTML = 0;
        }
        else{
            document.getElementById('input-label').innerHTML = input.substring(0, input.length - 1);
        }
    }
    else{
        document.getElementById('input-label').innerHTML = 0;
    }
}

function Result() {
    let input = document.getElementById('input-label').innerHTML;
    let result;

    if(input.length > 0 ){
        result = '= ' + eval(input);
        if(result.length > 11){
            result = result.substring(0, 11); // limitação de caracteres para evitar overflow no label
        }
        document.getElementById('result-label').innerHTML = '' + result;
    }
}

function ResizeFontAndLine() {
    // Ao solicitar o resultado, o tamanho e posicionamento das fontes serão alterados
    let input = document.getElementById('input-label');
    let result = document.getElementById('result-label');

    result.style.fontSize = "2.8em";
    result.style.lineHeight = "1.5em";

    input.style.fontSize = "1.5em";
    input.style.lineHeight = "3.2em";
}

document.getElementById('calculator').addEventListener('click', Animation);

function Animation(evt) {
    let animationTarget = evt.target;
    if(evt.target.localName == 'button'){
        animationTarget.style.animation = "";
        setTimeout(() => animationTarget.style.animation = "ResizeButtonAnimation .1s linear");
    }
    if(evt.target.localName == 'span'){
        if(evt.target.id == 'dark-mode' || evt.target.id == 'light-mode'){
            animationTarget = document.getElementById('mode');
            animationTarget.style.animation = "";
            setTimeout(() => animationTarget.style.animation = "ResizeButtonAnimation .1s linear");
        }
        if(evt.target.id == 'backspace-icon'){
            animationTarget = document.getElementById('backspace');
            animationTarget.style.animation = "";
            setTimeout(() => animationTarget.style.animation = "ResizeButtonAnimation .1s linear");
        }
    }
}

document.getElementById('mode').addEventListener('click', ()=>{
    document.querySelector('html').classList.toggle('dark-mode');
    // função para alternar entre light mode e dark mode
})