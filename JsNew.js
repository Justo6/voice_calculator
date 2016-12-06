$(document).ready(function(){
    $(".numberButton").click(numberPressed);
    $(".operatorButton").click(operatorPressed);
    $(".equalsButton").click(processData);
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
    displayData();
}
function displayData(){
    var output = elementHolder.join('');
    $('#display').val(output);
}
function processData(){
    var num1 = parseInt(elementHolder[0]);
    var operator =(elementHolder[1]);
    var num2 = parseInt(elementHolder[2]);
    var result = doMath(num1,num2, operator);
    elementHolder.splice(1,2);
    elementHolder[0]=result;
    elementIndex = elementHolder.length;
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

function clearDisplay (){
    elementHolder.splice(0,elementHolder.length);
    elementHolder = [""];
    elementIndex = 0;
    
}






















