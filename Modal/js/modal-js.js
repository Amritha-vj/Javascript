$(document).ready(function () {
    $("#open").click(function () {
      $(".modalContent").addClass("view");
    })
    $("#close").click(function () {
      $(".modalContent").removeClass("view");
    });
  });
  