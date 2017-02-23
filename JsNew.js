$(document).ready(function(){
    $(".numberButton").click(numberPressed);
    $(".operatorButton").click(operatorPressed);
    $(".equalsButton").click(equalPressed);
    $("#c").click(clearDisplay);
    $(".decimal").click(decimalPressed);
});

var elementHolder = [""];
var elementIndex = 0;
var decimalButtonPressed =false;
var storage=[];

function numberPressed () {
    elementHolder[elementIndex] += $(this).text();
    displayData();

}
function equalPressed(){
    processData($(this).text())
}
function operatorPressed () {
    elementIndex = 1;
    if (elementHolder[0] == [""] ){
        return;
    }
    if(elementHolder.length===3) {
        processData($(this).text());
    }
    else{
        elementHolder[1] = ($(this).text());
    }

    if(elementHolder[1] !== undefined){
        elementHolder[1] = ($(this).text());
    }
        elementIndex++;
        elementHolder[2] = '';
        decimalButtonPressed = false;
        displayData();
}

function decimalPressed () {
    if(decimalButtonPressed ){
       return;
    }else {
        elementHolder[elementIndex] += $(this).text();
        displayData();
        decimalButtonPressed = true;
    }
}

function displayData(){
    var output = elementHolder.join(' ');
    $('#display').val(output);
}

function processData(last_operator) {
    var last_operator = last_operator;
    //only works if you have 1 operator and a operand
    if (elementHolder.length <= 3 && elementHolder[2] == "") {
        var num1 = parseFloat(elementHolder[0]);
        var operator = elementHolder[1];
        var num2 = parseFloat(elementHolder[0]);
        elementHolder[2] = num2;
        var result = doMath(num1, num2, operator);
        elementHolder[0] = result;
        elementHolder.splice(1, 2);
        displayData();
        return result;
    }
    // operation repeat
    if (!isNaN(elementHolder[0]) && (isNaN(elementHolder[1]) && elementHolder[1] == undefined)) {
        var num1 = parseFloat(elementHolder[0]);
        var operator = storage[0];
        var num2 = storage[1];
        var result = doMath(num1,num2,operator);
        elementHolder[0] = result;
        displayData();
        return result;
    }
    //basic guide for 2 operators and 1 operand

    if (elementHolder.length >= 3 && elementHolder[2] !== '') {
        if(last_operator == "+" ||last_operator == "-" || last_operator == "/" ||last_operator == "x" ){
            var num1 = parseFloat(elementHolder[0]);
            var operator = (elementHolder[1]);
            var num2 = parseFloat(elementHolder[2]);
            var result = doMath(num1, num2, operator);
            storage.push(operator);
            storage.push(num2);
            elementHolder[0] = result;
            elementHolder[1] = last_operator;
            elementHolder.splice(2, 1);
            elementIndex = elementHolder.length - 1;
        }
    }
    if(last_operator == "="){
        var num1 = parseFloat(elementHolder[0]);
        var operator = (elementHolder[1]);
        var num2 = parseFloat(elementHolder[2]);
        var result = doMath(num1, num2, operator);
        storage.push(operator);
        storage.push(num2);
        elementHolder[0] = result;
        elementHolder.splice(1, 2);
        elementIndex = elementHolder.length - 1;
    }

    displayData();
    decimalButtonPressed = true;
}

function doMath(num1, num2, operator) {

    if(operator ===  "+" ){
        return (num1 + num2);
    }
    else if (operator === "-"){
        return (num1 - num2);
    }
    else if (operator === '*'|| operator === "x"){
        return (num1 * num2);
    }
    else if (operator === '/'){
        if (operator === '/' && num2 == 0){
            return ("Error");
        }
        return (num1 /num2);
    }
    else{
        return null;
    }
}

function clearDisplay (){
    elementHolder.splice(0,elementHolder.length);
    elementHolder = [""];
    elementIndex = 0;
    var output = elementHolder.join(' ');
    $('#display').val(output);
    decimalButtonPressed =false;
    storage = [];
}




























