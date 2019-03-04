$(document).ready(function(){
        
    /*************************************/
    /* Cycle through images in showroowm */
    /*************************************/
    $('.side-img').click(function(event){
        event.preventDefault();
        let currentImg = $('#displayImg').attr('style');
        let sideImg = $(event.currentTarget).attr('style'); 
        $('#displayImg').attr('style', sideImg);
        $(event.currentTarget).attr('style', currentImg);
    });

});