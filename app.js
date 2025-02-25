// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Inicializar lista de amigos
let listaAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
  let amigo = document.getElementById("txtAmigo");
  let valor = amigo.value.trim();

  if (amigo.value.trim() === "") {
    alert("Por favor, inserte un nombre.");
  } else {
    if (valor) {
      listaAmigos.push(valor);
      amigo.value.trim() = "";
      mostrarAmigos();
      document.getElementById("resultado").textContent = "";
      // console.log(listaAmigos);
    }
  }
}

// Función para mostrar la lista de amigos
function mostrarAmigos() {
  let lista = document.getElementById("listaAmigos");
  lista.textContent = "";

  listaAmigos.forEach((amigo) => {
    let item = document.createElement("li");
    item.textContent = amigo;
    lista.appendChild(item);
  });
}

// Función para sortear un amigo
function sortearAmigo() {
  if (listaAmigos.length === 0) {
    alert("Por favor, inserte al menos un nombre.");
  } else {
    let amigoSorteado = document.getElementById("resultado");
    let amigo = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    amigoSorteado.textContent = amigo;
    vaciarListaAmigos();
  }
}

// Función para vaciar la lista de amigos
function vaciarListaAmigos() {
  listaAmigos = [];
  mostrarAmigos();
}
