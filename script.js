function adicionar() {
  const input = document.getElementById("tarefa");
  const texto = input.value;

  if (texto === "") return;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.innerText = texto;

  // clicar para riscar
  span.onclick = function () {
    span.classList.toggle("concluida");
  };

  // botão excluir
  const botao = document.createElement("button");
  botao.innerText = " ❌";
  botao.onclick = function () {
    li.remove();
  };

  li.appendChild(span);
  li.appendChild(botao);

  document.getElementById("lista").appendChild(li);

  input.value = "";
}