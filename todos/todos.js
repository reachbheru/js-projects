// taking input as task

let taskList = [];
let count = 0;

function addTask() {
  let taskName = document.getElementById("inputField").value;
  if (taskName.trim() !== "") {
    
    taskList.push(taskName);
    let list = document.getElementById("list");
    list.innerHTML = "";
    taskList.forEach((element) => {
      let li = document.createElement("li");
      li.innerText = element;
      list.appendChild(li);
      createCheckbox(list);
      addRemoveButton(li, element);

    });

    document.getElementById("inputField").value = "";
  }
}

// creating checkbox

function createCheckbox(list) {

  const div = document.createElement("div");
  div.className = "checkboxDiv";
  div.id = `checkbox${count}`;
  const checkbox = document.createElement("input");
  checkbox.type = `checkbox`;
  checkbox.id = `checkboxInput${count}`;
  div.appendChild(checkbox);
  div.appendChild(document.createElement("br"));
  list.appendChild(div);
  count++;

}

// addRemoveButton

function addRemoveButton(li, taskName) {

  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.addEventListener("click", () => {
    removeTask(taskName);
  });

  li.appendChild(removeButton);

}

function removeTask(taskName) {

  console.log(taskName);
  console.log(taskList);
  const list = document.getElementById("list");
  const index = taskList.indexOf(taskName);
 
  if (index > -1) {
    taskList.splice(index, 1);
  }

  list.innerHTML = "";

  taskList.forEach((element) => {

    const li = document.createElement("li");
    li.innerText = element;
    list.appendChild(li);
    addRemoveButton(li, element);
    createCheckbox(list);

  });
}
