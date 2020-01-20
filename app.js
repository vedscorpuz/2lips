window.onscroll = function() {stickyNav()};

let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;

stickyNav = () => {
    if(window.scrollY >= sticky) {
        navbar.classList.add("sticky");
    } 
    if (window.scrollY == sticky) {
        navbar.classList.remove("sticky");
    }
}
