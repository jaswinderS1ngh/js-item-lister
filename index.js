var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// add eventlistner
form.addEventListener('submit', addItem);
//delete event
itemList.addEventListener('click', removeItem)
//filterevent
filter.addEventListener('keyup', filterItems)

//add item
function addItem(e){
    e.preventDefault();

    // get input value
    var newItem = document.getElementById('item').value;

    //create new li item
    var newLi = document.createElement('li');

    //add class name
    newLi.className = 'list-group-item';

    // create text node with input value
    newLi.appendChild(document.createTextNode(newItem));


    //add delete button
    //create
    var deletebtn = document.createElement('button');

    deletebtn.className = "btn btn-danger btn-sm float-right delete";

    deletebtn.appendChild(document.createTextNode('X'));

    newLi.appendChild(deletebtn);

    //add new li 
    itemList.appendChild(newLi);
}

// remove item

function removeItem(e){

    if(e.target.classList.contains('delete')){
        if(confirm('are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//filter
function filterItems(e){
    //get value and convert it to lowercarse
    var text = e.target.value.toLowerCase();
    //get lis
    var items = itemList.getElementsByTagName('li');

    // convert to array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().includes(text)){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })
}