// ==========================================
// BUILD TOMORROW - COMPLETE SCRIPT
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // 1. MOBILE MENU
    // ==========================================

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {
        menuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });

        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
            });
        });
    }


    // ==========================================
    // 2. TYPING EFFECT
    // ==========================================

    const typingText = document.querySelector(".typing-text");

    const words = [
        "Digital Experiences",
        "Modern Websites",
        "Powerful Solutions",
        "Future-Ready Ideas"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        if (!typingText) return;

        const currentWord = words[wordIndex];

        if (!deleting) {

            typingText.textContent =
                currentWord.substring(0, charIndex + 1);

            charIndex++;

            if (charIndex === currentWord.length) {

                deleting = true;

                setTimeout(typeEffect, 1500);
                return;
            }

        } else {

            typingText.textContent =
                currentWord.substring(0, charIndex - 1);

            charIndex--;

            if (charIndex === 0) {

                deleting = false;

                wordIndex++;

                if (wordIndex >= words.length) {
                    wordIndex = 0;
                }
            }
        }

        setTimeout(
            typeEffect,
            deleting ? 50 : 100
        );
    }

    typeEffect();


    // ==========================================
    // 3. MOUSE GLOW
    // ==========================================

    const mouseGlow = document.createElement("div");

    mouseGlow.className = "mouse-glow";

    document.body.appendChild(mouseGlow);

    document.addEventListener("mousemove", (event) => {

        mouseGlow.style.left =
            event.clientX + "px";

        mouseGlow.style.top =
            event.clientY + "px";
    });


    // ==========================================
    // 4. SCROLL REVEAL
    // ==========================================

    const revealElements =
        document.querySelectorAll(
            ".hero-content, .hero-card, .section, .service-card, .developer-section"
        );

    const revealObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "reveal-active"
                        );
                    }
                });

            },
            {
                threshold: 0.15
            }
        );


    revealElements.forEach(element => {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });


    // ==========================================
    // 5. ANIMATED COUNTERS
    // ==========================================

    const counters =
        document.querySelectorAll(".counter");

    function animateCounter(counter) {

        const target =
            Number(counter.dataset.target);

        let current = 0;

        const increment =
            Math.max(1, Math.ceil(target / 100));

        function updateCounter() {

            current += increment;

            if (current >= target) {

                counter.textContent =
                    target + "+";

                return;
            }

            counter.textContent = current;

            requestAnimationFrame(updateCounter);
        }

        updateCounter();
    }


    if (counters.length > 0) {

        const counterObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            animateCounter(entry.target);

                            observer.unobserve(
                                entry.target
                            );
                        }

                    });

                },
                {
                    threshold: 0.5
                }
            );


        counters.forEach(counter => {

            counterObserver.observe(counter);

        });
    }


    // ==========================================
    // 6. NAVBAR SCROLL EFFECT
    // ==========================================

    const header =
        document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (!header) return;

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }
    });


    // ==========================================
    // 7. HERO BUTTON EFFECT
    // ==========================================

    const heroButtons =
        document.querySelectorAll(".hero-btn");

    heroButtons.forEach(button => {

        button.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    button.getBoundingClientRect();

                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;

                button.style.setProperty(
                    "--x",
                    x + "px"
                );

                button.style.setProperty(
                    "--y",
                    y + "px"
                );
            }
        );
    });


    // ==========================================
    // 8. LIVE TIME
    // ==========================================

    const liveTime =
        document.querySelector(".live-time");

    function updateTime() {

        if (!liveTime) return;

        const now = new Date();

        liveTime.textContent =
            now.toLocaleTimeString(
                [],
                {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit"
                }
            );
    }

    if (liveTime) {

        updateTime();

        setInterval(
            updateTime,
            1000
        );
    }


    // ==========================================
    // 9. CURRENT YEAR
    // ==========================================

    const currentYear =
        document.querySelector(".current-year");

    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();
    }


    // ==========================================
    // 10. PAGE LOAD ANIMATION
    // ==========================================

    document.body.classList.add(
        "page-loaded"
    );


    // ==========================================
// 11. ACTIVE NAVIGATION ON SCROLL
// ==========================================

const sections = document.querySelectorAll(
    "#about, #services, #projects, #contact"
);

const navItems = document.querySelectorAll(".nav-link");

function updateActiveNav() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.getBoundingClientRect().top;

        if (sectionTop <= 180) {
            currentSection = section.getAttribute("id");
        }
    });

    navItems.forEach(link => {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href === "#" + currentSection) {
            link.classList.add("active");
        }

    });

    // Top of page = Home active
    if (window.scrollY < 100) {

        navItems.forEach(link => {
            link.classList.remove("active");
        });

        const home =
            document.querySelector('.nav-link[href="index.html"]');

        if (home) {
            home.classList.add("active");
        }
    }
}

window.addEventListener("scroll", updateActiveNav);

