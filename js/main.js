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

/*Implementando o Owl Carousel com o JQuery*/
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})

/*Função que exibe/fecha o dialog do botão "MAIS INFORMAÇÕES" da tela principal */
function moreInfoClick() {
    e = document.getElementById("dialog-more-info-bg");
    e.style.visibility = (e.style.visibility == "visible") ? "hidden" : "visible";
}