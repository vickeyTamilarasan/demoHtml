function addValues(a, b) {
    // console.log(a+b);
    return (a + b);
}
let x = addValues(10, 2);
console.log(x);


const vari = () => {
    console.log("This is arrow function");
}

vari();

const multiply = (a, b) => {
    console.log(a * b);
}
multiply(2, 4);

setTimeout(() => {
    console.log("set time out function : 2.5 sec");
}, 2500);

var a= setInterval(() => {
    console.log('set interval function : 5 sec');
}, 5000);

clearInterval(a);