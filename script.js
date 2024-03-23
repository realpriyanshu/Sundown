const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var container = document.querySelector("#elem-container");
var fixed = document.querySelector("#fixed-image");

container.addEventListener("mouseenter",function(){
    fixed.style.display = "block"
})
container.addEventListener("mouseleave",function(){
    fixed.style.display = "none"
})

var elems = document.querySelectorAll(".elem")

elems.forEach(function(k){
    k.addEventListener("mouseenter", function(){
        let img = k.getAttribute("data-name");
        fixed.style.backgroundImage = `url(${img})`;
        
    })
});

