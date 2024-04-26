let date = new Date();
let time = date.toLocaleTimeString();
let div = document.getElementById("main").value;
let text = document.createTextNode(time);
div.appendChild(text);