// LOCOMOTIVE JS
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


// SWIPPER SCRIPT
function page3Animation(){
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

}

function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
      });
}
swiperAnimation();
page3Animation();

// LOADER ANIMATION
function loadingAnimation(){
    
    var loader = document.querySelector("#loader")
    setTimeout(function(){
        loader.style.top =  "-100%"
    },3200)
}
loadingAnimation();