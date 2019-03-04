$(document).ready(function(){

    $('.question').on('click', function(){
        if($(this).next().css('display') == 'list-item'){
            $(this).removeClass('selected');
            $(this).next().slideUp();
        }else{
            $('.question').removeClass('selected');
            $('.answer').slideUp();
            $(this).addClass('selected');
            $(this).next().slideDown();
        }
    });

});