let tablaAmigos = [];

//Titulo y Sub-titulo de la Página.
function TituloPagina(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}
       
//input; Para Digitar/Validar Nombre y Boton añadir(amigo).
function agregarAmigo(){
    let Amigo=document.getElementById('amigo');
    let nombreAmigo = Amigo.value.trim();   
    console.log(nombreAmigo);
    if (nombreAmigo ==="") {
        alert("Por favor, ingrese un nombre valido.");}
    else {
        tablaAmigos.push(nombreAmigo);
        agreganEnLista();
    }
    Amigo.value="";
    Amigo.focus();
    return;
}

//listaAmigos; amigos ingresando/creando la lista.
function agreganEnLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML="";
    tablaAmigos.forEach(nombreAmigo => {
        const li = document.createElement("li");        
        li.textContent = nombreAmigo;
        lista.appendChild(li);
    });
}

//Botton btnSortear; SOrteo segun randon, eligiendo la tabla segun random.
function sortearAmigo() {
    if (tablaAmigos.length === 0){
        alert("No hay amigos ingresados para sortear.");}
    else {
        const aleatorio= Math.floor(Math.random() * tablaAmigos.length);
        const sorteado= tablaAmigos[aleatorio];        
        const elegido = document.getElementById("resultado");
        console.log("aleatorio",aleatorio);
        console.log("sorteado:",sorteado);        
        console.log("elegido",elegido);        
        elegido.innerHTML = sorteado;
        elegido.innerHTML = `<li>Amigo Secreto sorteado es: ${sorteado}<li/>`;
        }
    return;
}

TituloPagina('h1','Amigo Secreto.');
TituloPagina('h2','Digite el nombre de sus amigos.');