const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const inputInvalid = document.getElementById('input-invalid');
const  itemList = document.getElementById('item-list');
function addItem(e)
{
    e.preventDefault();
    const  newItem = itemInput.value;

    //validate Input
    if (newItem==''){
        inputInvalid.innerText = 'Please add an item';
        return;
    }else{
        inputInvalid.innerText='';
    }
    const li = document.createElement('li');
    li.className = 'list-item';
    li.textContent=newItem;
    const icon = createIcon('bi bi-x fs-5 text-danger');
    li.appendChild(icon)
    itemList.appendChild(li)
    itemInput.value ='';

}
function createIcon(classes){
    const  icon = document.createElement('i');
    icon.className = classes;
    return icon;
}


//Event Listener
itemForm.addEventListener('submit',addItem);