var userItem = document.querySelector("#userItem");
var addBtn = document.querySelector("#addBtn");
var main = document.querySelector("#main");
var done = 0;
addBtn.addEventListener("click", function(){
  if (userItem.value.length !== 0) {
    var newItem = document.createElement("h2");
    var newItemBox = document.createElement("div");
    var newButton = document.createElement("button");
    var newClear = document.createElement("button");
    newItem.textContent = userItem.value;
    newButton.textContent = "Task Completed";
    newClear.textContent = "Clear Task";
    newItem.classList.add("edit");
    newItemBox.classList.add("item-box");
    newButton.classList.add("completed");
    newClear.classList.add("completed");
    newItemBox.appendChild(newButton);
    newItemBox.appendChild(newItem);
    newItemBox.appendChild(newClear);
    main.appendChild(newItemBox);
    newItem.onclick = edit;
    newButton.onclick = complete;
    newClear.onclick = clear;
  } else {
    alert("please enter a task");
  }
});

function edit() {
  var editItem = prompt("What would you like to change it to?");
  this.textContent = editItem;
}

function complete() {
  if (done == 0) {
    done += 1;
    this.nextSibling.classList.add("done");
  } else {
    done -= 1;
    this.nextSibling.classList.remove("done");
  }
}

function clear() {
  this.parentNode.style.display = "none";
}
