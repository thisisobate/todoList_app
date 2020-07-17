const todoList = document.querySelector('.todo-list');
const userInput = document.querySelector('.user-input');
const addBtn = document.querySelector('.add-todo');

// adds items by clicking "Add"
addBtn.addEventListener('click', addToDo)

document.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
        addToDo();
    }
})

function addToDo(){
    
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('todo-item');
    todoList.appendChild(itemDiv);

    const completedBtn = document.createElement('button');
    completedBtn.innerHTML = '<i class="fas fa-check"></i>';
    itemDiv.appendChild(completedBtn);
    
    const todoItem = document.createElement('li');
    todoItem.textContent = userInput.value;
    itemDiv.appendChild(todoItem);

    const trashBtn = document.createElement('button');
    trashBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    itemDiv.appendChild(trashBtn);

    const editBtn = document.createElement('button');
    editBtn.innerHTML = '<i class="fas fa-edit"></i>';
    itemDiv.appendChild(editBtn);

    userInput.value = "";

    trashBtn.addEventListener('click', function() {
        itemDiv.remove();
        console.log('removed');
    });

    editBtn.addEventListener('click', function() {
        console.log("Edit task...");

	      var listItem = itemDiv;

	      var editInput = document.querySelector('.user-input');
	      var label = listItem.querySelector("label");
	      var containsClass = document.querySelector('.user-input');

	      if(containsClass) {
	        	label.innerText = editInput.value;
	      } else {
	    	editInput.value = label.innerText;
	      }
	      //Toggle .editMode on the parent li	
	      listItem.classList.toggle("editMode");
    });

    completedBtn.addEventListener('click', function() {
        itemDiv.classList.toggle('completed');
    })
}

// var editTask = function() {
// 	console.log("Edit task...");

// 	var listItem = this.parentNode;

// 	var editInput = listItem.querySelector("input[type=text]");
// 	var label = listItem.querySelector("label");
// 	var containsClass = listItem.classList.contains("editMode");

// 	if(containsClass) {
// 		label.innerText = editInput.value;
// 	} else {
// 		editInput.value = label.innerText;
// 	}
// 	//Toggle .editMode on the parent li	
// 	listItem.classList.toggle("editMode");
// };







