
$(document).ready(function() {
 


main = document.getElementById("btnFwd");

// Variable to hold a reference to the timer
var timer = null;

// Set up an event handler for mousedown
main.addEventListener("mousedown", function(evt){
  // Start a timer that fires a function at 50 millisecond intervals
  timer = setInterval(function(){
    // the function can do whatever you need it to
    console.log("Mous is down!");
  }, 50);
});


// Set up a custom mouseup event handler
main.addEventListener("mouseup", function(evt){
  // Cancel the previously initiated timer function
  clearInterval(timer);
  
  // And, do w0+hatever else you need to:
  console.log("Mouse is Up!");
});

// Set up a custom mouseleave event handler so that
// if the mouse is dragged out of the original element
// and then the mouse is released, the timer will stop
main.addEventListener("mouseleave", function(evt){
  // Cancel the previously initiated timer function
  clearInterval(timer);
  
  // And, do whatever else you need to:
  console.log("Mouse is no longer on element!");
});
});
