function handleNav() {
  const btn = document.getElementById("btn");
  const nav = document.getElementById("nav");

  if (!btn.classList.contains("on")) {
    btn.classList.add("on");
    nav.classList.add("on");
  } else {
    btn.classList.remove("on");
    nav.classList.remove("on");
  }
}

new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,
  anchors: ["page_1", "page_2", "page_3", "page_4"],
  menu: "#nav",
  lazyLoad: true
});

fullpage_api.setAllowScrolling(true);
