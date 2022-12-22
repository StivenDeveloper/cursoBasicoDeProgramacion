
function iniciarJuego(){

    let botonMascotaJugador = document.getElementById("boton-mascota");
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);

    
}

function seleccionarMascotaJugador(){

    if (document.getElementById("hipodoge").checked){
        alert("Seleccionaste a Hipodoge");
    }else if (document.getElementById("capipepo").checked){
        alert("Seleccionaste a Capipepo");
    }else if (document.getElementById("ratigueya").checked){
        alert("seleccionaste a Ratigueya");
    } else{
        alert("Selecciona a una mascota para el ataque");
    }
    
}

window.addEventListener("load",iniciarJuego); 