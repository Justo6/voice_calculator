/**
 * Created by Justo on 11/29/16.
 */
//callback function defined
function callback(type, value, item) {
    $('#display').html(value);
}
// my_calculator - creates a new calculator object

var my_calculator =  new calculator(callback);

//after DOM load add click handlers to all buttons

$(document).ready(function () {
    $('button').on('click', function () {
        console.log("button clicked");
        var val = $(this).text();

        switch (val) {
            case 'C':
                my_calculator.allClear();
                break;
            default:
                my_calculator.addItem($(this).text());
                break;
        }
    });
})