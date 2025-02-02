$(document).ready(function () {
  $('.dropdown').hover(function () {
      $(this).addClass('show');
      $(this).find('.dropdown-menu').addClass('show');
  }, function () {
      $(this).removeClass('show');
      $(this).find('.dropdown-menu').removeClass('show');
  });
});

function enlargeImg(id) {
  let span = document.getElementById(id);
  if (span.className.match(/\bactive\b/)) {
    span.classList.remove("active");
  } else {
    span.classList.add("active");
  }
}