function adicionar() {
  let input = document.getElementById("tarefa");
  let lista = document.getElementById("lista");

  let novaTarefa = document.createElement("li");
  novaTarefa.textContent = input.value;

  lista.appendChild(novaTarefa);

  input.value = "";
}
