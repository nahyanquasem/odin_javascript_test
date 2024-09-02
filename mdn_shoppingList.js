const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', () =>{
    let inputText = input.value;
    
    if(inputText==='') return;

    input.value = '';
    
    const listItem = document.createElement('li');
    const span = document.createElement('span');
    const deleteButton = document.createElement('button');
    
    span.textContent = inputText;
    deleteButton.textContent = 'Delete';

    listItem.appendChild(span);
    listItem.appendChild(deleteButton);


    list.append(listItem);


    deleteButton.addEventListener('click', ()=>{
        list.removeChild(listItem);
        input.focus();

    });

    input.focus();
});
