window.onscroll = function() {
    addStickyMenu()};

const header = document.querySelector('.header');
var sticky = header.offsetTop;


function addStickyMenu() {
    if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
