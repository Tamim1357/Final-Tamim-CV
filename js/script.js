const header = document.querySelector("header");
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");


// =========================================
// STICKY HEADER
// =========================================

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});


// =========================================
// MOBILE MENU
// =========================================

menuIcon.addEventListener("click", function () {

    navbar.classList.toggle("active");

    const menuIsOpen =
        navbar.classList.contains("active");

    menuIcon.setAttribute(
        "aria-expanded",
        menuIsOpen
    );

});


// =========================================
// CLOSE MENU
// =========================================

const navLinks =
    document.querySelectorAll(".navbar a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navbar.classList.remove("active");

        menuIcon.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});


// =========================================
// SCROLL ANIMATION
// =========================================

const animatedElements =
    document.querySelectorAll(
        ".section-title, .about-container, .skill-card, .timeline-item, .interest-card, .contact-container"
    );


const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },
        {
            threshold: 0.15
        }
    );


animatedElements.forEach(function (element) {

    observer.observe(element);

});