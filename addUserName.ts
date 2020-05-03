const userNameInput = document.getElementById('username') as HTMLInputElement;
const addButton = document.getElementById('add-btn') as HTMLButtonElement;
const userList = document.getElementById('user-list') as HTMLUListElement;

function createLiElement(value: string) {
    const li = document.createElement('li');
    li.innerHTML = value;
    return li;
}

function createAndAppendLi(value: string) {
    const li = createLiElement(value);
    userList.appendChild(li);
}

addButton.addEventListener('click', () => {
    createAndAppendLi(userNameInput.value);
    userNameInput.value = '';
});