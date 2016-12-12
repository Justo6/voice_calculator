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
    //I don't have 2 operands and an operator to do math
    if (elementHolder.length <= 3 || elementHolder[2] != '') {
        //do I have a 1st operand and an operator??
        if (!isNaN(elementHolder[0]) && (isNaN(elementHolder[1]) && elementHolder[1] != undefined)) {
            //copy thele 1st operand to the 2nd operand
            console.log("We have 1st operand and operator");
            var num1 = parseFloat(elementHolder[0]);
            var operator = elementHolder[1];
            var num2 = parseFloat(elementHolder[0]);
            elementHolder[2]= num2;
            var result = doMath(num1, num2, operator);

            return result;

        }
        else {
            //otherwise, do I have only a 1st operand?

        }


        //do I have an operator and 2nd operand from my previous calculation?
        //copy the operator into the elementHolder array at the appropriate place
        //copy the 2nd operand into the elementHolder array at the appropriate place
    } //continue with math
    while (elementHolder.length >= 3 && elementHolder[2] != '') {
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

//


























