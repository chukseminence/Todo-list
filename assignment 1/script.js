const todoValue = document.getElementById("todoText");

listItems = document.getElementById("list-items");
addUpdateClick = document.getElementById("AddUpdateClick");
let updateText
let todoData = JSON.parse(localStorage.getItem("todoData"));
if (!todoData) {
  todoData = [];
}

todoValue.addEventListener("keypress", function (e) {

    if (e.key === "Enter"){
        addUpdateClick.click();
    }
    

    
});
ReadToDoItems();
function ReadToDoItems(){
  console.log(todoData);
  todoData.array.forEach(element => {
    let li = document.createElement("li");
    let style = "";
    if (element.status){
      style = "style`text-decoration: line-through`";
    }
    const todoItems = `<div $(style) ondblclick="CompletetTodoItem(this)">${element.item}</div>`;
    li.innerhtml = todoItems;
    listItems.appendChild(li)
    
  });

}

function CreateToDoData() {
    
    if (todoValue.value === ""){

        alert("Please Enter Your ToDo Text");

        todoValue.focus();

    }

    let li = document.createElement("li");
    const todoItems = `<div ondblclick="CompletetTodoItem(this)">${todoValue.value}</div> <div> <img class="edit todo-controls" onclick = "UpdateToDoItems(this)"  src ="images/pen2.png" />  <img class="delet todo-controls" onclick = "DeleteToDoItems(this)" src = "images/delet.png" /> </div>`;

    li.innerHTML = todoItems;
    listItems.appendChild(li);
    

     if (!todoData){
      todoData = [];
     }
    let dataItem = { item:todoData.value, status:false};
    console.log(dataItem);
     todoData.push(dataItem);
     localStorage.setItem("todoData", JSON.stringify(todoData));
     todoValue.value = "";

}

function  CompletetTodoItem (e){

    
    if (e.parentElement.querySelector("div").style.textDecoration === "") {
      e.parentElement.querySelector("div").style.textDecoration ="line-through";
      todoData.forEach((element)=>{
        if (e.parentElement.querySelector("div").innerText.trim() == element.item
      ){
         element.status = true; 
        }
      });
    }

}

function UpdateOnSelectionItems() {

  updateText.innerText = todoValue.value;
  addUpdateClick.setAttribute("onclick", "CompletetTodoItem()");
  addUpdateClick.setAttribute("src", "/images/plus.png");
  todoValue.value = "";
}

function UpdateToDoItems (e) {
  if (
    e.parentElement.parentElement.querySelector("div").style.textDecoration ===  
    ""
) {
   todoValue.value =
    e.parentElement.parentElement.querySelector("div").innerText;

    addUpdateClick.setAttribute("onclick", "UpdateOnSelectionItems()");
    addUpdateClick.setAttribute("src","/images/refresh.png");
    updateText = e.parentElement.parentElement.querySelector("div");
  }
}

function DeleteToDoItems (e) {
  let deleteValue = e.parentElement.parentElement.querySelector("div").innerText;
  if (confirm (`Are You Sure? Do You Want to delete this ${deleteValue}!`)){
    e.parentElement.parentElement.parentElement.querySelector("li").remove();
  }

}



