const todo = document.querySelector("#toDoForm");
const input = document.querySelector("#toDoForm input");
const ul = document.querySelector("#todolist");

let todos = [];

function saveTodo() {
  console.log(todos);
  localStorage.setItem("Todos", JSON.stringify(todos));
}

function deleteTodo(event, li, button, span1) {
  //li 요소 삭제
  ul.removeChild(li);
  span1.removeChild(button);
  //로컬 스토리지와 배열에서 값 삭제
  todos = todos.filter(
    (item) => item.text !== li.querySelector("span").innerText
  );
  localStorage.setItem("Todos", JSON.stringify(todos));
  console.log(todos);
}

function paintToDo(todosObj) {
  const span = document.createElement("span");
  const span1 = document.createElement("span");
  const button = document.createElement("input");
  const li = document.createElement("li");
  li.setAttribute("id", todosObj.id);
  li.setAttribute("draggable", "true");

  button.setAttribute("type", "button");
  button.setAttribute("value", "X");
  button.className = "btn";

  span.className = "span1";

  span.innerText = todosObj.text;

  button.addEventListener("click", function (event) {
    deleteTodo(event, todosObj, li, button, span1);
  });

  li.appendChild(span);
  li.appendChild(span1);
  span1.appendChild(button);
  ul.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  // console.log(box.value);
  const todosObj = {
    text: input.value,
    id: Date.now(),
  };
  input.value = "";
  // 그려주는 함수
  paintToDo(todosObj);
  //스토리지 저장 함수
  todos.push(todosObj);
  saveTodo();
}

todo.addEventListener("submit", handleToDoSubmit);

const saveLocal = localStorage.getItem("Todos", todos);

if (saveLocal !== null) {
  const parseTodos = JSON.parse(saveLocal);
  todos = parseTodos;

  todos.forEach(paintToDo);
}
