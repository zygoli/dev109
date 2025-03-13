
var clearButton = document.getElementById("clear-button");


clearButton.addEventListener("click", function(event) {
   
    var dots = document.getElementsByClassName("dot");
    
    
    while (dots.length > 0) {
        dots[0].parentNode.removeChild(dots[0]);
    }
    
    
    event.stopPropagation();
});


document.addEventListener("click", function(event) {
   
    if (event.target.id !== "clear-button") {
       
        var dot = document.createElement("div");
        dot.className = "dot";
        dot.style.left = (event.pageX - 4) + "px";
        dot.style.top = (event.pageY - 4) + "px";
        
        
        document.body.appendChild(dot);
    }
});
