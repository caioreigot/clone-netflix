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
});

/*Criando uma tag <script> com um atributo src*/
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";

/*Inserindo a tag criada encima (antes) da primeira tag script encontrada no HTML */
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

/*Essa função cria um <iframe> (e o YouTube player) após o código da API baixar*/
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '315',
        width: '560',
        videoId: 'HhesaQXLuRY',
        events: {}
    });
}

/*Função que exibe/fecha o dialog do botão "ASSISTA AGORA" da tela principal */
function watchNowClick() {
    e = document.getElementById("dialog-watch-now-bg");
    e.style.visibility = (e.style.visibility == "visible") ? "hidden" : "visible";

    let dialogContainer = e.getElementsByClassName("dialog-container")[0];
    dialogContainer.style.opacity = (e.style.visibility == "visible") ? "1" : "0"; 

    /*Dando play no vídeo caso ele esteja na tela e parando o vídeo caso não esteja*/
    (e.style.visibility == "visible") ? player.playVideo() : player.stopVideo();
}

/*Função que exibe/fecha o dialog do botão "MAIS INFORMAÇÕES" da tela principal */
function moreInfoClick() {
    e = document.getElementById("dialog-more-info-bg");
    e.style.visibility = (e.style.visibility == "visible") ? "hidden" : "visible";

    let dialogContainer = e.getElementsByClassName("dialog-container")[0];
    dialogContainer.style.opacity = (e.style.visibility == "visible") ? "1" : "0"; 
}

function closeMoreInfoAndOpenTrailer() {
    moreInfoClick();
    watchNowClick();
}