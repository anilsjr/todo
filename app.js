// app.js

const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const submitButton = document.getElementById('submit');
const successLabel = document.getElementById('lblsuccess');

function toggleButton(input, buttonId) {
    const button = document.getElementById(buttonId);
    button.disabled = !input.value.trim();
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const newItem = document.getElementById('item').value.trim();
    if (!newItem) return;

    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';

    li.appendChild(document.createTextNode(newItem));

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm';
    deleteBtn.appendChild(document.createTextNode('Delete'));
    deleteBtn.onclick = function () {
        itemList.removeChild(li);
        showSuccessMessage('Task removed successfully!');
    };

    li.appendChild(deleteBtn);
    itemList.appendChild(li);

    document.getElementById('item').value = '';
    toggleButton(document.getElementById('item'), 'submit');

    showSuccessMessage('Task added successfully!');
});

function showSuccessMessage(message) {
    successLabel.textContent = message;
    successLabel.classList.remove('d-none');
    setTimeout(() => {
        successLabel.classList.add('d-none');
    }, 2500);
}
