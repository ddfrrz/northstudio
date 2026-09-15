// ==============================
// NORTH — INTERAÇÕES
// ==============================


// HEADER AO ROLAR

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


// CURSOR

const cursor = document.querySelector(".cursor");

if (cursor && window.innerWidth > 800) {

    document.addEventListener("mousemove", (event) => {
        cursor.style.left = `${event.clientX}px`;
        cursor.style.top = `${event.clientY}px`;
    });

    const interactiveElements = document.querySelectorAll(
        "a, button, .system, .work-card"
    );

    interactiveElements.forEach((element) => {

        element.addEventListener("mouseenter", () => {
            cursor.classList.add("active");
        });

        element.addEventListener("mouseleave", () => {
            cursor.classList.remove("active");
        });

    });
}


// MENU MOBILE

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");

if (menuButton && nav) {

    menuButton.addEventListener("click", () => {

        nav.classList.toggle("mobile-open");

    });

}


// FECHAR MENU AO CLICAR

document.querySelectorAll(".nav a").forEach((link) => {

    link.addEventListener("click", () => {

        nav.classList.remove("mobile-open");

    });

});


// REVEAL AO ENTRAR NA TELA

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.12
    }
);


document
    .querySelectorAll(
        ".statement-content, .system, .work-card, .process-grid article, .about-content, .contact-content"
    )
    .forEach((element) => {

        observer.observe(element);

    });


// ANO AUTOMÁTICO

const yearElements = document.querySelectorAll(
    ".footer-bottom span:first-child"
);

yearElements.forEach((element) => {

    element.innerHTML = `© ${new Date().getFullYear()} NORTH`;

});
