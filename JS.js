/**
 * Created by Justo on 11/28/16.
 */



// call back function defined
// Three parameters Type, Value, Item
function callback (type, value, item){
    //switch (expression)
    switch(value){
        case undefined:
           // $('display').html = $('selector').action()
            $('#display').html(""); //take " " and add it to element with the id 'display' in our html
            break; //breaks its out of the switch block
        default: // default keyword specifies the code to run if there is no case match
            $('#display').html(value); //take " " and add it to element with the id display in our html
            break;
    }

}