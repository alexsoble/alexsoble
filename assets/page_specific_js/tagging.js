$(function() {
  $(".tag-activate").click(function() {
    var tag = $(this).attr('data-tag');
    var posts = $(".post." + tag);
    $(".post").hide();
    posts.show();
  });
});