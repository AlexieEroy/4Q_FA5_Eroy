do {
    userInput = prompt("Please enter a number.");
}
while(userInput==""||userInput==" "||isNaN(userInput));

document.write("Number entered: " + userInput + "<br/>");

var a=parseInt(userInput);

if(a%2==0){
    myFunctionEven(a);
}
else{
    myFunctionOdd(a);
}

function myFunctionOdd(a){
    var x, y;
    var result="";
    for (x=a; x >= 1; x--) {
        for (var y=a; y>=1; y--) {
            result += x + " ";
        }
        result += "<br>";
    }
    document.write(result);
}

function myFunctionEven(a){
    var x, y;
    var result="";
    for (x=a; x >= 1; x--) {
        for (var y=0; y<x; y++) {
            result += x + " ";
        }
        result += "<br>";
    }
    document.write(result);
}
