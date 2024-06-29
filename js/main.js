//Menu Hamburguesa
const $burger = document.querySelector(".burger");
const $navList = document.querySelector(".nav-list");

$burger.addEventListener("click", ()=> {
    $burger.classList.toggle("activate");
    $navList.classList.toggle("activate");
})


//Leer mas 
let $vermas_btn = document.getElementById('vermas_btn');
let $hidetext = document.getElementById('hidetext');

$vermas_btn.addEventListener("click", toggleText);

function toggleText(){
    $hidetext.classList.toggle('show')
    if($hidetext.classList.contains('show'))
        $vermas_btn.innerHTML='Leer Menos';
    else
        $vermas_btn.innerHTML='Leer Mas';

}

//Mejores Episodios 1

let $hide_episodios = document.getElementById('hide-episodios');
let $episodios_btn = document.getElementById('episodios-btn');

$episodios_btn.addEventListener("click",toggleEp)

function toggleEp(){
    $hide_episodios.classList.toggle('show-episodios');
    if($hide_episodios.classList.contains('show-episodios'))
        $episodios_btn.innerHTML='Ocultar Episodios';
    else
        $episodios_btn.innerHTML='Mejores Episodios';

}

//Mejores Episodios 2

let $hide_episodios2 = document.getElementById('hide-episodios2');
let $episodios_btn2 = document.getElementById('episodios-btn2');

$episodios_btn2.addEventListener("click",toggleEp2)

function toggleEp2(){
    $hide_episodios2.classList.toggle('show-episodios');
    if($hide_episodios2.classList.contains('show-episodios'))
        $episodios_btn2.innerHTML='Ocultar Episodios';
    else
        $episodios_btn2.innerHTML='Mejores Episodios';

}



