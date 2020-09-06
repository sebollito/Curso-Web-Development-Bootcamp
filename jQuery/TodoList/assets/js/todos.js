//check off specific Todos by clicking them
$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

//delete items from Todos list by clicking X
$("ul").on("click", "span", function (event) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
  event.stopPropagation();
});

//
$("input[type='text']").keypress(function (event) {
  if (event.which === 13) {
    //grabbing new todo text from input
    let todoText = $(this).val();
    $(this).val("");
    //create new li with text and add to the ul
    $("ul").append(
      "<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>"
    );
  }
});

$(".fa-plus").on("click", function () {
  $("input[type='text']").fadeToggle();
});
