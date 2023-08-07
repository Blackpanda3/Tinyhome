let images = document.querySelectorAll(".gal-items-all img");
let previous =document.getElementById("prev");
let next =document.getElementById("next");
let fullImage = document.getElementById("fullImage");
let fullpage = document.getElementById("fullpage-gallery");
let closebtn = document.getElementById("closebtn");
let active = 0;

closebtn.addEventListener("click", function(){
    fullpage.classList.add("hide");
})

fullpage.addEventListener("click", function(event) {
 

    if (!previous.contains(event.target) && !next.contains(event.target)) {
        
            fullpage.classList.add("hide");
        }
      
    
  });


previous.addEventListener("click", function(){
    if(active > 0){
        fullImage.src= images[active - 1].src;
        active--;
    }
    else{
        fullImage.src = images[(images.length-1)].src;
        active = images.length--
    }
    
});

next.addEventListener("click", function(){
    if(active < images.length-1){
        fullImage.src = images[(active + 1)].src;
        active++;

    }
    else{
        fullImage.src= images[0].src;
        active = 0;

    }
})

document.addEventListener('keydown', function(e) {
    if (e.keyCode === 37) {
        document.getElementById("prev").click()
    } else if (e.keyCode === 39) {
        document.getElementById("next").click()
    }
});


for(let i=0; i<images.length; i++){
    images[i].addEventListener("click", function(){
       
        
        let fullpageContent = document.getElementById("fullpage-gallery-content");
        
       

        if(fullpage.classList.contains("hide")){
            fullpage.classList.remove("hide");
        }

        fullImage.src = images[i].src;
        active =i;

      
    }
    )
}
