let ataqueJugador; //Se declararon variables globales para que se invoquen en cualquir función.
let ataqueEnemigo;
let PersonajeJugador;
let vidasJugador= 3;
let vidasEnemigo= 3;





function iniciarJuego(){
    let botonPersonajeJugador = document.getElementById("boton-personaje");
    // El metodo getElementById nos permite hacer referencia a un elemento de html por medio de su ID
    botonPersonajeJugador.addEventListener("click", seleccionarPersonajeJugador);
    let botonFuego = document.getElementById("boton-fuego");
    botonFuego.addEventListener("click",ataqueFuego)
    let botonAgua = document.getElementById("boton-agua");
    botonAgua.addEventListener("click",ataqueAgua);
    let botonHacha = document.getElementById("boton-hacha");
    botonHacha.addEventListener("click",ataqueHacha);

}

function seleccionarPersonajeJugador(){
    const inputMario = document.getElementById("mario");
    const inputLuigi = document.getElementById("luigi");
    const inputBowser = document.getElementById("bowser");
    const spanPersonajeJugador = document.getElementById("personaje-jugador");
    

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
    }
    seleccionarPersonajeEnemigo();
}

function seleccionarPersonajeEnemigo(){
    let jugadaEnemigo = 0;
    const spanPersonajeEnemigo = document.getElementById("personaje-enemigo");
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
    let spanVidasJudador = document.getElementById("vidas-jugador");
    let spanVidasEnemigo = document.getElementById("vidas-enemigo");
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
    
}

function crearMensaje(resultado){

    sectionMensajes = document.getElementById("mensajes"); // Se obtiene la sección del mensaje.
    let parrafo = document.createElement("p"); // Este método nos permite crear un elemento HTML especificando su (tagname=nombre de la etiqueta).
    // este método nos permite crear elementos html
    parrafo.innerHTML = "Tu personaje atacó con "+ataqueJugador+", el personaje del enemigo atacó con "+ataqueEnemigo+"; entonces "+resultado; 
    // Le pasamos el valor de la etiqueta creada por el anterior método. 
    sectionMensajes.appendChild(parrafo); //le añade el texto al elemento creado. 
  
    

}



function Aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}




window.addEventListener("load",iniciarJuego); //Esta función permite cargar todo el HTML para luego iniciar el código de javaScript

