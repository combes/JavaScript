/*
Why Use On()?
- click() only adds listeners for existing elements
- on() will add listeners for all potential future elements
*/

// Check off specific To Dos by clicking
// Add listener to parent so that any 'li' element will be affected.
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

// Click on X to delete a To Do
$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  })
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    // <enter> pressed
    var toDoText = $(this).val();
    $("ul").append('<li><span><i class="fa fa-trash"></i></span> ' + toDoText + "</li>")
    $(this).val("");
  }
})
