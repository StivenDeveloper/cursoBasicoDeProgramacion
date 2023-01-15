const sectionAtaque = document.getElementById("seleccionar-ataque")
const sectionReiniciar =document.getElementById("reiniciar");
const botonPersonajeJugador = document.getElementById("boton-personaje");
const botonFuego = document.getElementById("boton-fuego");
const botonAgua = document.getElementById("boton-agua");
const botonHacha = document.getElementById("boton-hacha");
const botanReiniciar = document.getElementById("boton-reiniciar")
const sectionPersonaje = document.getElementById("seleccionar-personaje");
const inputMario = document.getElementById("mario");
const inputLuigi = document.getElementById("luigi");
const inputBowser = document.getElementById("bowser");
const spanPersonajeJugador = document.getElementById("personaje-jugador");

const spanPersonajeEnemigo = document.getElementById("personaje-enemigo");

const spanVidasJudador = document.getElementById("vidas-jugador");
const spanVidasEnemigo = document.getElementById("vidas-enemigo")
const sectionMensaje = document.getElementById("resultado");
const ataqueDelJugador = document.getElementById("ataque-del-jugador");
const ataqueDelEnemigo = document.getElementById("ataque-del-enemigo");

//Array, una estructura de dato estático, que nos permite agrupar valores en una sola variable

let personajes = []

let ataqueJugador; //Se declararon variables globales para que se invoquen en cualquir función.
let ataqueEnemigo;
let PersonajeJugador;
let vidasJugador= 3;
let vidasEnemigo= 3;

//Programación orientada a objetos (clases y objetos)
class Personaje {
    constructor(nombre,foto,vida){
        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;
    }
}

let mario = new Personaje('Mario','./assets/pwd.png',5)

let luigi = new Personaje('Luigi','./assets/Luigi.png',5)

let bowser = new Personaje('Bowser','./assets/Bowser_Stock_Art_2021.png',5)

personajes.push(mario,luigi,bowser)

console.log(personajes)

function iniciarJuego(){
    sectionAtaque.style.display = "none";
    sectionReiniciar.style.display = "none";
    // El metodo getElementById nos permite hacer referencia a un elemento de html por medio de su ID
    botonPersonajeJugador.addEventListener("click", seleccionarPersonajeJugador);
    botonFuego.addEventListener("click",ataqueFuego)
    botonAgua.addEventListener("click",ataqueAgua);
    botonHacha.addEventListener("click",ataqueHacha);
    botanReiniciar.addEventListener("click",reiniciarJuego)
}

function seleccionarPersonajeJugador(){
    sectionAtaque.style.display = "flex"
    sectionPersonaje.style.display = "none"

    if (inputMario.checked){
        spanPersonajeJugador.innerHTML = "Mario";
        PersonajeJugador = "Mario"
    }else if (inputLuigi.checked){
        spanPersonajeJugador.innerHTML = "Luigi";
        PersonajeJugador ="Luigi"
    }else if (inputBowser.checked){
        spanPersonajeJugador.innerHTML = "Bowser";
        PersonajeJugador = "Bowser"
    } else{
        alert("Selecciona a un personaje para el ataque");
        reiniciarJuego();
    }
    seleccionarPersonajeEnemigo();
}

function seleccionarPersonajeEnemigo(){
    let jugadaEnemigo = 0;
    if(PersonajeJugador=="Mario"){
        jugadaEnemigo = Aleatorio(1,2)
        if(jugadaEnemigo==1){
            spanPersonajeEnemigo.innerHTML = "Luigi";
        }else{
            spanPersonajeEnemigo.innerHTML = "Bowser";
        }
    }else if(PersonajeJugador== "Luigi"){
        jugadaEnemigo = Aleatorio(1,2);
        if(jugadaEnemigo==1){
            spanPersonajeEnemigo.innerHTML = "Mario";
        }else{
            spanPersonajeEnemigo.innerHTML = "Bowser";
    }
    } else if(PersonajeJugador== "Bowser"){
        jugadaEnemigo = Aleatorio(1,2);
        if(jugadaEnemigo==1){
            spanPersonajeEnemigo.innerHTML = "Mario";
        }else{
            spanPersonajeEnemigo.innerHTML = "Luigi";
        }
    }
}

function ataqueFuego(){
    ataqueJugador = "FUEGO"
    ataqueAleatorioEnemigo();
}

function ataqueAgua(){
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo();
}

function ataqueHacha(){
    ataqueJugador= "HACHA"
    ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio=Aleatorio(1,3);
    if(ataqueAleatorio==1){
        ataqueEnemigo= "FUEGO";
    }else if(ataqueAleatorio==2){
        ataqueEnemigo= "AGUA";
    }else{
        ataqueEnemigo= "HACHA";
    }
    resultadosCombate();
   
}

function resultadosCombate(){
    if (ataqueJugador==ataqueEnemigo){
        crearMensaje("EMPATE😶");
    }else if((ataqueJugador=="FUEGO" && ataqueEnemigo=="HACHA")||(ataqueJugador=="AGUA" && ataqueEnemigo =="FUEGO")||(ataqueJugador=="HACHA" && ataqueEnemigo== "AGUA")){
        crearMensaje("GANASTE🎉");
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else{
        crearMensaje("PERDISTE😒");
        vidasJugador--;
        spanVidasJudador.innerHTML = vidasJugador
    }
    revisarVidas();
}

function revisarVidas(){
    if (vidasEnemigo==0){
        crearMensajeFinal("🎉🎉¡GANASTE LA PARTIDA!🎉🎉")
    }else if(vidasJugador==0){
        crearMensajeFinal("😭😭¡PERDISTE LA PARTIDA!😭😭")
    }
}

function crearMensajeFinal(resultadofinal){
    sectionMensaje.innerHTML = resultadofinal
    botonFuego.disabled = true;
    botonAgua.disabled = true;    
    botonHacha.disabled = true;
    sectionReiniciar.style.display = "block"
}

function crearMensaje(resultado){

     // Se obtiene la sección del mensaje.
    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDelEnemigo = document.createElement("p")

    sectionMensaje.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    // Este método nos permite crear un elemento HTML especificando su (tagname=nombre de la etiqueta).
    // este método nos permite crear elementos html
    // Le pasamos el valor de la etiqueta creada por el anterior método. 
     //le añade el texto al elemento creado.
    ataqueDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo) 
}

function reiniciarJuego(){
    location.reload();
}

function Aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}




window.addEventListener("load",iniciarJuego); //Esta función permite cargar todo el HTML para luego iniciar el código de javaScript

