/*Evento disparado quando a pagina está pronta para apresentação*/
window.onload = () => {
    /*Atribuindo um botão do HTML para uma variável global*/
    rightButton = document.getElementsByClassName("botao")[1];
    checkMarginNeed();
}

/*Evento disparado quando o document view é redimensionado*/
window.addEventListener('resize', () => {
    checkMarginNeed();
})

function checkMarginNeed() {
    /*Atribuindo o clientWidth de uma div de classe "container" para uma variável local*/
    let containerWidth = document
        .getElementsByClassName("filme-principal")[0]
        .getElementsByClassName("container")[0].clientWidth;

    /*Atribuindo um valor para a margem superior do botão "mais informações" 
    dependendo da largura do container à qual este botão está aninhado*/
    rightButton.style.marginTop = (containerWidth <= 443) ? '8px' : '0px';
}