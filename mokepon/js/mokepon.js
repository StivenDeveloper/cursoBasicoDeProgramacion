let ataqueJugador;


function iniciarJuego(){
    let botonMascotaJugador = document.getElementById("boton-mascota");
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
    const mascotaJugador = document.getElementById("mascota-jugador");

    if (inputHipodoge.checked){
        mascotaJugador.innerHTML = "Hipodoge";
    }else if (inputCapipepo.checked){
        mascotaJugador.innerHTML = "Capipepo";
    }else if (inputRatigueya.checked){
        mascotaJugador.innerHTML = "Ratigueya";
    } else{
        alert("Selecciona a una mascota para el ataque");
    }
    eleccionMascotaEnemigo();
}

function eleccionMascotaEnemigo(){
    let jugadaEnemigo = ataqueAleatorio(1,3);
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
    alert(ataqueJugador)
}

function ataqueAgua(){
    ataqueJugador = "AGUA"
    alert(ataqueJugador)
}

function ataqueTierra(){
    ataqueJugador= "TIERRA"
    alert(ataqueJugador)
}

function ataqueAleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}




window.addEventListener("load",iniciarJuego); 

