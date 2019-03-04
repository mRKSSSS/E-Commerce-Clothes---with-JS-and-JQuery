$(document).ready(function(){

    /*******************************************************/
    /* Show/Hide primary-nav when hambuger-menu is clicked */
    /*******************************************************/
    $('.hamburger-menu').click(function(){
        // $('#primary-nav').toggle(400);
        // $('#primary-nav').toggleClass('active');
        
        if(!$('#primary-nav').hasClass('active')){
            $('#primary-nav').addClass('active');
            setTimeout(function(){
                $('#primary-nav').addClass('transition');
            });
        }else{
            $('#primary-nav').removeClass('transition');
            $('#primary-nav').one('transitionend', function(){
                $('#primary-nav').removeClass('active');
            });
        }
        
        $('.hamburger-menu').toggleClass('selected');
        $('.hamburger-menu > .icon-menu').toggle();
        $('.hamburger-menu > .icon-cross').toggle();

        //timeout function to remove inline style attribute, in order
        //for the primary-nav to appear when window is resized
        // setTimeout(function(){
        //     let $primaryNav = $('#primary-nav');
        //     if($primaryNav[0].style.display === 'none'){
        //         $primaryNav.removeAttr("style");
        //     }
        // },1000);

    });

    /******************************************/
    /* Show/Hide dropddown Login when clicked */
    /******************************************/
    $('#loginLink').click(function(){
        // closeMenus('.loginMenu', '#loginLink');
        if(!$('.loginMenu').hasClass('active')){
            $('.desktop-options > a').removeClass('selected');
            $('.dropdownMenu').removeClass('active transition');
            $('.loginMenu').addClass('active');
            setTimeout(function(){
                $('.loginMenu').addClass('transition');
            });
        }else{
            $('.loginMenu').removeClass('transition');
            $('.loginMenu').one('transitionend', function(){
                $('.loginMenu').removeClass('active');
            });
        }
        $(this).toggleClass('selected');
        // $('.loginMenu').toggle(400);
        // $('.loginMenu').toggleClass('active');

    });

    /*******************************************************/
    /* Show/Hide dropddown mini shopping cart when clicked */
    /*******************************************************/
    $('#shopCartLink').click(function(){
        // closeMenus('.mini-shopping-cart', '#shopCartLink');
        if(!$('.mini-shopping-cart').hasClass('active')){
            $('.desktop-options > a').removeClass('selected');
            $('.dropdownMenu').removeClass('active transition');
            $('.mini-shopping-cart').addClass('active');
            setTimeout(function(){
                $('.mini-shopping-cart').addClass('transition');
            });
        }else{
            $('.mini-shopping-cart').removeClass('transition');
            $('.mini-shopping-cart').one('transitionend', function(){
                $('.mini-shopping-cart').removeClass('active');
            });
        }
        $(this).toggleClass('selected');
        // $('.mini-shopping-cart').toggle(400);
        // $('.mini-shopping-cart').toggleClass('active');
    });

    /********************************************************/
    /* Show/Hide search-field when search-button is clicked */
    /********************************************************/
    $('.search-button').click(function(){
        $(this).toggleClass('selected');
        $('.search-field').toggleClass('active');
        $('.desktop-options').toggleClass('search-active');
        $('.search-button').toggleClass('search-active');
        
        // Loop through array to hide text of "Login" and "Basket" 
        //and change the margin
        let $hidableOptions = $('.desktop-options > a > #hidable');
        $hidableOptions.each(function(){
            $(this).toggle();
        });

    });

    /********************************************/
    /* Remove product from "mini-shopping-cart" */
    /* when "icon-cross" is clicked             */
    /********************************************/
    $('.mini-shopping-cart').find('.icon-cross').click(function(event){
        $(event.currentTarget).closest('.deletable').remove();
        calcSubtotal();
        calcQtySpan();
    });

    /*****************************************/
    /* Functions to Calculate Subtotal value */
    /* and qty on span tag                   */
    /*****************************************/
    let calcSubtotal = (function calcSubtotal(){
        let subTotal = 0;
        $('.amount2').each(function(){
            subTotal += parseFloat($(this).html());
        });
        subTotal = subTotal.toFixed(2);
        $('#subtotal2').html(subTotal);
        return calcSubtotal;
    })();

    function calcQtySpan(){
        $currQty = $('#shopCartLink').find('span:last-child').html()[1];
        $currQty--;
        $('#shopCartLink').find('span:last-child').html("("+$currQty+")");
    };

    //Function to reset selected class styles in secondary nav
    //and close pssible open dropdown menus
    // function closeMenus(menuClick, optionClick){    
    //     if($(menuClick).css('display') != 'block'){
    //         $('.dropdownMenu').each(function(){
    //             if($(this) != $(menuClick)){
    //                 $(this).removeAttr('style');
    //             }
    //         });
    //         $('.desktop-options > a').each(function(){
    //             if($(this) != $(optionClick)){
    //                 $(this).removeClass('selected');
    //             }
    //         });
    //     }
    // }

});