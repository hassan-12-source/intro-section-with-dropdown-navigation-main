const nav = document.getElementById('nav');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');

menuIcon.addEventListener('click', function(){
    nav.classList.toggle('active');
})

closeIcon.addEventListener('click', function(){
    nav.classList.remove('active');
})

document.getElementById("menu-icon").addEventListener("click", function() {
    document.body.classList.toggle("nav-active");
});

document.getElementById("close-icon").addEventListener("click", function() {
    document.body.classList.remove("nav-active");
});

document.addEventListener('DOMContentLoaded', function() {
    var dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var dropdowns = document.querySelectorAll('.dropdown-2');

    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
});
