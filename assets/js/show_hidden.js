const menuOpener = document.querySelector(".menu__opener");
const menuCloser = document.querySelector(".menu__closer");
const menulist = document.querySelector(".menu_list");
const links = document.querySelectorAll(".menu_list li a");

menuOpener.addEventListener("click", function () {
    menulist.classList.toggle('menu_show')
    menuCloser.style.display = 'block';
    menuOpener.style.display = 'none';
})

menuCloser.addEventListener("click", function () {
    menuCloser.style.display = 'none';
    menuOpener.style.display = 'block';
    menulist.classList.toggle('menu_show')
})

links.forEach(link => {
    link.addEventListener('click', function () {
        menulist.classList.toggle('menu_show');
        menuCloser.style.display = 'none';
        menuOpener.style.display = 'block';
    });
})


