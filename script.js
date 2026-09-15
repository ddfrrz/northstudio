/* =====================================================
   NORTH — SCRIPT
   ===================================================== */


/* =====================================================
   CUSTOM CURSOR
   ===================================================== */

const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");

if (cursor && follower && window.innerWidth > 700) {

    let mouseX = 0;
    let mouseY = 0;

    let followerX = 0;
    let followerY = 0;

    document.addEventListener("mousemove", (event) => {

        mouseX = event.clientX;
        mouseY = event.clientY;

        cursor.style.left = mouseX + "px";
        cursor.style.top = mouseY + "px";

    });


    function animateFollower() {

        followerX += (mouseX - followerX) * 0.12;
        followerY += (mouseY - followerY) * 0.12;

        follower.style.left = followerX + "px";
        follower.style.top = followerY + "px";

        requestAnimationFrame(animateFollower);
    }

    animateFollower();


    const interactiveElements = document.querySelectorAll(
        "a, button, .system-item, .founder-image-wrap"
    );

    interactiveElements.forEach((element) => {

        element.addEventListener("mouseenter", () => {

            follower.style.width = "48px";
            follower.style.height = "48px";
            follower.style.background = "rgba(255,255,255,.05)";

        });

        element.addEventListener("mouseleave", () => {

            follower.style.width = "28px";
            follower.style.height = "28px";
            follower.style.background = "transparent";

        });

    });

}


/* =====================================================
   MOBILE MENU
   ===================================================== */

const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");

if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", () => {

        mobileMenu.classList.toggle("active");

    });


    const mobileLinks = mobileMenu.querySelectorAll("a");

    mobileLinks.forEach((link) => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("active");

        });

    });

}


/* =====================================================
   SCROLL REVEAL
   ===================================================== */

const revealElements = document.querySelectorAll(
    ".section-header, .system-item, .process-item, .founder-content, .founder-visual, .work-card, .contact-content"
);

revealElements.forEach((element) => {
    element.classList.add("reveal");
});


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach((element) => {

    observer.observe(element);

});


/* =====================================================
   IMAGE CHECK
   ===================================================== */

const founderImage = document.querySelector(".founder-image");

if (founderImage) {

    founderImage.addEventListener("error", () => {

        console.warn(
            "A imagem do Founder não foi encontrada. Verifique se o arquivo se chama exatamente: eduardo.jpg.jpeg"
        );

    });

}


/* =====================================================
   HEADER BACKGROUND
   ===================================================== */

const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {

    if (!nav) return;

    if (window.scrollY > 40) {

        nav.style.background = "rgba(8,9,11,.92)";

    } else {

        nav.style.background = "rgba(8,9,11,.78)";

    }

});
