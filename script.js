const sections = document.querySelectorAll("section");

function showSections() {

    sections.forEach((section) => {

        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < window.innerHeight - 100){
            section.classList.add("show");
        }

    });

}

window.addEventListener("scroll", showSections);

showSections();

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop;

        if(pageYOffset >= sectionTop - 200){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if(link.getAttribute("href") === `#${current}`){
            link.classList.add("active");
        }

    });

});

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";

});

const menuIcon = document.querySelector(".menu-icon");

const navLinksContainer = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {

    navLinksContainer.classList.toggle("active");

});

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const scrollPercent =
        (scrollTop / scrollHeight) * 100;

    progressBar.style.width = scrollPercent + "%";

});

const cards = document.querySelectorAll(".project-card");

cards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;

        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 8;

        const rotateY = (centerX - x) / 8;

        card.style.transform =
            `perspective(1000px)
            rotateX(${-rotateX}deg)
            rotateY(${-rotateY}deg)
            scale(1.03)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            `perspective(1000px)
            rotateX(0)
            rotateY(0)
            scale(1)`;

    });

});

