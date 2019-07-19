$(document).ready(function () {
  $('select').niceSelect();
  $(function () {
    $('.sorted').on('click', function (e) {
      $(this).addClass('sort__active').siblings().removeClass('sort__active');
    });
  })
});