$(document).ready(function(){
    $(".numberButton").click(numberPressed);
    $(".operatorButton").click(operatorPressed);
    $(".equalsButton").click(processData);
    $(".decimal").click(decimalPressed);
    $("#c").click(clearDisplay);

});
var elementHolder = [""];
var elementIndex = 0;

function numberPressed () {
    elementHolder[elementIndex] += $(this).text();
    displayData();
}
function operatorPressed () {
    elementIndex+=1;
    elementHolder[elementIndex] = ($(this).text());
    elementIndex+=1;
    elementHolder[elementIndex] ='';
    console.log(elementHolder);
    while (elementHolder.length > 3 ){
        processData();
    }
    displayData();
}
function displayData(){
    var output = elementHolder.join('');
    $('#display').val(output);
}
function processData(){
    var num1 = parseFloat(elementHolder[0]);
    var operator =(elementHolder[1]);
    var num2 = parseFloat(elementHolder[2]);
    var result = doMath(num1,num2, operator);
    elementHolder.splice(1,2);
    elementHolder[0]=result;
    elementIndex = elementHolder.length - 1 ;
    displayData();
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
        return (num1 / num2);
    }
    else{
        return null;

    }

}

function decimalPressed () {
    elementHolder += $(this).text();
    displayData();



}

function clearDisplay (){
    elementHolder.splice(0,elementHolder.length);
    elementHolder = [""];
    elementIndex = 0;
    
}






















