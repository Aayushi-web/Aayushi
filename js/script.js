const header = document.querySelector("header");
// =================sticky Navbar=============
function stickyNavbar(){
   header.classList.toggle("scrolled",window.pageYOffset>0);
// console.log(window.pageYOffset > 0)
}
stickyNavbar();
window.addEventListener("scroll",stickyNavbar);
