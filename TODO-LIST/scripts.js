const button = document.querySelector(".button-add-task");
const input = document.querySelector(".input-task");
const listaCompleta = document.querySelector('.list-tasks');

let minhaListaDeItens = [];

function adicionarNovaTarefa() {
  minhaListaDeItens.push(input.value);
  /* console.log(minhaListaDeItens); */
  mostrarTarefas();
}

function mostrarTarefas() {
  let novaLi = "";
  minhaListaDeItens.forEach((tarefa) => {
    novaLi = novaLi + `
        <li class="task">
            <img src="./IMG/checked.png" alt="check-nas-tarefas">
            <p>${tarefa}</p>
            <img src="./IMG/trash.png" alt="deletar">
        </li>
        `;
  });
}

listaCompleta.innerHTML = novaLi;

button.addEventListener("click", adicionarNovaTarefa);

/*   <li class="task">
                <img src="./IMG/checked.png" alt="check-nas-tarefas">
                <p>Ir na academia</p>
                <img src="./IMG/trash.png" alt="deletar">
            </li>

            <li class="task">
                <img src="./IMG/checked.png" alt="check-nas-tarefas">
                <p>Tomar 3L de água</p>
                <img src="./IMG/trash.png" alt="deletar">
            </li> */
