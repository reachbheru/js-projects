const colorList = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "brown", "black", "gray","white"];

function colorChanger() {
    const randomNumber = Math.floor(Math.random()*colorList.length);
    document.body.style.backgroundColor = colorList[randomNumber];
}