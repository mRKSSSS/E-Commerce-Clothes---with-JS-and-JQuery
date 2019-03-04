/***************************************/
/* Get Subtotal value, shipping value, */
/* and calculate Total value           */
/***************************************/

let paymSubtotal = document.getElementById("paymSubtotal").innerHTML;
if(document.getElementById("subtotal")){
    paymSubtotal = document.getElementById("subtotal").innerHTML;
}

let paymShipping = document.getElementById("paymShipping").innerHTML;

let paymTotal = parseFloat(paymSubtotal) + parseFloat(paymShipping);

document.getElementById("paymTotal").innerHTML = paymTotal;
