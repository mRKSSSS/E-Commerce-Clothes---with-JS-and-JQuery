/************************************/
/* Select/Unselet size when clicked */
/************************************/

// variable sizeOptions to get the list of sizes
let sizeOptions = document.getElementsByClassName("size");

for(let i=0; i<sizeOptions.length; i++){
    sizeOptions[i].onclick = function(){
        for(let j=0; j<sizeOptions.length; j++){
            sizeOptions[j].classList.remove("clicked");
        }
        sizeOptions[i].classList.add("clicked");
    }
}