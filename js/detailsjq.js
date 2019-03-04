$(document).ready(function(){

    /************************************/
    /* Select/Unselet size when clicked */
    /************************************/
    $('.size').click(function(event){
        $('.size').removeClass('clicked');
        $(event.currentTarget).addClass('clicked');
    });

});