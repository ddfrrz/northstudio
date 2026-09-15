/* =========================================================
   NORTH — JAVASCRIPT
========================================================= */


/* =========================================================
   CUSTOM CURSOR
========================================================= */

const cursor = document.querySelector(".cursor");
const cursorRing = document.querySelector(".cursor-ring");

if (cursor && cursorRing) {

    document.addEventListener("mousemove", (event) => {

        cursor.style.left = `${event.clientX}px`;
        cursor.style.top = `${event.clientY}px`;

        cursorRing.style.left = `${event.clientX}px`;
        cursorRing.style.top = `${event.clientY}px`;

    });


    const interactiveElements = document.querySelectorAll(
        "a, button, .system-item, .process-item"
    );


    interactiveElements.forEach((element) => {

        element.addEventListener("mouseenter", () => {
            document.body.classList.add("cursor-hover");
        });

        element.addEventListener("mouseleave", () => {
            document.body.classList.remove("cursor-hover");
        });

    });

}


/* =========================================================
   MOBILE MENU
========================================================= */

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav-links");

if (menuButton && nav) {

    menuButton.addEventListener("click", () => {

        nav.classList.toggle("mobile-open");

        menuButton.classList.toggle("active");

    });

}


/* =========================================================
   FECHAR MENU AO CLICAR
========================================================= */

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        nav.classList.remove("mobile-open");

        if (menuButton) {
            menuButton.classList.remove("active");
        }

    });

});


/* =========================================================
   IMAGE FALLBACK
========================================================= */

const founderImage = document.querySelector(".founder-image");

if (founderImage) {

    founderImage.addEventListener("error", () => {

        console.warn(
            "A imagem Eduardo não foi encontrada. Verifique se o arquivo se chama exatamente: eduardo.jpg.jpeg"
        );

    });

}
