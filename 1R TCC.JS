window.revelar = ScrollReveal({resert:true});

revelar.reveal('.header', {
    //estouchamando a classe a qual eu quero atribuir o efeito do scrollReveal.
    duration: 2000,
    distance: '100px',
    origin: 'left'
});

revelar.reveal('.nav-js', {
    duration: 2000,
    distance: '100px',
    origin: 'right'
});

revelar.reveal('.div-ende-1', {
    duration: 2000,
    distance: '100px',
    origin: 'left'
});




revelar.reveal('.foot-js', {
    duration: 2000,
    distance: '100px',
    origin: 'bottom'
});





//carrossel automatico sem botões nem interação

const swiper = new Swiper('.swiper', { //inicializaando o carrosel na class ".swiper" usando a bibliotreca swiper
    loop: true, // faz o carrossel repetir intinitamente (loop continuo)
    autoplay: { // configura a reprodução automatica
    delay: 2000, //tempo de espera entre os slide (2000ms = 2 segundos )
    disableOnInteraction: false, // continua a autoplay mesmo se o usuario interagir (ex: tentar arrastar)    

    },

    effect: 'fade', // define o tipo de transição entre as imagens (fade = dissolver)
    fadeEffect: { crossfade: true }, // faz com que o slide anterior desapareça suavemente enquanto o novo aparece 

    allowTouchmove: true, // impede que o usuario use o toque (arraste ) para muda o slide
}); 


// const options = {
//     strings: [
//         "Promoções e",
//         "Preços justos ",
//         "Venha ser feliz e ",
//         "aproveitem nossas ofertas."
//     ],

//     typeSpeed: 60,
//     backSpeed: 40,
//     loop: true,
//     backDelay: 1500,
//     smartBackspace: true 
// };


// new Typed(".text", options);

//Criamos um objeto chamamdo "options" com as configurações para o efeito de  digitação
const options = {
    // lista de frases que serão exibidas umas aoos outras
    strings: [
        "Bem-vindo ao ESTÉTICA AVANÇADA BE YOU",
        "Porque seu rosto é seu cartão de visita.",
        "Tratamentos que transformam. Produtos que realçam.",
        "Catastre-se aqui!"
    ],
    typeSpeed: 60, //Velocidade da digitação (em milisegundos por caractere)
    backSpeed: 40,//Velocidade em apagar os textos
    loop: true, //Faz ccon que as frases se repitam indifinidamente
    backDelay: 2000,//Temppo de espera (em milisegundos)antes de começar a apagar da proxima frase
    smartBackspace: true //Ptimiza o a´pagamento: apaga apenas os catacteres diferentes da próxima frase

};

//cria uma nova instância do Typed.js
//"#typed" é  o seletor do elemento HTML onde o texto será digitado
//"options" é o objeto com as configurações acima
new Typed("#typed", options); // Typed no se pode erra
