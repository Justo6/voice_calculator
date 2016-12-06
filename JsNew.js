$(document).ready(function(){

    $("button").click(function(){
        $(this).text();
        console.log($(this).text());
        var value = $(this).text();
    });

});


var elementHolder = [];

function buttonsClicked() {
    var last_index = elementHolder.length - 1;
    if (!isNaN(elementHolder[last_index])){
        elementHolder += elementHolder[last_index]
    }
    else{
        elementHolder.push(elementHolder[last_index])
    }
}









