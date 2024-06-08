const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// Element Container

var elemC = document.querySelector("#elem-container")
var fixedc = document.querySelector("#fixed-image")
elemC.addEventListener("mouseenter", ()=>{
    fixedc.style.display = "block";
})
elemC.addEventListener("mouseleave", ()=>{
    fixedc.style.display = "none";
})

var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter", function(){
        var image = e.getAttribute("data-image")
        fixedc.style.backgroundImage = `url(${image})`
    })
})
