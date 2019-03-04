/************************************/
/* Select/Unselet page when clicked */
/************************************/

let pageList = document.getElementsByClassName("page");

for(let i=0; i<pageList.length; i++){
    pageList[i].onclick = function(){
        for(let j=0; j<pageList.length; j++){
            pageList[j].classList.remove("selected");
        }
        this.classList.add("selected");
    }
}