/* =========================================
   NORTH — INTERAÇÕES
========================================= */


/* CURSOR */

const cursor = document.querySelector(".cursor");

if (cursor) {

  document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

  });

}


/* MENU MOBILE */

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav-links");

if (menuButton && nav) {

  menuButton.addEventListener("click", () => {

    nav.classList.toggle("mobile-open");

  });

}


/* FECHAR MENU AO CLICAR */

document.querySelectorAll(".nav-links a").forEach(link => {

  link.addEventListener("click", () => {

    if (nav) {
      nav.classList.remove("mobile-open");
    }

  });

});


/* SCROLL SUAVE */

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", function (e) {

    const target = document.querySelector(this.getAttribute("href"));

    if (!target) return;

    e.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  });

});


/* PEQUENO EFEITO DE HOVER NOS SISTEMAS */

document.querySelectorAll(".system-item").forEach(item => {

  item.addEventListener("mouseenter", () => {

    const arrow = item.querySelector(".system-arrow");

    if (arrow) {
      arrow.style.color = "#5548ff";
    }

  });


  item.addEventListener("mouseleave", () => {

    const arrow = item.querySelector(".system-arrow");

    if (arrow) {
      arrow.style.color = "";
    }

  });

});
