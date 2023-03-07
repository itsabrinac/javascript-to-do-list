
let todoList = [];
//This line declares a new function called addItem().
let noOfTodos = document.getElementById("noOfTodos");
//- This line declares a new constant variable newItemInput and sets it equal to the element in the document with the ID of "newItem". This variable will be used to get the value of the new item entered by the user.
function addItem() {
  const newItemInput = document.getElementById('newItem');
  const newItem = newItemInput.value.trim();
//This line declares a new constant variable newItem and sets it equal to the trimmed value of newItemInput. Trimming the value removes any leading or trailing white space characters.
  if (newItem === '') {
    alert('Please enter an item.');
    return;
  }
//This line checks if newItem is an empty string. If it is, an alert message is displayed to the user and the function returns, which prevents any further code in the function from running.
  todoList.push(newItem);
//This line adds the new item to the todoList array.
  const todoListContainer = document.getElementById('todoList');
  // This line declares a new constant variable todoListContainer and sets it equal to the element in the document with the ID of "todoList". This variable will be used to display the todo list on the page.
  const newTodoListItem = document.createElement('li');
  //This line creates a new li element.
  newTodoListItem.textContent = newItem;
  //This line sets the text content of the new li element to the value of newItem.
  newTodoListItem.ondblclick = function() {
    this.parentNode.removeChild(this);
  }
  //This line sets an event listener on the new li element that will remove it from the DOM if it is double-clicked.
  todoListContainer.appendChild(newTodoListItem);
//This line appends the new li element to the todoListContainer element on the page.
  newItemInput.value = '';
  // This line clears the value of the input field.
  noOfTodos.innerText = todoList.length;
  //This line updates the text content of the noOfTodos element on the page to reflect the current number of items in the todoList array.
}

