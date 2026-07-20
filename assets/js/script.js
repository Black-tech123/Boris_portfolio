//Grap menu from  the DOM
const mobileMenu = document.getElementById("mobile-menu");
const desktopMenu = document.getElementById("desktop-menu");
// Make our mobile menu sensitive to click event
mobileMenu.addEventListener("click",()=>{
mobileMenu.classList.toggle("active");
desktopMenu.classList.toggle("active");
})