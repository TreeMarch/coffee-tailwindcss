const topMenu = document.getElementById("gt-top-menu");
const toggleTopMenuIcon = document.getElementById("gt-toggle-menu-icon");

document.addEventListener("click", (e) => {
  if (toggleTopMenuIcon.contains(e.target)) {
    // click nut menu => menu responsive
    topMenu.classList.toggle("hidden");
    topMenu.classList.toggle("gt-togmenu-expanded");
  } else {
    // click ra ngoai => dong menu
    if (topMenu.classList.contains("gt-togmenu-expanded")) {
      topMenu.classList.remove("gt-togmenu-expanded");
      topMenu.classList.add("hidden");
    }
  }
});
