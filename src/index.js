let todos = [
  {
    completed: false,
    description: "Take Jim to the hair salon",
  },
  {
    completed: true,
    description: "Drop off wedding invitation at mailbox",
  },
  {
    completed: false,
    description: "Pick up the cake",
  },
  {
    completed: false,
    description: "Call the caterers",
  },
];

function renderTodoApp() {
  let app = document.querySelector("#app");
  let h1 = document.createElement("h1");
  // your code here
  const todoList = document.createElement("ul");
  todoList.classList.add("todo-list");
  document.body.appendChild(todoList);
  // loop
  for (let i = 0; i < todos.length; i++) {
    let list = todos[i];
    let accomplishList = `
       <li class = "lets-do_this">
       <input type="checkbox"  id = "salon" / >
       <label for = "salon" > ${list.description}</label
        
       
       </li>
      `;

    todoList.innerHTML += accomplishList;
  }

  h1.innerText = "Todo List";

  app.appendChild(h1);
  // and maybe some here
}

renderTodoApp();
