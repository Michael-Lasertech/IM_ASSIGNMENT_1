const navBar = document.getElementById("navBar");


function createNav(){
    navBar.innerHTML = navCode.innerHTML;
}

navBar.addEventListener("load", createNav);
