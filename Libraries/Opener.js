let activeLink = $("#starter").attr("name");
$(function () {
  $(".folder").hide();
  $("#" + activeLink).slideDown(250);

  function openDiv(name) {
    if (name != activeLink) {
      $("#" + name).slideDown(250);
    }
  }

  function closeDiv(name) {
    $("#" + name).slideUp(250);
  }

  $(".nav-link").click(function () {
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
    closeDiv(activeLink);
	setTimeout(() => {  openDiv($(this).attr("name")); }, 500);
	setTimeout(() => {  activeLink = $(this).attr("name"); }, 505);
  });
});
