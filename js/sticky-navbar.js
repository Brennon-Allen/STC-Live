window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".sticky-navbar");
  var navbarTop = navbar.getBoundingClientRect().top + window.scrollY;
  var body = document.querySelector('.main-body');
  var placeholder = document.querySelector('.nav-placeholder');
  var sections = document.getElementsByTagName('section')
  
  if (window.scrollY >= navbarTop) {
    navbar.style.top = "0"; // Change to white when scrolling
    navbar.style.zIndex = "1000";
    navbar.style.backgroundColor = "rgb(0, 0, 0, .75)"; // Change to white when scrolling
    navbar.style.transition = "300ms";
    navbar.style.padding = "5px";
    navbar.style.position = "sticky"; // Change to white when scrolling
  } else {
    navbar.style.backgroundColor = "transparent"; // Back to transparent at top
  }
});
