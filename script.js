document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {

            navMenu.classList.toggle("active");

            menuToggle.textContent =
                navMenu.classList.contains("active")
                    ? "✕"
                    : "☰";

        });


        const mobileLinks = navMenu.querySelectorAll("a");

        mobileLinks.forEach(link => {

            link.addEventListener("click", () => {

                navMenu.classList.remove("active");

                menuToggle.textContent = "☰";

            });

        });

    }



    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");


    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });



    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections =
        document.querySelectorAll("section[id]");

    const navLinks =
        document.querySelectorAll(".nav-menu a");


    function updateActiveNavigation() {

        let currentSection = "home";


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 160;

            const sectionBottom =
                sectionTop + section.offsetHeight;


            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionBottom
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(link => {

            link.classList.remove("active");

            const href =
                link.getAttribute("href");


            if (href === `#${currentSection}`) {

                link.classList.add("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNavigation
    );


    updateActiveNavigation();



    /* =====================================================
       STAT COUNTER
    ===================================================== */

    const statNumbers =
        document.querySelectorAll(".stat-item strong");


    const counterObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) {
                        return;
                    }


                    const element =
                        entry.target;

                    const target =
                        Number(element.dataset.count);


                    if (isNaN(target)) {
                        return;
                    }


                    const duration = 1300;

                    const startTime =
                        performance.now();


                    function animateCounter(currentTime) {

                        const progress =
                            Math.min(
                                (currentTime - startTime) /
                                duration,
                                1
                            );


                        const value =
                            Math.floor(
                                progress * target
                            );


                        element.textContent = value;


                        if (progress < 1) {

                            requestAnimationFrame(
                                animateCounter
                            );

                        } else {

                            element.textContent = target;

                        }

                    }


                    requestAnimationFrame(
                        animateCounter
                    );


                    observer.unobserve(element);

                });

            },
            {
                threshold: 0.7
            }
        );


    statNumbers.forEach(number => {

        counterObserver.observe(number);

    });



    /* =====================================================
       HERO SOFTWARE WINDOW PARALLAX
    ===================================================== */

    const heroVisual =
        document.querySelector(".hero-visual");


    if (heroVisual) {

        const softwareWindow =
            heroVisual.querySelector(".software-window");


        heroVisual.addEventListener(
            "mousemove",
            event => {

                if (!softwareWindow) {
                    return;
                }


                const rect =
                    heroVisual.getBoundingClientRect();


                const x =
                    (event.clientX - rect.left) /
                    rect.width -
                    0.5;


                const y =
                    (event.clientY - rect.top) /
                    rect.height -
                    0.5;


                softwareWindow.style.transform =
                    `translate(${x * 8}px, ${y * 8}px)`;

            }
        );


        heroVisual.addEventListener(
            "mouseleave",
            () => {

                if (!softwareWindow) {
                    return;
                }


                softwareWindow.style.transform =
                    "translate(0, 0)";

            }
        );

    }



    /* =====================================================
       TECHNOLOGY MARQUEE
    ===================================================== */

    const technologyTrack =
        document.querySelector(".technology-track");


    if (technologyTrack) {

        technologyTrack.addEventListener(
            "mouseenter",
            () => {

                technologyTrack.style.animationPlayState =
                    "paused";

            }
        );


        technologyTrack.addEventListener(
            "mouseleave",
            () => {

                technologyTrack.style.animationPlayState =
                    "running";

            }
        );

    }



    /* =====================================================
       CONTACT FORM
    ===================================================== */

    const contactForm =
        document.getElementById("contactForm");

    const formMessage =
        document.getElementById("formMessage");


    if (contactForm && formMessage) {

        contactForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                formMessage.textContent =
                    "Thanks! Your message has been received.";


                formMessage.classList.add("show");


                contactForm.reset();


                setTimeout(() => {

                    formMessage.classList.remove("show");

                }, 5000);

            }
        );

    }



    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const currentYear =
        document.getElementById("currentYear");


    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }



    /* =====================================================
       CLOSE MOBILE MENU ON OUTSIDE CLICK
    ===================================================== */

    document.addEventListener(
        "click",
        event => {

            if (!navMenu || !menuToggle) {
                return;
            }


            const clickedInsideMenu =
                navMenu.contains(event.target);

            const clickedToggle =
                menuToggle.contains(event.target);


            if (
                !clickedInsideMenu &&
                !clickedToggle &&
                navMenu.classList.contains("active")
            ) {

                navMenu.classList.remove("active");

                menuToggle.textContent = "☰";

            }

        }
    );

});


















/* =========================
   DARK / LIGHT MODE
========================= */

document.addEventListener("DOMContentLoaded", () => {

    const themeToggle = document.getElementById("themeToggle");

    if (!themeToggle) return;

    const icon = themeToggle.querySelector("i");

    // Saved theme
    const savedTheme = localStorage.getItem("nextgen-theme");

    if (savedTheme === "light") {
        document.body.classList.add("light-mode");

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        const isLight =
            document.body.classList.contains("light-mode");

        if (isLight) {

            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");

            localStorage.setItem(
                "nextgen-theme",
                "light"
            );

        } else {

            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");

            localStorage.setItem(
                "nextgen-theme",
                "dark"
            );
        }

    });

});











function showRanjitDemo(event) {
    event.preventDefault();

    alert(
        "Ranjit Store is currently available as a demo project. " +
        "The live version will be available soon."
    );
}
