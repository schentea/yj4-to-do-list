const todo = document.querySelector("#toDoForm");
const input = document.querySelector("#toDoForm input");
const ul = document.querySelector("#todolist");

let todos = [];

function saveTodo() {
    console.log(todos)
    localStorage.setItem("Todos",JSON.stringify(todos))
}

function deleteTodo(e, todosObj, li, button) {
    console.log(todosObj);
    //li 요소 삭제
    ul.removeChild(li);
    ul.removeChild(button);
    
    
    //로컬 스토리지와 배열에서 값 삭제
    todos = todos.filter(item => item.id !== todosObj.id);
    localStorage.setItem("Todos", JSON.stringify(todos));
    console.log(todos)
   
}

function paintToDo(todosObj) {
    const span = document.createElement("span");
    const button = document.createElement("input");
    const li = document.createElement("li");
    li.setAttribute("id", todosObj.id)

    button.setAttribute("type", "button")
    button.setAttribute("value", "X")
    button.className = "btn";
    span.innerText = todosObj.text;

    button.addEventListener("click",function(e){
        deleteTodo(e, todosObj, li, button);
    })

    li.appendChild(span);
    ul.appendChild(button);
    ul.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    // console.log(box.value);
    const todosObj ={
        text : input.value,
        id : Date.now()
    }
    input.value = ""
    // 그려주는 함수
    paintToDo(todosObj);
    //스토리지 저장 함수
    todos.push(todosObj);
    saveTodo();
}
                                                                        
todo.addEventListener("submit", handleToDoSubmit)

const saveLocal = localStorage.getItem("Todos",todos);

if(saveLocal !== null) {
    const parseTodos = JSON.parse(saveLocal);
    todos = parseTodos;

    todos.forEach(paintToDo)
}