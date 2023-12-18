let x = "Tamil";
let y = "0000";

let name = prompt("Enter your name :");
let password = prompt("Enter Your Password :");
let a = document.getElementById("header");

//&& y == password
a.style.color = "black"
if (x == name && password.length >= 8) {
    a.innerHTML = "Welcome"
} else {
    a.innerHTML = "Error"
}

let para=document.querySelector('.sample');

para.innerHTML="thisis sample"



let btn=document.getElementById('btn');

btn.addEventListener('click',()=>{
window.open("https://www.wikipedia.org/");
window.print();
console.log('h');
})
