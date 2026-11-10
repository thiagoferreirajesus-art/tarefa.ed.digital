const botoesCurtir = document.querySelectorAll(".curtir");
botoesCurtir.forEach(function(botoesCurtir){
let curtiu = false;
botaoCurtir.addEventListener("click", curtir);
function curtir(){
const contador = botaoCurtir.querySelector("span");
if(curtiu === false){
contador.textContent++;
curtiu = true;
} else{
contador.textContent--;
curtiu = false;
}
}
}
);
const btnTema = document.querySelector("btn-tema");
btnTema.addEventListener*("click", mudarTema);
function mudarTema(){
    document.body.classList.toggle("tena escuro");
}