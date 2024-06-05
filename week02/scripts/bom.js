const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
const li = document.createElement('li');
li.textContent = input.value;
const deleteButton = document.createElement('button');
deleteButton.textContent = 'X';
li.append(deleteButton);
list.append(li);

//event handling
button.addEventListener('click',function(){
    if (input.value.trim() !== ' ' ) {
        list.appendChild(li);
    } else {
        alert("Blank input! Please try again!");
        input.focus();
    }
});
deleteButton.addEventListener('click',function(){
    list.removeChild(li);
    input.focus();
});
input.value = '';
input.focus();