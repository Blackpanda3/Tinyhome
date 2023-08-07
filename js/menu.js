const menubtn = document.getElementById("menu-btn");
menubtn.addEventListener("click", function(){
    const navbox = document.getElementById("navboxhide");
    if (navbox.classList.contains("hidesmall")){
        navbox.classList.remove("hidesmall");
    }
    else{
        navbox.classList.add("hidesmall");
    }
});