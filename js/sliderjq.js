$(document).ready(function(){

    //Function to calculate the current width of the slides being 
    //displayed in the screen
    function calcSlideWidth(){
        let slideArr = $('.slide').toArray();
        let carouselWidth = carousel.offsetWidth;
        //count for nr of slides being displayed currently on screen
        let count = 0;

        slideArr.forEach(function(elemIndex){
            let coords = elemIndex.getBoundingClientRect();
            if(coords.left > 0 && coords.left <= carouselWidth){
                count++;
            }
        });

        //Calculate width from each single slide being displayed
        //in the screen
        let slideWidth = Math.round(carouselWidth / count);
        
        return slideWidth;
    }

    // Function to go to next slide
    function goToNextSlide(){
        let slideWidth = calcSlideWidth();

        $('#carousel').css('transition', 'transform .4s');
        $('#carousel').css('transform', 'translateX(-'+slideWidth+'px)');

        setTimeout(function(){
            //Move the first slide to the end of the list
            $('#carousel').append($('.slide')[0]);
            $('#carousel').removeAttr('style');
        },500);
    }

    // Function to go to previous slide
    function goToPrevSlide(){
        let slideWidth = calcSlideWidth();
        
        $('#carousel').removeAttr('style');

        //Move the last slide to the beginning of the list
        $('#carousel').prepend($('.slide').last());
        $('#carousel').css('transform', 'translateX(-'+slideWidth+'px)');

        setTimeout(function(){
            $('#carousel').css('transition', 'transform .4s');
            $('#carousel').css('transform', 'translateX(0px)');
        },0);    
    }

    /*************************************************************/
    /* Click Event Listener Functions to Control Slider Movement */
    /*************************************************************/
    //Call function responsible for the 'after' button click
    $('.slider-after-button').click(function(){
        goToNextSlide();
        clearInterval(timer);
        timer = setInterval(autoPlay, 3000);
    });

    //Call function responsible for the 'before' button click
    $('.slider-before-button').click(function(){
        goToPrevSlide();
        clearInterval(timer);
        timer = setInterval(autoPlay, 3000);
    })

    /*******************/
    /* Autoplay Slider */
    /*******************/
    function autoPlay(){
        goToNextSlide();
    }
    let timer = setInterval(autoPlay, 3000);
    
    /********************/
    /* Lightbox2 Plugin */
    /********************/
    lightbox.option({
        fadeDuration: 400,
        disableScrolling: true
      });
    
});