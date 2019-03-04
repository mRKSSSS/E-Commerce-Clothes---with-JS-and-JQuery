/*************************************/
/* Cycle through images in showroowm */
/*************************************/

//variable sideImgArr to get the list of side images
let sideImgArr = document.getElementsByClassName("side-img");

for(let i=0; i<sideImgArr.length; i++){
    sideImgArr[i].onclick = function(e){
        e.preventDefault();
        let displayImgStyle = document.getElementById("displayImg").style.backgroundImage;
        let sideImgStyle = sideImgArr[i].style.backgroundImage;
        document.getElementById("displayImg").style.backgroundImage = sideImgStyle;
        sideImgArr[i].style.backgroundImage = displayImgStyle;
    }
}
