$(document).ready(function(){
    $(".numberButton").click(numberPressed);
    $(".operatorButton").click(operatorPressed);
    $(".equalsButton").click(processData);
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

function operatorPressed () {

    if (elementHolder[elementIndex] === '' || elementHolder.length === 3){
        processData();
    }


        elementIndex++;
        elementHolder[elementIndex] = ($(this).text());
        elementIndex++;
        elementHolder[elementIndex] ='';
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

function processData() {
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




























