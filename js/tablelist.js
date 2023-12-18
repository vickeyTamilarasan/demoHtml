let first = document.getElementById('firstCard');
let second = document.getElementById('secondCard');
let third = document.getElementById('thirdCard');
let fourth = document.getElementById('fourthCard');
let tableRow = document.getElementById('tableRow');

tableRow.style.display = "flex";
tableRow.style.justifyContent = "space-evenly";
tableRow.style.position= "absolute";

first.style.border = "1px";
first.style.borderColor = "grey";
first.style.borderStyle = "solid";
first.style.borderRadius = "5px";
first.style.padding = "30px";
first.style.margin = "10px";
first.style.fontFamily = "cursive"

second.style.border = "1px";
second.style.borderColor = "grey";
second.style.borderStyle = "solid";
second.style.borderRadius = "5px";
second.style.padding = "30px";
second.style.fontFamily = "cursive";
second.style.margin = "10px";

third.style.border = "1px";
third.style.borderColor = "grey";
third.style.borderStyle = "solid";
third.style.borderRadius = "5px";
third.style.padding = "30px";
third.style.fontFamily = "cursive";
third.style.margin = "10px";

fourth.style.border = "1px";
fourth.style.borderColor = "grey";
fourth.style.borderStyle = "solid";
fourth.style.borderRadius = "5px";
fourth.style.padding = "30px";
fourth.style.fontFamily = "cursive";
fourth.style.margin = "10px";

let h2 = document.querySelectorAll("h2");

h2[0].addEventListener('click',() => {
    first.style.width = "300px";
    first.style.height = "300px";
    first.style.padding = "10px";
    first.style.boxShadow = "10px 10px 20px 15px gainsboro";
})
h2[1].addEventListener('click',() => {
    second.style.width = "300px";
    second.style.height = "300px";
    second.style.padding = "10px";
    second.style.boxShadow = "10px 10px 20px 15px gainsboro";
})
h2[2].addEventListener('click',() => {
    third.style.width = "300px";
    third.style.height = "300px";
    third.style.padding = "10px";
    third.style.boxShadow = "10px 10px 20px 15px gainsboro";
})
h2[3].addEventListener('click',() => {
    fourth.style.width = "300px";
    fourth.style.height = "300px";
    fourth.style.padding = "10px";
    fourth.style.boxShadow = "10px 10px 20px 15px gainsboro";
})