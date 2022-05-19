const NUMBER_Of_PROJECTS = 3;

//* declaring dom elements variables

const cards = [$("#card1").get(0), $("#card2").get(0), $("#card3").get(0)];
const overlays = [
  $("#overlay1").get(0),
  $("#overlay2").get(0),
  $("#overlay3").get(0),
];
const datas = [$("#data1").get(0), $("#data2").get(0), $("#data3").get(0)];

if (is_touch_enabled()) {
  for (let i = 0; i < NUMBER_Of_PROJECTS; i++) {
    cards[i].addEventListener("click", () => {
      if (overlays[i].style.visibility == "visible") {
        overlays[i].style.visibility = "hidden";
        datas[i].style.transform = "translateY(calc(180px + 1em))";
      } else {
        overlays[i].style.visibility = "visible";
        datas[i].style.transform = "translateY(0)";
      }
    });
  }
}
function is_touch_enabled() {
  return "ontouchstart" in window;
}

AOS.init();
form = document.querySelector("#contact-form");
btn = document.querySelector("#submit-btn");
btn.addEventListener("click", () => {
  form.submit();
});
