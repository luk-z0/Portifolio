document.getElementById("projeto1").addEventListener('click', () => {
    window.open("https://github.com/luk-z0/LocadoraDeCarros");
});
document.getElementById("projeto2").addEventListener('click', () => {
    window.open("http://github.com/Jovitor-jva/GeekBlog");
});
document.getElementById("projeto3").addEventListener('click', () => {
    window.open("https://github.com/luk-z0/DesafioLiferay");
});

let menu = document.querySelector(".menu-itens");
let checkbox = document.getElementById("toggle");

let show = true;

function closeMenu() {
    menu.addEventListener("click", (event) => {
        event.stopPropagation();


        if (event.target.tagName === 'A' && !show) {
            menu.style.visibility = 'hidden';
            checkbox.checked = false;
        }
        if (checkbox.click()) {
            menu.style.visibility = "visible";
        }


    });

}

let button = document.querySelector("#back-to-top");

button.addEventListener("click", function () {
    window.scrollTo(0, 0);
});


closeMenu();



