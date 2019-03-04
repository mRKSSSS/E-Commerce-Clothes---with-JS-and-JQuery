let qtyArr = document.querySelectorAll(".qty");
let plusButArr = document.getElementsByClassName("plus");
let minusButArr = document.getElementsByClassName("minus");

let amountArr = document.querySelectorAll(".amount");

/****************************************/
/* Function to Calculate Subtotal value */
/****************************************/

let calcSubtotal = (function calcSubtotal(){
    let subtotal = 0;
    amountArr = document.querySelectorAll(".amount");
    for(let i=0; i<amountArr.length; i++){
        subtotal += parseFloat(amountArr[i].innerHTML);
    }
    subtotal = subtotal.toFixed(2);
    document.getElementById("subtotal").innerHTML = subtotal; 
    return calcSubtotal;
})();


/******************************************************************/
/* Add/Subtract product quantity and calculate it's total ammount */
/******************************************************************/

let plusSubQtyAm = (function plusSubQtyAm(){

    for(let i=0; i<qtyArr.length; i++){

        // Update array values of qty and amount for all the products
        qtyArr = document.querySelectorAll(".qty");
        amountArr = document.querySelectorAll(".amount");

        // onclick function to be trigered when "plus" button is clicked
        plusButArr[i].onclick = function(){
            // save qty and amount of selected product beforehand
            let qty = parseInt(qtyArr[i].innerHTML);
            let amount = parseFloat(amountArr[i].innerHTML);
            //calculate unitary amount of selected product beforehand
            let unitAmount = amount / qty;
            //Add 1 to qty of selected product
            qty++;
            //Update qty of selected product on screen
            qtyArr[i].innerHTML = qty;
            //add unitary amount to the current amount of that product
            amount = amount + unitAmount;
            //round total amount to have 2 decimal places
            amount = amount.toFixed(2);
            //Update total amount of selected product on screen
            amountArr[i].innerHTML = amount;
            //re-calculate subtotal
            calcSubtotal();
        }

        // onclick function to be trigered when "minus" button is clicked
        minusButArr[i].onclick = function(){
            // save qty and amount of selected product beforehand
            let qty = parseInt(qtyArr[i].innerHTML);
            let amount = parseFloat(amountArr[i].innerHTML);
            //calculate unitary amount of selected product beforehand
            let unitAmount = amount / qty;
            //Subtract 1 to qty of selected product
            //only when qty is 2 or more
            if(qty > 1){
                qty--;
                //Update qty of selected product on screen
                qtyArr[i].innerHTML = qty;
                //Subtract unitary amount of the current amount of that product
                amount = amount - unitAmount; 
                //round total amount to have 2 decimal places
                amount = amount.toFixed(2);
                //Update total amount of selected product on screen
                amountArr[i].innerHTML = amount;
                //re-calculate subtotal
                calcSubtotal();
            }
        }
    }

    return plusSubQtyAm;

})();


/********************************************************/
/* Remove product in table when "icon-cross" is clicked */
/********************************************************/

document.querySelector("#table-container").addEventListener("click", function(e){
    if(e.target && e.target.matches("i.icon-cross")){
       e.target.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(
           e.target.parentNode.parentNode.parentNode.parentNode
        )
    }
    calcSubtotal();   
    plusSubQtyAm();
});