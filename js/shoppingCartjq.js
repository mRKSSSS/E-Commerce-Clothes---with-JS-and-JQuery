$(document).ready(function(){

    /****************************************/
    /* Function to Calculate Subtotal value */
    /****************************************/
    let calcSubtotal = (function calcSubtotal(){
        let subTotal = 0;
        $('.amount').each(function(){
            subTotal += parseFloat($(this).html());
        });
        subTotal = subTotal.toFixed(2);
        $('#subtotal').html(subTotal);
        return calcSubtotal;
    })();

    /******************************************************************/
    /* Add/Subtract product quantity and calculate it's total ammount */
    /******************************************************************/
    // onclick function to be trigered when "plus" button is clicked
    $('.plus').click(function(event){
        let qty = parseInt($(event.currentTarget).siblings('.qty').html());
        let amount = parseFloat($(event.currentTarget).closest('.cell').next().find('.amount').html());
        
        //calculate unitary amount of selected product beforehand
        let unitAmount = amount / qty;

        //Update qty
        qty++;
        $(event.currentTarget).siblings('.qty').html(qty);

        //Update amount
        amount += unitAmount;
        amount = amount.toFixed(2);
        $(event.currentTarget).closest('.cell').next().find('.amount').html(amount);

        calcSubtotal();

        //Only works with hosted site (e.g. XAMPP)
        // $.getScript('js/paymentjq.js', function(){          
        //     calcPaymSubtotal();  
        // });  
    });

    // onclick function to be trigered when "minus" button is clicked
    $('.minus').click(function(event){
        let qty = parseInt($(event.currentTarget).siblings('.qty').html());
        let amount = parseFloat($(event.currentTarget).closest('.cell').next().find('.amount').html());
        
        //calculate unitary amount of selected product beforehand
        let unitAmount = amount / qty;

        //Minimum qty = 1
        if(qty>1){

            //Update qty
            qty--;
            $(event.currentTarget).siblings('.qty').html(qty);

            //Update amount
            amount -= unitAmount;
            amount = amount.toFixed(2);
            $(event.currentTarget).closest('.cell').next().find('.amount').html(amount);

            calcSubtotal();

            //Only works with hosted site (e.g. XAMPP)
            // $.getScript('js/paymentjq.js', function(){          
            //     calcPaymSubtotal();  
            // });  
        }
    });

    /********************************************************/
    /* Remove product in table when "icon-cross" is clicked */
    /********************************************************/
    $('.icon-cross').click(function(event){
        $(event.currentTarget).closest('.deletable').remove();
        calcSubtotal();
        //Only works with hosted site (e.g. XAMPP)
        // $.getScript('js/paymentjq.js', function(){          
        //     calcPaymSubtotal();  
        // });  
    });

});