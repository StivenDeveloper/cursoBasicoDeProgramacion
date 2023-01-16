const sectionAtaque = document.getElementById("seleccionar-ataque")
const sectionReiniciar =document.getElementById("reiniciar");
const botonPersonajeJugador = document.getElementById("boton-personaje");
const botonFuego = document.getElementById("boton-fuego");
const botonAgua = document.getElementById("boton-agua");
const botonHacha = document.getElementById("boton-hacha");
const botanReiniciar = document.getElementById("boton-reiniciar")
const sectionPersonaje = document.getElementById("seleccionar-personaje");

const spanPersonajeJugador = document.getElementById("personaje-jugador");

const spanPersonajeEnemigo = document.getElementById("personaje-enemigo");

const spanVidasJudador = document.getElementById("vidas-jugador");
const spanVidasEnemigo = document.getElementById("vidas-enemigo")
const sectionMensaje = document.getElementById("resultado");
const ataqueDelJugador = document.getElementById("ataque-del-jugador");
const ataqueDelEnemigo = document.getElementById("ataque-del-enemigo");

const contenedorTarjetas = document.getElementById("contenedor-tarjetas")



//Array, una estructura de dato estático, que nos permite agrupar valores en una sola variable

let personajes = []

let ataqueJugador; //Se declararon variables globales para que se invoquen en cualquir función.
let ataqueEnemigo;
let PersonajeJugador;
let opcionDePersonajes;
let inputLuigi;
let inputMario; 
let inputBowser; 
let vidasJugador= 3;
let vidasEnemigo= 3;

//Programación orientada a objetos (clases y objetos)
class Personaje {
    constructor(nombre,foto,vida){
        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;
        this.ataques = [];
    }
}

//                CREANDO CÓDIGO  HTML CON JAVASCRIPT (CLASE 50)
// El término “renderizar” hace referencia al proceso que lleva a cabo el 
// navegador para leer el código HTML y CSS para posteriormente dibujarlo en 
// el navegador. Con Javascript, puedes crear código HTML de forma dinámica y 
// lograr que el navegador muestre esos datos dentro del DOM de una página web.
// Una vez tengas los datos preparados en tu código Javascript //

let mario = new Personaje('Mario','./assets/pwd.png',5)

let luigi = new Personaje('Luigi','./assets/Luigi.png',5)

let bowser = new Personaje('Bowser','./assets/Bowser_Stock_Art_2021.png',5)

mario.ataques.push(
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '💧', id:'boton-agua'},
    {nombre: '🪓', id:'boton-hacha'},
)

luigi.ataques.push(
    {nombre: '💧', id:'boton-agua'},
    {nombre: '💧', id:'boton-agua'},
    {nombre: '💧', id:'boton-agua'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🪓', id:'boton-hacha'},
)

mario.ataques.push(
    {nombre: '🪓', id:'boton-hacha'},
    {nombre: '🪓', id:'boton-hacha'},
    {nombre: '🪓', id:'boton-hacha'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '💧', id:'boton-agua'},
)

personajes.push(mario,luigi,bowser);



function iniciarJuego(){
    sectionAtaque.style.display = "none";
    sectionReiniciar.style.display = "none";

    // (Clase 50) A continuación, captura el elemento con document.getElementById(). Utilizaremos una nueva    función        llamada forEach() que todos los arreglos poseen para poder iterar cada elemento del mismo.   El    término “iterar” hace referencia a recorrer los elementos de un array, uno por uno en el mismo orden en el que    se  //encuentran.

    // Observa que dentro del forEach(), estamos declarando una función que recibe como parámetro una variable en singular llamada Personaje. Aquí encontrarás el objeto con sus atributos y la información que renderizaremos al HTML.

    // Dentro de esta función que se ejecutará una vez por cada iteración, estamos usando las comillas invertidas para escribir código HTML como si fuese texto simple. Este texto es procesado por Javascript y nos permite pasarle valores de variables a través de la sintaxis ${Personaje.nombre}.
    
    // De esta manera, puedes concatenar el código HTML generado por Javascript con el valor de las variables que necesites.
    
    // Finalmente, utiliza la propiedad innerHTML para insertar el código HTML en el DOM. Presta atención al += que nos permite concatenar cada iteración del array y que todos los datos se muestren correctamente.
    
    // Verás en el navegador web, los datos estructurados y renderizados desde el código Javascript.   
    
    personajes.forEach((Personaje)=>{
        opcionDePersonajes = `
        <input type="radio" name="personaje" id=${Personaje.nombre}>
        <label id=${Personaje.nombre} class="tarjeta-de-personajes" for=${Personaje.nombre}>
            <p>${Personaje.nombre}</p>
            <img src=${Personaje.foto} alt=${Personaje.nombre}>
        </label>
        `
    contenedorTarjetas.innerHTML += opcionDePersonajes; 

        inputLuigi = document.getElementById("Luigi")
        inputMario = document.getElementById("Mario")
        inputBowser = document.getElementById("Bowser")

        
    })
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
        spanPersonajeJugador.innerHTML = inputMario.id;
        PersonajeJugador = inputMario.id;
    }else if (inputLuigi.checked){
        spanPersonajeJugador.innerHTML = inputLuigi.id;
        PersonajeJugador = inputLuigi.id;
    }else if (inputBowser.checked){
        spanPersonajeJugador.innerHTML = inputBowser.id;
        PersonajeJugador = inputBowser.id;
    } else{
        alert("Selecciona a un personaje para el ataque");
        reiniciarJuego();
    }
    seleccionarPersonajeEnemigo();
}

function seleccionarPersonajeEnemigo(){
    let jugadaEnemigo = 0;
    jugadaEnemigo = Aleatorio(0,(personajes.length-2))
    if(PersonajeJugador==inputMario.id){
        if(jugadaEnemigo==1){
            spanPersonajeEnemigo.innerHTML = inputLuigi.id;
        }else{
            spanPersonajeEnemigo.innerHTML = inputBowser.id;
        }
    }else if(PersonajeJugador== inputLuigi.id){
        if(jugadaEnemigo==1){
            spanPersonajeEnemigo.innerHTML = inputMario.id;
        }else{
            spanPersonajeEnemigo.innerHTML = inputBowser.id;
    }
    } else if(PersonajeJugador== inputBowser.id){
        if(jugadaEnemigo==1){
            spanPersonajeEnemigo.innerHTML = inputMario.id;
        }else{
            spanPersonajeEnemigo.innerHTML = inputLuigi.id;
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

