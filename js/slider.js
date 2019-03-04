let carousel = document.getElementById("carousel");
let slideArr = document.querySelectorAll(".slide");
let beforeBut = document.querySelector(".slider-before-button");
let afterBut = document.querySelector(".slider-after-button");

/*************************************************************/
/* Click Event Listener Functions to Control Slider Movement */
/*************************************************************/

//Function responsible for the 'after' button click
afterBut.addEventListener("click", function(){

    //Call function to calculate the current width of the slides 
    //being displayed in the screen
    let slideWidth = calcSlideWidth();

    //Add inline transition css property for smoother slider movement
    carousel.style.transition = "transform .4s";
    //Add inline transform css property for the slider to move to the 
    //right with the calculated px value
    carousel.style.transform = "translateX(-"+slideWidth+"px)";

    //Timeout function to be executed after the slide movement
    //transition ended
    setTimeout(function(){
        //Move the first slide to the end of the list
        carousel.appendChild(slideArr[0]);
        //Remove all inline css styles
        carousel.removeAttribute("style");
    },500);

    /***************************************/
    /* Simple solution without transitions */
    /***************************************/
    //Update array with all images/slides
    // slideArr = document.querySelectorAll("#slide");
    //Put the first image/slide (li) in the last position of the ul
    // carousel.appendChild(slideArr[0]);
})

//Function responsible for the 'before' button click
beforeBut.addEventListener("click", function(){

    //Call function to calculate the current width of the slides 
    //being displayed in the screen
    let slideWidth = calcSlideWidth();
    
    //Remove all inline css styles
    carousel.removeAttribute("style");
    //Move the last slide to the start of the list
    carousel.insertBefore(slideArr[slideArr.length-1],slideArr[0]);
    //Position the carousel 1 slide ahead to the right
    carousel.style.transform = "translateX(-"+slideWidth+"px)";
    
    // let transformValue = carousel.style.getPropertyValue("transform");
    // let translateXValue = Number(transformValue.replace(/[^\d]/g, ''));  
    // translateXValue -= slideWidth;

    //Function to be executed necessarily in the end
    setTimeout(function(){
        //Add inline transition css property for smoother slider movement
        carousel.style.transition = "transform .4s";
        //Add inline transform css property for the slider to move back
        //to the original position and show the 1st slide
        carousel.style.transform = "translateX(0px)";
    },0);

    /****************************************************/
    /* Simple solution without transform and transition */
    /****************************************************/
    // //Update array with all images/slides
    // slideArr = document.querySelectorAll("#slide");
    // //Put the last image/slide (li) in the first position of the ul
    // carousel.insertBefore(slideArr[slideArr.length-1],slideArr[0]);
})


//Function to calculate the curent width of the slides being displayed in
//the screen
function calcSlideWidth(){
    //Update array with all images/slides
    slideArr = document.querySelectorAll(".slide");
    //Save width from carousel section
    let carouselWidth = carousel.offsetWidth;
    //Create counter to determine the number of slides currently
    //being displayed in the screen
    let count = 0;
    for(let i=0; i<slideArr.length; i++){
        let coords = slideArr[i].getBoundingClientRect();
        if(coords.left > 0 && coords.left <= carouselWidth){
            count++;
        }
    }
    //Calculate width from each single slide being displayer
    //in the screen
    let slideWidth = Math.round(carouselWidth / count);
    return slideWidth;
}