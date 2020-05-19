const jumbo1 = $("h2#fade1");
const jumbo2 = $("span#fade2");
const jumbo3 = $("span#fade3");
const jumbo4 = $("span#fade4");
const jumbo5 = $("span#fade5");
const btn = $("#start");

jumbo1.hide();
jumbo2.hide();
jumbo3.hide();
jumbo4.hide();
jumbo5.hide();
$(".left").hide();
$(".right").hide();
$("footer").hide();

$(document).ready(() => {
  // jumbo1.hide();
  // jumbo2.hide();
  // jumbo3.hide();
  // jumbo4.hide();
  // jumbo5.hide();
  // $(".left").hide();
  // $(".right").hide();
  $(btn).on("click", function () {
    btn.hide();
    jumbo1.delay(400 * 0).fadeIn("slow");
    jumbo2.delay(400 * 1).fadeIn("slow");
    jumbo3.delay(400 * 2).fadeIn("slow");
    jumbo4.delay(400 * 3).fadeIn("slow");
    jumbo5.delay(400 * 4).fadeIn("slow");
    $(".left")
      .delay(400 * 5)
      .fadeIn("slow");
    $(".right")
      .delay(400 * 5)
      .fadeIn("slow");
    $("footer")
      .delay(400 * 6)
      .fadeIn("slow");
  });
});
