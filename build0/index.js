function navItenDropDown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function classToggle() {
  // const navs = document.querySelectorAll('.nav-links');
  // console.log(navs);
  // navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
  var x = document.getElementById("nav-links");

  //must match the css display value in style.css ".navbar" under @media
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// document.querySelector('#toggle-icon')
//   .addEventListener('click', classToggle);