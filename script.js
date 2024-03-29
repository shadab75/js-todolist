const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const inputInvalid = document.getElementById('input-invalid');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('items-clear');
const itemFilter = document.getElementById('filter');


function addItem(e) {
    e.preventDefault();

    const newItem = itemInput.value;

    // Validate Input
    if (newItem == '') {
        inputInvalid.innerText = 'Please add an item';
        return;
    } else {
        inputInvalid.innerText = '';
    }

 addItemToDOM(newItem)
 addItemtoStorage(newItem);
    itemInput.value = '';
    checkUI();
}

function addItemToDOM(item)
{
    const li = document.createElement('li');
    li.className = 'list-item';
    li.textContent = item;

    const icon = createIcon('bi bi-x fs-5 text-danger');
    li.appendChild(icon);

    itemList.appendChild(li);
}
function addItemtoStorage(item)
{
    let itemsFromStorage;
    if (localStorage.getItem('items')==null)
    {
        itemsFromStorage =[];
    }else{
        itemsFromStorage = JSON.parse(localStorage.getItem('items'))
    }
    itemsFromStorage.push(item);
    localStorage.setItem('items',JSON.stringify(itemsFromStorage))
}

function createIcon(classes) {
    const icon = document.createElement('i');
    icon.className = classes;

    return icon;
}

function onClickItem(e) {
    // e.target.parentElement.remove();
    // console.log(e.target.classList.contains('bi-x'));
    if (e.target.classList.contains('bi-x')) {
        e.target.parentElement.remove();
        checkUI();
    }
}

function clearItems() {
    itemList.innerHTML = '';
    checkUI();
}

function checkUI() {
    const items = itemList.querySelectorAll('li');

    if (items.length === 0) {
        clearBtn.style.display = 'none';
        itemFilter.style.display = 'none';
    } else {
        clearBtn.style.display = 'block';
        itemFilter.style.display = 'block';
    }
}

function filterItems(e) {
    const items = itemList.querySelectorAll('li');
    const text = e.target.value.toLowerCase();
    items.forEach((item) => {
        const itemName = item.firstChild.textContent.toLowerCase();
        if (itemName.indexOf(text)!==-1)
        {
            item.style.display = 'flex';
        }else{
            item.style.display = 'none';
        }

    });
}

// Event Listener
itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', onClickItem);
clearBtn.addEventListener('click', clearItems);
itemFilter.addEventListener('input', filterItems);

checkUI();