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