updateActiveNav();

    // ==========================================
    // 12. 3D HERO CARD
    // ==========================================

    const heroCard =
        document.querySelector(".hero-card");

    if (heroCard) {

        heroCard.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    heroCard.getBoundingClientRect();

                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;

                const rotateX =
                    ((y / rect.height) - 0.5) * -10;

                const rotateY =
                    ((x / rect.width) - 0.5) * 10;

                heroCard.style.transform =
                    `perspective(800px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)`;
            }
        );


        heroCard.addEventListener(
            "mouseleave",
            () => {

                heroCard.style.transform =
                    "perspective(800px) rotateX(0) rotateY(0)";
            }
        );
    }


    // ==========================================
    // 13. SERVICE CARD INTERACTION
    // ==========================================

    const serviceCards =
        document.querySelectorAll(".service-card");

    serviceCards.forEach(card => {

        card.addEventListener(
            "mouseenter",
            () => {

                card.classList.add(
                    "card-active"
                );
            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.classList.remove(
                    "card-active"
                );
            }
        );
    });


    // ==========================================
    // 14. CONSOLE MESSAGE
    // ==========================================

    console.log(
        "Build Tomorrow 🚀"
    );

    console.log(
        "Website successfully loaded."
    );

});// ==========================================
// FOUNDER SECTION
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const founderSection = document.querySelector(".founder-section");
    const founderBox = document.querySelector(".founder-box");
    const founderPhoto = document.querySelector(".founder-photo");
    const founderContent = document.querySelector(".founder-content");
    const connectButton = document.querySelector(".founder-connect");
    const skills = document.querySelectorAll(".founder-skills span");


    // ==========================================
    // SCROLL REVEAL
    // ==========================================

    if (founderSection) {

        const items = [
            founderPhoto,
            founderContent
        ].filter(Boolean);

        items.forEach((item, index) => {

            item.style.opacity = "0";

            item.style.transform =
                index === 0
                    ? "translateX(-40px)"
                    : "translateX(40px)";

            item.style.transition =
                `all 0.8s ease ${index * 0.15}s`;
        });


        const observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    items.forEach(item => {

                        item.style.opacity = "1";
                        item.style.transform =
                            "translateX(0)";
                    });

                    observer.unobserve(entry.target);
                }
            });

        }, {
            threshold: 0.2
        });

        observer.observe(founderSection);
    }


    // ==========================================
    // PHOTO HOVER
    // ==========================================

    if (founderPhoto) {

        founderPhoto.addEventListener("mouseenter", () => {
            founderPhoto.style.transform =
                "translateY(-8px) scale(1.02)";
        });

        founderPhoto.addEventListener("mouseleave", () => {
            founderPhoto.style.transform =
                "translateY(0) scale(1)";
        });
    }


    // ==========================================
    // FOUNDER BOX 3D EFFECT
    // ==========================================

    if (founderBox) {

        founderBox.addEventListener("mousemove", (e) => {

            const rect =
                founderBox.getBoundingClientRect();

            const x =
                (e.clientX - rect.left) / rect.width - 0.5;

            const y =
                (e.clientY - rect.top) / rect.height - 0.5;

            founderBox.style.transform =
                `perspective(1200px)
                 rotateX(${y * -3}deg)
                 rotateY(${x * 3}deg)`;
        });

        founderBox.addEventListener("mouseleave", () => {

            founderBox.style.transform =
                "perspective(1200px) rotateX(0) rotateY(0)";
        });
    }


    // ==========================================
    // BUTTON HOVER
    // ==========================================

    if (connectButton) {

        connectButton.addEventListener("mouseenter", () => {
            connectButton.style.transform =
                "translateY(-4px) scale(1.03)";
        });

        connectButton.addEventListener("mouseleave", () => {
            connectButton.style.transform =
                "translateY(0) scale(1)";
        });

        const arrow =
            connectButton.querySelector("span");

        if (arrow) {

            connectButton.addEventListener("mouseenter", () => {
                arrow.style.transform =
                    "translateX(6px)";
            });

            connectButton.addEventListener("mouseleave", () => {
                arrow.style.transform =
                    "translateX(0)";
            });
        }
    }


    // ==========================================
    // SKILLS ANIMATION
    // ==========================================

    skills.forEach((skill, index) => {

        skill.style.opacity = "0";
        skill.style.transform = "translateY(15px)";

        skill.style.transition =
            `all 0.5s ease ${index * 0.12}s`;
    });


    if (founderSection) {

        const skillObserver =
            new IntersectionObserver((entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        skills.forEach(skill => {
                            skill.style.opacity = "1";
                            skill.style.transform =
                                "translateY(0)";
                        });

                        skillObserver.unobserve(entry.target);
                    }
                });

            }, {
                threshold: 0.3
            });

        skillObserver.observe(founderSection);
    }

});

