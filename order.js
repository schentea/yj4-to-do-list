const lists = document.querySelectorAll("li:not(.dragging)");

lists.forEach((list) => {
  list.addEventListener("dragstart", () => {
    list.classList = "dragging";
  });

  list.addEventListener("dragend", () => {
    list.classList.remove("dragging");
  });
});

const initSortableList = (e) => {
  e.preventDefault();

  const draggingItem = ul.querySelector(".dragging");
  //...가져온 아이들을 하나하나 배열에 추가
  const siblings = [...ul.querySelectorAll("li:not(.dragging)")];

  let nextSibling = siblings.find((sibling) => {
    return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
  });

  ul.insertBefore(draggingItem, nextSibling);
};

function saveTo() {
  localStorage.setItem("Todos", JSON.stringify(todos));
}

function reSave(newLi) {
  todos = [];
  newLi.forEach((item) => {
    const text = item.querySelector("span");
    const newTodoObject = {
      text: text.innerText,
      id: item.id,
    };
    todos.push(newTodoObject);
    saveTo();
  });
}

ul.addEventListener("dragover", initSortableList);
ul.addEventListener("dragenter", (e) => e.preventDefault());
ul.addEventListener("drop", () => {
  const newLi = document.querySelectorAll("li");
  reSave(newLi);
});
