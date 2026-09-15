document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       CUSTOM CURSOR
    ========================= */

    const cursor = document.querySelector(".cursor");

    if (cursor && window.innerWidth > 900) {

        document.addEventListener("mousemove", (event) => {

            cursor.style.left = `${event.clientX}px`;
            cursor.style.top = `${event.clientY}px`;

        });

    }


    /* =========================
       SMOOTH LINKS
    ========================= */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", (event) => {

            const targetId = link.getAttribute("href");

            if (targetId === "#") return;

            const target = document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* =========================
       IMAGE FALLBACK
    ========================= */

    const founderImage = document.querySelector(".image-card img");

    if (founderImage) {

        founderImage.addEventListener("error", () => {

            console.warn(
                "Não foi possível carregar eduardo.jpg.jpeg. " +
                "Verifique se o arquivo está na mesma pasta do index.html."
            );

        });

    }


    /* =========================
       MENU MOBILE
    ========================= */

    const menuButton = document.querySelector(".menu-button");
    const nav = document.querySelector(".nav");

    if (menuButton && nav) {

        let menuOpen = false;

        menuButton.addEventListener("click", () => {

            menuOpen = !menuOpen;

            nav.classList.toggle("menu-open", menuOpen);

        });

    }

});
