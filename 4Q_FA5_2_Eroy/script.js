var userInput;
var list = [];

function addContactsFunction(){
    var result ="";
    var userInput = document.getElementById("contact").value;
    list.push(userInput);

    if (list.length>7){
        list.shift();
    }

    for(y in list ){
        result+= list[y] + ", ";
    }
    document.getElementById("output").innerHTML = result;

    console.log("hi");
}

function removeContactFunction(){
    var result ="";
    var userInput = document.getElementById("contact").value;
    list.shift();

    for(y in list ){
        result+= list[y] + ", ";
    }
    document.getElementById("output").innerHTML = result;

    console.log("hi");
}