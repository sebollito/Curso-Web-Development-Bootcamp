//give all divs purple background
$("div").css("background", "purple");

//give all elements with class highlight width of 200px
$("div.highlight").css("width", "200px");

//give element with id third a orange border
$("#third").css("border", "3px solid orange");

//give first div font color of pink
// $("div").first().css("color", "pink");
// $("div:first").css("color", "pink");
$("div:first-of-type").css("color", "pink");
