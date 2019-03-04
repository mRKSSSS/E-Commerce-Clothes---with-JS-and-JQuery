$(document).ready(function(){
    
    /***************************************/
    /* Get Subtotal value, shipping value, */
    /* and calculate Total value           */
    /***************************************/

    let calcPaymSubtotal = (function calcPaymSubtotal(){
        let paymSubtotal = parseFloat($('#paymSubtotal').html());
        if($('#subtotal').html()){
            paymSubtotal = parseFloat($('#subtotal').html());
        }

        let paymShipping = parseFloat($('#paymShipping').html());

        $('#paymSubtotal').html(paymSubtotal);
        $('#paymTotal').html(paymSubtotal + paymShipping);

        return calcPaymSubtotal;
    })();
});