/**************************/
/* VARIABLES DESCLARATION */
/**************************/

//Variable for the drop down menu
let dropDownMenu = document.querySelector(".primary-nav");
//Flag to control if menu is displayed or not 
let dropDownMenuDisplay = false;

//Flag to control if search-field is displayed or not
let searchFieldDisplay = false;
//Variable to hold the array with the options to hide
let hidableOptions = document.querySelectorAll(".desktop-options>a>#hidable");
//Variable for the search field and button
let searchField = document.querySelector(".search-field"); 
let searchButton = document.querySelector(".search-button");

//Variables for the shop cart button and shop cart drop down menu
let shopCartButton = document.getElementById("shopCart");
let shopCartMenu = document.querySelector(".mini-shopping-cart");
//Flag to control if shop cart dropdown menu is displayed or not
let shopCartMenuDisplay = false;

//Variables to hold the login menu button and drop downn menu
let loginButton = document.getElementById("login");
let loginMenu = document.querySelector(".loginMenu");
//Flag to control if login drop down menu is displayed or not
let loginMenuDisplay = false;


/*******************************************************/
/* Show/Hide primary-nav when hambuger-menu is clicked */
/*******************************************************/

document.querySelector(".hamburger-menu").addEventListener("click", function(){
    if(dropDownMenuDisplay === false){
        dropDownMenu.style.display = "block";
        dropDownMenu.style.opacity = "0";
        setTimeout(function(){
            dropDownMenu.style.transform = "translateY(10.2%)";
            dropDownMenu.style.opacity = "1";
        },0);
        dropDownMenuDisplay = true;
        document.querySelector(".icon-menu").style.display = "none";
        document.querySelector(".icon-cross").style.display = "block";
        document.querySelector(".hamburger-menu").classList.add("selected");
    }else{
        dropDownMenu.style.opacity = "0";
        dropDownMenu.style.transform = "translateY(0%)";
        dropDownMenuDisplay = false;
        document.querySelector(".icon-menu").removeAttribute("style");
        document.querySelector(".icon-cross").removeAttribute("style");
        document.querySelector(".hamburger-menu").classList.remove("selected");
        setTimeout(function(){
            dropDownMenu.removeAttribute("style");
        },500);
    }
});


/********************************************************/
/* Show/Hide search-field when search-button is clicked */
/********************************************************/

searchButton.addEventListener("click", function(){
    if(searchFieldDisplay === false){
        searchButton.style.marginLeft = "0px";
        searchField.style.display = "inline-block";
        setTimeout(function(){
            searchField.style.opacity = "1";
        },0);
        searchFieldDisplay = true;
        searchButton.classList.add("selected");
        // Loop through array to hide text of "Login" and "Basket" and change the margin
        for(let i=0; i<hidableOptions.length; i++){
            hidableOptions[i].style.display = "none";
            document.querySelectorAll(".desktop-options")[i].style.margin = "0px 5px";
        }
    }else{
        searchFieldDisplay = false;
        searchButton.classList.remove("selected");
        searchButton.removeAttribute("style");
        searchField.removeAttribute("style");
        // Loop through array to show text of "Login" and "Basket" and put original margin        
        for(let i=0; i<hidableOptions.length; i++){
            hidableOptions[i].removeAttribute("style");
            document.querySelectorAll(".desktop-options")[i].removeAttribute("style");
        }
    }
});


/*******************************************************/
/* Show/Hide dropddown mini shopping cart when clicked */
/*******************************************************/

shopCartButton.addEventListener("click", function(){
    if(shopCartMenuDisplay === false){
        resetStyles();
        shopCartMenu.style.display = "block";
        document.getElementById("shopCartLink").classList.add("selected");
        setTimeout(function(){
            shopCartMenu.style.transform = "translateY(22%)";
            shopCartMenu.style.opacity = "1";
        },0);
        shopCartMenuDisplay = true;
    }else{
        shopCartMenu.style.opacity = "0";
        shopCartMenu.style.transform = "translateY(0%)";
        document.getElementById("shopCartLink").classList.remove("selected");
        setTimeout(function(){
            shopCartMenu.removeAttribute("style");
            shopCartMenuDisplay = false;
        },500);   
    }
})


/******************************************/
/* Show/Hide dropddown Login when clicked */
/******************************************/

loginButton.addEventListener("click", function(){
    if(loginMenuDisplay === false){
        resetStyles();
        loginMenu.style.display = "block";
        document.getElementById("loginLink").classList.add("selected");
        setTimeout(function(){
            loginMenu.style.transform = "translateY(22.5%)";
            loginMenu.style.opacity = "1";
        },0);
        loginMenuDisplay = true;
    }else{
        loginMenu.style.opacity = "0";
        loginMenu.style.transform = "translateY(0%)";
        document.getElementById("loginLink").classList.remove("selected");
        setTimeout(function(){
            loginMenu.removeAttribute("style");
            loginMenuDisplay = false;
        },500); 
    }
})

//Function to reset selected class styles in secondary nav
//and close pssible open dropdown menus
function resetStyles(){
    let desktopOptionLinks = document.querySelectorAll(".desktop-options>a");
    for(let i=0; i<desktopOptionLinks.length; i++){
        desktopOptionLinks[i].classList.remove("selected");
    }
    loginMenu.removeAttribute("style");
    loginMenuDisplay = false;
    shopCartMenu.removeAttribute("style");
    shopCartMenuDisplay = false;
}
