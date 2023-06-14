const btn = document.getElementById("navbar-toggle")
btn.addEventListener('click', toggleNavbar)


function toggleNavbar(e) {
    e.preventDefault()
    let navbarList = document.getElementById("navbarList");
    navbarList.classList.toggle("show");
  }