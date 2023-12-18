let header = document.getElementById("header");

header.innerHTML = "Home screen"
header.style.color = "#ffffff"
header.style.backgroundColor = "#0099ff"
header.style.display = "block"
header.style.textAlign = "center"
header.style.fontFamily = "cursive"

let list = document.getElementById('unlist')

list.style.display = "flex"
list.style.backgroundColor = "grey"
list.style.justifyContent = "space-evenly"
list.style.listStyleType = "none"

let listItem = document.getElementById('list')

listItem.style.backgroundColor = "red"
listItem.style.color = "white"

document.getElementById("imageSource").src = "slider5.jpg";
