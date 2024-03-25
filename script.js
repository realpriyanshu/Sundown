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

var t1 = document.querySelector("#t1");
var t2 = document.querySelector("#t2");
var t3 = document.querySelector("#t3");
var img = document.querySelector("#boxright")
var h1 = document.querySelectorAll("#boxleft h1")
var para = document.querySelector("#para")

h1.forEach(function(a){
    a.addEventListener('mouseenter' ,function(){
        a.style.borderLeft = "3px solid red";

    })
    a.addEventListener('mouseleave' ,function(){
        a.style.borderLeft = "3px solid rgba(128, 128, 128, 0.679";
        
    })

    a.addEventListener("click",function(){
        if(a == h1[0]){img.style.backgroundImage =`url(${"https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15e1_Project-p-1080.jpg"})`;
        para.innerHTML = "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings."
        t1.style.color = "#fff";
        t2.style.color="rgba(128, 128, 128, 0.679";
        t3.style.color="rgba(128, 128, 128, 0.679";

        }
        else if(a == h1[1]){
            img.style.backgroundImage =`url(${"https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15d0_Project.webp"})`;
            para.innerHTML = "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need."
            t2.style.color="#fff";
            t1.style.color="rgba(128, 128, 128, 0.679";
            t3.style.color = "rgba(128, 128, 128, 0.679";
        }
        else{
    
            img.style.backgroundImage =`url(${"https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15cd_Execution-p-1080.jpg"})`;
            para.innerHTML="We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience."
            t3.style.color = "#fff"
            t2.style.color="rgba(128, 128, 128, 0.679";
            t1.style.color="rgba(128, 128, 128, 0.679";
           

        }
    })
})





