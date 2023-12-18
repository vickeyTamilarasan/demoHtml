let grade =parseInt(prompt("Enter the garde value to cheack:"));

var mark = checkGrade(grade);

function checkGrade(mark) {
    switch (true) {
        case mark >= 80 && mark <= 100:
            console.log("You got A grade");
            break;
        case mark <= 79 && mark >= 50:
            console.log("You got B grade");
            break;
        case mark <= 49 && mark >= 35:
            console.log("you got C grade");
            break;
        case mark <= 34 && mark >= 0:
            console.log("you got F grade");
            break;
        case mark < 0:
            console.log("Invalid grade");
            grade =parseInt(prompt("Enter the garde value to cheack:"));
            mark = checkGrade(grade);
    }
}