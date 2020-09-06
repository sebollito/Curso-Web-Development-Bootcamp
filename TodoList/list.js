let todos = ["Buy new turtle"];

window.setTimeout(function () {
  let input = prompt("What would you like to do?");

  while (input !== "quit") {
    //Handle input
    if (input === "list") {
      listTodos();
    } else if (input === "new") {
      addTodo();
    } else if (input === "delete") {
      deleteTodo();
    }
    //Ask again for input
    input = prompt("What would you like to do?");
  }

  console.log("OK, YOU QUIT THE APP");
}, 500);

function listTodos() {
  console.log("**********");
  todos.forEach(function (element, index) {
    console.log(index + ": " + element);
  });
  console.log("**********");
}

function addTodo() {
  //ask for new todo
  let newTodo = prompt("Enter new todo");
  //add to todos array
  todos.push(newTodo);
  console.log("Added Todo");
}

function deleteTodo() {
  //ask for index of todo to be deleted
  index = prompt("Enter index of todo to delete");
  //delete the todo
  //splice() makes a cut and removes specific number of elements from an array
  // first argument is where you want to make the cut
  // second argument is how many items to delete following that index
  todos.splice(index, 1);
  console.log("Deleted Todo");
}
