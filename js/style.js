let dropdownbtn = document.getElementsByClassName("dropdown-btn");  
for(let i = 0; i< dropdownbtn.length; i++){
    dropdownbtn[i].addEventListener("click", function(){
        let arrow = dropdownbtn[i].querySelector(".arrow img");
        if(arrow.classList.contains("rotatearrow")){
            arrow.classList.remove("rotatearrow");
        }
        else{
            arrow.classList.add("rotatearrow");
        }

        let dropdown = dropdownbtn[i].parentElement.querySelector(".dropdown");
        if(dropdown.classList.contains("hide")){
            dropdown.classList.remove("hide");
        }
        else{
            dropdown.classList.add("hide");
        }
    })
}