/* =====================================================
   NORTH — SCRIPT
===================================================== */


/* =====================================================
   CURSOR
===================================================== */

const cursor = document.querySelector(".cursor");

if (cursor) {

    document.addEventListener("mousemove", (event) => {

        cursor.style.left = event.clientX + "px";
        cursor.style.top = event.clientY + "px";

    });


    const interactiveElements = document.querySelectorAll(
        "a, button, .system-item, .process-card"
    );


    interactiveElements.forEach((element) => {

        element.addEventListener("mouseenter", () => {

            cursor.style.width = "13px";
            cursor.style.height = "13px";

        });


        element.addEventListener("mouseleave", () => {

            cursor.style.width = "7px";
            cursor.style.height = "7px";

        });

    });

}



/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");

if (menuButton && nav) {

    menuButton.addEventListener("click", () => {

        nav.classList.toggle("mobile-open");

        menuButton.classList.toggle("active");

    });


    nav.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {

            nav.classList.remove("mobile-open");

            menuButton.classList.remove("active");

        });

    });

}



/* =====================================================
   FADE SUAVE AO ENTRAR NA PÁGINA
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    document.body.classList.add("loaded");

});
