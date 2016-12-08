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

function numberPressed () {
    elementHolder[elementIndex] += $(this).text();
    displayData();
}

function operatorPressed () {
    if(elementHolder[elementIndex] === '' && elementHolder.length === 3){
        elementHolder.splice(elementIndex-1,2);
        elementIndex = elementIndex -2 ;
    }
    elementIndex+=1;
    elementHolder[elementIndex] = ($(this).text());
    elementIndex+=1;
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
    while (elementHolder.length >= 3 && elementHolder[2]!='') {
        var num1 = parseFloat(elementHolder[0]);
        var operator = (elementHolder[1]);
        var num2 = parseFloat(elementHolder[2]);
        var result = doMath(num1, num2, operator);
        elementHolder.splice(1, 2);
        elementHolder[0] = result;
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
    
}


























