let btn = document.querySelector(".navbar-toggle").addEventListener('click', toggleNavbar)



function toggleNavbar() {
    let navbarList = document.getElementById("navbarList");
    navbarList.classList.toggle("show");
  }