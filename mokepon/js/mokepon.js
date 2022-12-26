let ataqueJugador; //Se declararon variables globales para que se invoquen en cualquir función.
let ataqueEnemigo;


function iniciarJuego(){
    let botonMascotaJugador = document.getElementById("boton-mascota");
    // El metodo getElementById nos permite hacer referencia a un elemento de html por medio de su ID
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
    let botonFuego = document.getElementById("boton-fuego");
    botonFuego.addEventListener("click",ataqueFuego)
    let botonAgua = document.getElementById("boton-agua");
    botonAgua.addEventListener("click",ataqueAgua);
    let botonTierra = document.getElementById("boton-tierra");
    botonTierra.addEventListener("click",ataqueTierra);

}

function seleccionarMascotaJugador(){
    const inputHipodoge = document.getElementById("hipodoge");
    const inputCapipepo = document.getElementById("capipepo");
    const inputRatigueya = document.getElementById("ratigueya");
    const spanMascotaJugador = document.getElementById("mascota-jugador");

    if (inputHipodoge.checked){
        spanMascotaJugador.innerHTML = "Hipodoge";
    }else if (inputCapipepo.checked){
        spanMascotaJugador.innerHTML = "Capipepo";
    }else if (inputRatigueya.checked){
        spanMascotaJugador.innerHTML = "Ratigueya";
    } else{
        alert("Selecciona a una mascota para el ataque");
    }
    eleccionMascotaEnemigo();
}

function eleccionMascotaEnemigo(){
    let jugadaEnemigo = Aleatorio(1,3);
    const spanMascotaEnemigo = document.getElementById("mascota-enemigo");

    if(jugadaEnemigo==1){
        spanMascotaEnemigo.innerHTML = "Hipodoge";
    }else if(jugadaEnemigo==2){
        spanMascotaEnemigo.innerHTML = "Capipepo";
    }else{
        spanMascotaEnemigo.innerHTML = "Ratigueya";
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

function ataqueTierra(){
    ataqueJugador= "TIERRA"
    ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio=Aleatorio(1,3);
    if(ataqueAleatorio==1){
        ataqueEnemigo= "FUEGO";
    }else if(ataqueAleatorio==2){
        ataqueEnemigo= "AGUA";
    }else{
        ataqueEnemigo= "TIERRA";
    }
    resultadoDelAtaque();
   
}

function resultadoDelAtaque(){
    if (ataqueJugador==ataqueEnemigo){
        crearMensaje("EMPATE😶");
    }else if((ataqueJugador=="FUEGO" && ataqueEnemigo=="TIERRA")||(ataqueJugador=="AGUA" && ataqueEnemigo =="FUEGO")||(ataqueJugador=="TIERRA" && ataqueEnemigo== "AGUA")){
        crearMensaje("GANASTE🎉");
    }else{
        crearMensaje("PERDISTE😒");
    }
    
}

function crearMensaje(resultado){

    sectionMensajes = document.getElementById("mensajes"); // Se obtiene la sección del mensaje.
    let parrafo = document.createElement("p"); // Este método nos permite crear un elemento HTML especificando su (tagname=nombre de la etiqueta).
    // este método nos permite crear elementos html
    parrafo.innerHTML = "Tu mascota atacó con "+ataqueJugador+", la mascota del enemigo atacó con "+ataqueEnemigo+"; entonces "+resultado; 
    // Le pasamos el valor de la etiqueta creada por el anterior método. 
    sectionMensajes.appendChild(parrafo); //le añade el texto al elemento creado. 
    

}



function Aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}




window.addEventListener("load",iniciarJuego); //Esta función permite cargar todo el HTML para luego iniciar el código de javaScript

