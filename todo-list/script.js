


const data = (localStorage.getItem('todoList'))? JSON.parse(localStorage.getItem('todoList')) : {
	todo: [],
	completed: []
}


const buttonAdd = document.getElementById('addItem')
const input = document.getElementById('item')
const listUndone = document.getElementById('todo')

const removeSVG = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><g><g><path class="fill" d="M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6L16.3,18.7L16.3,18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2c0.6,0,1.1,0.5,1.1,1.1V7z"/></g><g><g><path class="fill" d="M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z"/></g><g><path class="fill" d="M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8C7.4,10.2,7.7,10,8,10c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z"/></g><g><path class="fill" d="M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C14.6,17.7,14.3,18,14,18z"/></g></g></g></svg>`
const completeSVG = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect y="0" class="noFill" width="22" height="22"/><g><path class="fill" d="M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z"/></g></svg>'
let idx;
let listID;


renderList()

function renderList(){
	if(!data.todo.length && !data.completed.length) return

	for(let i = 0; i <data.todo.length; i++){
		let value = data.todo[i]
		addItemToDOM(value)
	}
	for(let i = 0; i <data.completed.length; i++){
		let value = data.completed[i]
		addItemToDOM(value,true)
	}
}


function dataObjectUpdated(){
	localStorage.setItem('todoList',JSON.stringify(data))
}

//adds text from input field (id = item) to todo-list
function addItem(value){
	addItemToDOM(value);
	document.getElementById('item').value = '';

	data.todo.push(value);
	dataObjectUpdated();
}

function updateGetIndex(e){
	listID = this.parentNode.parentNode.id
	idx = (listID === 'todo') ? data.todo.indexOf(e.target.value) : data.completed.indexOf(e.target.value)
}


function updateItem(e){
	(listID ==='todo') ? data.todo[idx] = e.target.value : data.completed[idx] = e.target.value
	dataObjectUpdated()
}

function addItemToDOM(text,completed){
	const list = (completed) ? document.getElementById('completed'):document.getElementById('todo');

	const item = document.createElement('li');
	// item.innerText = text;

	const change = document.createElement('input');
	change.setAttribute('value', text)
	// // change.innerText = text;
	change.addEventListener('click', updateGetIndex)
	change.addEventListener('change', updateItem)

	const buttons = document.createElement('div');
	buttons.classList.add('buttons');

	const remove = document.createElement('button');
	remove.classList.add('remove');
	remove.innerHTML = removeSVG;

  // Add click event for removing the item
	remove.addEventListener('click', removeItem);

 	const complete = document.createElement('button');
	complete.classList.add('complete');
	complete.innerHTML = completeSVG;

	  // Add click event for completing the item
	complete.addEventListener('click', completeItem);
	
	buttons.appendChild(remove);
	buttons.appendChild(complete);
	item.appendChild(change)
	item.appendChild(buttons);

	list.insertBefore(item, list.childNodes[0]);
}

function removeItem(){
	const item = this.parentNode.parentNode
	const list = item.parentNode
	const idc = list.id
	let value = item.firstChild.value


	if(idc === 'todo'){
		data.todo.splice(data.todo.indexOf(value),1)
	}else{
		data.completed.splice(data.completed.indexOf(value),1)
	}

	dataObjectUpdated()
	
	list.removeChild(item)
}

function completeItem(){
	const item = this.parentNode.parentNode
	const list = item.parentNode
	const id = list.id
	let value = item.firstChild.value


	if(id === 'todo'){
		data.todo.splice(data.todo.indexOf(value),1)
		data.completed.push(value)
	}else{
		data.completed.splice(data.completed.indexOf(value),1)
		data.todo.push(value)
	}

	dataObjectUpdated()
	
	let target = (id === 'todo') ? document.getElementById('completed') : document.getElementById('todo')

	list.removeChild(item)
	target.insertBefore(item,target.childNodes[0])
}

buttonAdd.addEventListener('click', function(){
	const value = input.value
	if(value){ 
		addItem(value)

		input.value = ''
	}
})

input.addEventListener('keydown', function(e){
	const value = input.value
	if(e.code === 'Enter' && value){ 
		addItem(value)

		input.value = ''
	}
})

// function getCompleteButtons(){
// 	completeButtons = document.querySelectorAll('.complete')
// }

// window.addEventListener('load', getCompleteButtons)

// let lastChecked;

// function handleChange(e){
//   console.log(this)
//   let inBetween = false
//   if(e.shiftKey){
//     completeButtons.forEach(button => {
//       console.log(button)
//       if(button === this || button === lastChecked){
//         inBetween = !inBetween
//       }
//       if(inBetween){
//         button.checked = true
//       }
//     })

//   }

//   lastChecked = this
// }

// // console.log(completeButtons)
// completeButtons.forEach(button => button.addEventListener('click', handleChange))
