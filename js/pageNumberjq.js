$(document).ready(function(){

    /************************************/
    /* Select/Unselet page when clicked */
    /************************************/
    $('.page').click(function(event){
        $('.page').removeClass('selected');
        $(event.currentTarget).addClass('selected');
    });

});