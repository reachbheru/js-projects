// taking input as task

let taskList = [];
let count = 0;

function addTask() {
  let taskName = document.getElementById("inputField").value;

  taskList.push(taskName);

  let list = document.getElementById("list");
  list.innerHTML = "";
  taskList.forEach((element) => {
    let li = document.createElement("li");
    li.innerText = element;
    list.appendChild(li);
    createCheckbox(list);
  });
}

// creating checkbox

function createCheckbox(list) {
  const div = document.createElement("div");
  div.className = "checkboxDiv";
  div.id = `checkbox${count}`;
  
  div.style.display = "flex";
  div.style.flexDirection = "column";

  const checkbox = document.createElement("input");
  checkbox.type = `checkbox`;
  checkbox.id = `checkboxInput${count}`;
  div.appendChild(checkbox);
  div.appendChild(document.createElement('br'));
  list.appendChild(div);
  count++;
}
