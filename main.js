$("#colorBtn").on("click", function(){
  //following line toggles(adds) the colorbox2 class, since colorbox2 
  //appears after colorbox1 in the CSS file, it overrides the colorbox1
  $("#colorbox").toggleClass("colorbox2");
  //the following line sets a 3s timer before toggling (this time removing)
  //the colorbox2 class, reverting to the original colorbox1 styling
  setTimeout(function(){ 
    $("#colorbox").toggleClass("colorbox2"); }, 3000);
})

//given a little more time, I would probably explore the .delay() and 
//.queue() jQuery methods


//just for fun...
var williams = '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/YtyrRpGAg34?rel=0" frameborder="0" allowfullscreen></iframe>';
var mahler = '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/OGZDL8BYotU?rel=0" frameborder="0" allowfullscreen></iframe>';
var bach = '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/PCicM6i59_I?rel=0" frameborder="0" allowfullscreen></iframe>'

var musician = $(".select").val();

$(".select").change(function(musican) {
  console.log($(".select").val());
  var musician = $(".select").val();
  if(musician == "williams") {
    $("#youtube").html(williams);
  } else if (musician == "mahler") {
    $("#youtube").html(mahler);
  } else if (musician == "bach") {
    $("#youtube").html(bach);
  }
});

