// Add a class to the existing navigation link list (ul inside nav)
const navList = document.querySelector('nav ul');
navList.classList.add('list'); 
navList.classList.add('link-list');

// Create a new link and insert it as the last item inside the navigation link list
const newLink = document.createElement('a');
newLink.href = 'http://localhost:3000/';
newLink.textContent = 'Localhost';

const listItem = document.createElement('li');
listItem.appendChild(newLink);
navList.appendChild(listItem);

// Insert a new list item at the beginning of the ordered list (ol with id 'ordered')
const orderedList = document.getElementById('ordered');
const newItem = document.createElement('li');
newItem.textContent = 'Item 0';
orderedList.insertBefore(newItem, orderedList.firstChild);

// Remove the class 'navi' from the todo list (ul with id 'todo')
const todoList = document.getElementById('todo');
todoList.classList.remove('navi');

// Delete the second list item from the todo list
const todoItems = todoList.querySelectorAll('li');
if (todoItems.length >= 2) {
  todoItems[1].remove();
}