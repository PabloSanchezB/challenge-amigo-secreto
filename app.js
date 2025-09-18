let amigos = [];

function agregarAmigo(){
    let campoAmigo = document.querySelector('#amigo');

    if(campoAmigo.value.trim() == ""){
        alert("Por favor, inserte un nombre.");
    }else{
        amigos.push(campoAmigo.value.trim());
        campoAmigo.value = "";
        actualizarListaAmigos();
    }
}

function actualizarListaAmigos(){
    let listaAmigos = document.querySelector('#listaAmigos');
    listaAmigos.innerHTML = "";

    for(let i = 0; i < amigos.length; i++){
        listaAmigos.innerHTML += `<li>${amigos[i]}<li>`;
    }
}

function sortearAmigo(){
    if(amigos.length == 0){return;}

    let indiceRandom = Math.floor(Math.random() * amigos.length);

    let amigoSorteado = amigos[indiceRandom];
    
    document.querySelector('#resultado').innerHTML = `<li>Tu amigo secreto es: ${amigoSorteado}<li>`;
}