// ==========================================
// NEXT GEN — HERO LAPTOP 3D EFFECT
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const orb =
        document.querySelector(".laptop-orb");

    const laptop =
        document.querySelector(".laptop");

    if (!orb || !laptop) return;


    orb.addEventListener("mousemove", (e) => {

        const rect =
            orb.getBoundingClientRect();

        const x =
            (e.clientX - rect.left) / rect.width - 0.5;

        const y =
            (e.clientY - rect.top) / rect.height - 0.5;


        laptop.style.animation = "none";

        laptop.style.transform =
            `translateY(-8px)
             rotateX(${y * -8}deg)
             rotateY(${x * 10}deg)`;
    });


    orb.addEventListener("mouseleave", () => {

        laptop.style.animation =
            "laptopFloat 4s ease-in-out infinite";

        laptop.style.transform = "";
    });

});



// ==========================================
// TODAY — TYPEWRITER START → STOP
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const typingText =
        document.querySelector(".typing-text");

    if (!typingText) return;

    const text = "Today.";
    let index = 0;

    const typeText = () => {

        if (index < text.length) {

            typingText.textContent += text.charAt(index);

            index++;

            setTimeout(typeText, 180);

        }
    };

    // একটু delay দিয়ে শুরু
    setTimeout(typeText, 900);

});


// ==========================================
// FOOTER SOCIAL ICONS
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const socialLinks =
        document.querySelectorAll(".footer-socials a");

    socialLinks.forEach((link) => {

        // Hover animation
        link.addEventListener("mouseenter", () => {

            link.style.transform =
                "translateY(-5px) scale(1.08)";
        });

        link.addEventListener("mouseleave", () => {

            link.style.transform =
                "translateY(0) scale(1)";
        });


        // Click ripple effect
        link.addEventListener("click", (e) => {

            const ripple =
                document.createElement("span");

            ripple.classList.add("social-ripple");

            const rect =
                link.getBoundingClientRect();

            ripple.style.left =
                `${e.clientX - rect.left}px`;

            ripple.style.top =
                `${e.clientY - rect.top}px`;

            link.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 500);
        });

    });

});










document.addEventListener("DOMContentLoaded", () => {

    const teamSection = document.querySelector(".team-premium");

    if (!teamSection) return;

    const teamContent = teamSection.querySelector(".team-content");
    const orbs = teamSection.querySelectorAll(".floating-orb");

    const teamObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    teamContent.classList.add("team-show");

                    orbs.forEach((orb, index) => {
                        setTimeout(() => {
                            orb.classList.add("orb-show");
                        }, index * 150);
                    });

                    observer.unobserve(teamSection);
                }

            });

        },
        {
            threshold: 0.2
        }
    );

    teamObserver.observe(teamSection);

});






document.addEventListener("DOMContentLoaded", function () {

    const team = document.querySelector(".team-premium");

    if (!team) {
        console.log("Team section not found!");
        return;
    }

    function showTeam() {
        const position = team.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight * 0.85) {
            team.classList.add("team-visible");
        }
    }

    window.addEventListener("scroll", showTeam);

    // Page load অবস্থাও check করবে
    showTeam();

});


// =========================
// MOBILE NAVBAR
// =========================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if (navMenu.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }
    });


    // Close menu after clicking a link
    document.querySelectorAll(".nav-link").forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

            const icon = menuToggle.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        });

    });
}










// =========================
// NAVBAR SCROLL EFFECT
// =========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});




// =========================================
// NAVBAR SCROLL EFFECT
// =========================================

document.addEventListener("DOMContentLoaded", function () {

    const navbar = document.querySelector("header.navbar");

    if (!navbar) {
        console.log("❌ Navbar not found");
        return;
    }

    function navbarScroll() {

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
            console.log("✅ Navbar scrolled");
        } else {
            navbar.classList.remove("scrolled");
            console.log("⬆️ Navbar top");
        }

    }

    // Page load
    navbarScroll();

    // Scroll
    window.addEventListener("scroll", navbarScroll);

});





document.addEventListener("DOMContentLoaded", function () {

    const navbar = document.querySelector("header.navbar");

    if (!navbar) {
        console.log("❌ Navbar not found");
        return;
    }

    function handleNavbarScroll() {

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
            console.log("✅ Navbar SCROLLED");
        } else {
            navbar.classList.remove("scrolled");
            console.log("⬆️ Navbar TOP");
        }

    }

    handleNavbarScroll();

    window.addEventListener("scroll", handleNavbarScroll);

});
document.addEventListener("DOMContentLoaded", function () {

    const navbar = document.querySelector("header.navbar");

    if (!navbar) {
        console.log("❌ Navbar পাওয়া যায়নি!");
        return;
    }

    function updateNavbar() {

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
            console.log("✅ Navbar SCROLLED");
        } else {
            navbar.classList.remove("scrolled");
            console.log("⬆️ Navbar TOP");
        }

    }

    // প্রথমবার page load
    updateNavbar();

    // Scroll করলে
    window.addEventListener("scroll", updateNavbar);

});