let grocery = document.getElementById("grocery");
grocery.addEventListener("submit", addItem);
function addItem(e) {
  e.preventDefault();
  let data = this.elements.writeList.value;
  let list = document.querySelector("ol");
  let item = document.createElement("li");
  let text = document.createElement("p");

  text.textContent = data;
  this.elements.writeList.value = "";

  item.append(text);
  list.append(item);

  let removeButton = document.createElement("span");
  removeButton.classList.add("remove");
  item.append(removeButton);
  removeButton.addEventListener("click", deleteItem);

  item.addEventListener("click", doneItem);
}

function deleteItem(e) {
  this.parentElement.remove();
}

function doneItem(e) {
  this.classList.toggle("done");
}
