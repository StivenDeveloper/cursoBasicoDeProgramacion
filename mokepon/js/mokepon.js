const sectionAtaque = document.getElementById("seleccionar-ataque")
const sectionReiniciar =document.getElementById("reiniciar");
const botonPersonajeJugador = document.getElementById("boton-personaje");

const botanReiniciar = document.getElementById("boton-reiniciar")
const sectionPersonaje = document.getElementById("seleccionar-personaje");

const spanPersonajeJugador = document.getElementById("personaje-jugador");

const spanPersonajeEnemigo = document.getElementById("personaje-enemigo");

let spanVidasJudador = document.getElementById("vidas-jugador");
let  spanVidasEnemigo = document.getElementById("vidas-enemigo")
const sectionMensaje = document.getElementById("resultado");
const ataqueDelJugador = document.getElementById("ataque-del-jugador");
const ataqueDelEnemigo = document.getElementById("ataque-del-enemigo");

const contenedorTarjetas = document.getElementById("contenedor-tarjetas")

const contenerdorAtaques = document.getElementById('botones-ataques')



//Array, una estructura de dato estático, que nos permite agrupar valores en una sola variable

let personajes = []

let ataqueJugador =[]; //Se declararon variables globales para que se invoquen en cualquir función.
let ataqueEnemigo =[];
let personajeJugador;
let opcionDePersonajes;
let opcionDeAtaques;
let inputLuigi;
let inputMario; 
let inputBowser; 
let ataquesPerEnemigo
let victoriasJugador = 0;
let victoriasEnemigo = 0;
let botonFuego; 
let botonAgua;
let botonHacha; 
let indexAtaqueJugador;
let indexAtaqueEnemigo;
let botones =[];



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

bowser.ataques.push(
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
    
    botanReiniciar.addEventListener("click",reiniciarJuego)
}

function seleccionarPersonajeJugador(){
    sectionAtaque.style.display = "flex"
    sectionPersonaje.style.display = "none"

    if (inputMario.checked){
        spanPersonajeJugador.innerHTML = inputMario.id;
        personajeJugador = inputMario.id;
    }else if (inputLuigi.checked){
        spanPersonajeJugador.innerHTML = inputLuigi.id;
        personajeJugador = inputLuigi.id;
    }else if (inputBowser.checked){
        spanPersonajeJugador.innerHTML = inputBowser.id;
        personajeJugador = inputBowser.id;
    } else{
        alert("Selecciona a un personaje para el ataque");
        reiniciarJuego();
    }
    extraerAtaques(personajeJugador);
    seleccionarPersonajeEnemigo();
}

function extraerAtaques(personajeJugador){
    let ataques;
    for (let i = 0; i < personajes.length; i++) {
        if(personajeJugador=== personajes[i].nombre){
            ataques = personajes[i].ataques;
        }
    }
    mostrarAtaques(ataques);
}

function mostrarAtaques(ataques){
    ataques.forEach((ataque)=>{
        opcionDeAtaques = `
        <button id=${ataque.id} class="boton-de-ataque BAtaque"><span>${ataque.nombre}</span></button>
        `
    contenerdorAtaques.innerHTML += opcionDeAtaques; 
    })

    botonFuego = document.getElementById("boton-fuego");
    botonAgua = document.getElementById("boton-agua");
    botonHacha = document.getElementById("boton-hacha");
    botones = document.querySelectorAll('.BAtaque')

    


   
}

function secuenciaAtaque(){
    botones.forEach((boton) =>{
        boton.addEventListener('click', (e)=>{
            if (e.target.textContent ==='🔥') {
                ataqueJugador.push("FUEGO")
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true;
            }else if (e.target.textContent ==='💧') {
                ataqueJugador.push("AGUA")
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true;
            }else{
                ataqueJugador.push("HACHA")
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true;
            }
            ataqueAleatorioEnemigo()
        
        })
    })
    
}


function seleccionarPersonajeEnemigo(){
    jugadaEnemigo = Aleatorio(0,(personajes.length-1));
    
    spanPersonajeEnemigo.innerHTML = personajes[jugadaEnemigo].nombre;
    ataquesPerEnemigo = personajes[jugadaEnemigo].ataques;
    secuenciaAtaque()
}



function ataqueAleatorioEnemigo(){
    let ataqueAleatorio=Aleatorio(0,ataquesPerEnemigo.length-1);
    if(ataqueAleatorio==0 || ataqueAleatorio == 1){
        ataqueEnemigo.push('FUEGO')
    }else if(ataqueAleatorio==3 || ataqueAleatorio == 4){
        ataqueEnemigo.push('AGUA');
    }else{
        ataqueEnemigo.push('HACHA');
    }

    console.log(ataqueEnemigo)
    iniciarCompate();
   
}

function iniciarCompate(){
    if (ataqueJugador.length===5) {
        resultadosCombate()
    }
}

function indexAmbosOponetes(jugador,enemigo){
    indexAtaqueJugador = ataqueJugador[jugador];
    indexAtaqueEnemigo = ataqueEnemigo[enemigo];
}
function resultadosCombate(){

    for (let index = 0; index < ataqueJugador.length; index++) {
        if (ataqueJugador[index]=== ataqueEnemigo[index]) {
            crearMensaje("EMPATE😶")
            indexAmbosOponetes(index,index)
        }else if ((ataqueJugador[index] ==="FUEGO" && ataqueDelEnemigo[index] ==="HACHA")  ){
            indexAmbosOponetes(index,index)
            crearMensaje("GANASTE🎉")
            victoriasJugador++
            spanVidasJudador.innerHTML= victoriasJugador;

        }else if ((ataqueJugador[index]==="AGUA" && ataqueEnemigo[index] ==="FUEGO")) {
            indexAmbosOponetes(index,index)
            crearMensaje("GANASTE🎉")
            victoriasJugador++
            spanVidasJudador.innerHTML= victoriasJugador;
        }else if ((ataqueJugador[index]==="HACHA" && ataqueEnemigo[index]== "AGUA")){
            indexAmbosOponetes(index,index)
            crearMensaje("GANASTE🎉")
            victoriasJugador++
            spanVidasJudador.innerHTML= victoriasJugador;
        }else{
            indexAmbosOponetes(index,index)
            crearMensaje("PERDISTE😒")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo;
        }
        
    }
    revisarVictorias();
}

function revisarVictorias(){
    if (victoriasJugador=== victoriasEnemigo){
        crearMensajeFinal("Esto fue un empate")
    }else if(victoriasJugador > victoriasEnemigo){
        crearMensajeFinal("🎉¡FELICITACIONES!🎉 Ganaste")
    }else{
        crearMensajeFinal("😭¡LO SIENTO!😭 Perdiste")
    }
}

function crearMensajeFinal(resultadofinal){
    sectionMensaje.innerHTML = resultadofinal
    
    sectionReiniciar.style.display = "block"
}

function crearMensaje(resultado){

     // Se obtiene la sección del mensaje.
    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDelEnemigo = document.createElement("p")

    sectionMensaje.innerHTML = resultado;
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador;
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo;

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

