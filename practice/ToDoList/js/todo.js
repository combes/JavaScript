// Check off specific To Dos by clicking
$("li").click(function() {
  $(this).toggleClass("completed");
});

// Click on X to delete a To Do
$("span").click(function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  })
  event.stopPropagation();
})
