$("#colorBtn").on("click", function(){
  //following line toggles(adds) the colorbox2 class, since colorbox2 
  //appears after colorbox1 in the CSS file, it overrides the colorbox1
  $("#colorbox").toggleClass("colorbox2");
  //the following line sets a 3s timer before toggling (this time removing)
  //the colorbox2 class, reverting to the original colorbox1 styling
  setTimeout(function(){ 
    $("#colorbox").toggleClass("colorbox2"); }, 3000);
})