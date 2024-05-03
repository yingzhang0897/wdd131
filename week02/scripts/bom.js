const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const output = document.querySelector('ul');
const list = document.createElement('li');
list.textContent = input.value;
const deleteButton = document.createElement('deleteButton');
deleteButton.textContent = 'X';
list.append(deleteButton);
ul.append(list);