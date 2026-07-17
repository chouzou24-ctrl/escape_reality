/* ======================================
HAPPINESS JAR 🫙
====================================== */

const jar = document.getElementById("jar");
const jarMessage = document.getElementById("jarMessage");

if (jar && jarMessage) {

const messages = [

    "Hoy no tienes que poder con todo. 🤍",

    "Estoy muy orgulloso de ti. ⭐",

    "Respira mi amor. Este día también pasará. 🌙",

    "Te amo incluso en tus días más difíciles. ❤️",

    "Si me quieres, siempre estaré tu lugar seguro. 🤍",

    "Un día más cerca de nuestro abrazo. ✨",

    "Puedes descansar. No tienes que ser fuerte todo el tiempo. 🤍",

    "Un día todo esto será solo un recuerdo lejano.",

    "Aunque hoy no puedas verlo, todavía hay días bonitos esperándote. 🌸",

    "Si hoy no puedes creer en ti, dejame creer por las dos. ⭐"

];


jar.addEventListener("click", () => {

    const randomIndex =
        Math.floor(Math.random() * messages.length);


    jarMessage.textContent =
        messages[randomIndex];


    jar.style.transform =
        "scale(1.2) rotate(8deg)";


    setTimeout(() => {

        jar.style.transform =
            "scale(1) rotate(0deg)";

    }, 400);

});


}

/* ======================================
HUG BUTTON 🤍
====================================== */

const hugButton = document.getElementById("hugButton");
const hugMessage = document.getElementById("hugMessage");

if (hugButton && hugMessage) {

hugButton.addEventListener("click", () => {

    hugMessage.textContent =
        "🤍🫂🤍";

    hugMessage.style.opacity =
        "0";

    setTimeout(() => {

        hugMessage.textContent =
            "Este abrazo ha viajado desde Argelia hasta Florida. 🤍";

        hugMessage.style.opacity =
            "1";

    }, 500);

});


}

/* ======================================
FADE IN AU SCROLL
====================================== */

const animatedElements =
document.querySelectorAll(
".photo-card, .video-card, .memory-card"
);

const observer =
new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },

    {
        threshold: 0.15
    }

);


animatedElements.forEach((element) => {


observer.observe(element);


});

/* ======================================
   ÉTOILES FILANTES ✨
====================================== */

const shootingStars = document.getElementById("shootingStars");

if (shootingStars) {

    function createShootingStar() {

        const star = document.createElement("div");

        star.classList.add("shooting-star");

        star.style.top =
            Math.random() * 50 + "%";

        star.style.left =
            (50 + Math.random() * 50) + "%";

        shootingStars.appendChild(star);

        setTimeout(() => {

            star.remove();

        }, 2000);

    }

    createShootingStar();

    setInterval(createShootingStar, 3000);

}

/* ======================================
   MUSIC PLAYER 🎵
====================================== */

const musicButton = document.getElementById("musicButton");
const music = document.getElementById("music");

if (musicButton && music) {

    const savedTime = localStorage.getItem("musicTime");
    const musicPlaying = localStorage.getItem("musicPlaying");

    if (savedTime) {
        music.currentTime = parseFloat(savedTime);
    }

    if (musicPlaying === "true") {

        music.play().then(() => {

            musicButton.textContent = "🔊";
            musicButton.classList.add("playing");

        }).catch(() => {

            console.log("La musique attend une interaction.");

        });

    }

    musicButton.addEventListener("click", () => {

        if (music.paused) {

            music.play();

            localStorage.setItem("musicPlaying", "true");

            musicButton.textContent = "🔊";

            musicButton.classList.add("playing");

        } else {

            music.pause();

            localStorage.setItem("musicPlaying", "false");

            localStorage.setItem(
                "musicTime",
                music.currentTime
            );

            musicButton.textContent = "🎵";

            musicButton.classList.remove("playing");

        }

    });

    music.addEventListener("timeupdate", () => {

        localStorage.setItem(
            "musicTime",
            music.currentTime
        );

    });

}

/* ======================================
   TRANSITION ENTRE LES PAGES 🌌
====================================== */

const pageTransition =
    document.getElementById("pageTransition");

const continueLinks =
    document.querySelectorAll("a");

if (pageTransition) {

    continueLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            const destination =
                link.getAttribute("href");

            if (
                destination &&
                destination.endsWith(".html")
            ) {

                event.preventDefault();

                pageTransition.classList.add("active");

                setTimeout(() => {

                    window.location.href =
                        destination;

                }, 800);

            }

        });

    });

}

/* ======================================
   ENTER THE UNIVERSE ✨
====================================== */

const enterButton =
    document.getElementById("enterButton");

const intro =
    document.getElementById("intro");

if (enterButton && intro) {

    enterButton.addEventListener("click", () => {

        intro.classList.add("hidden");

        setTimeout(() => {

            intro.style.display = "none";

        }, 1000);

    });

}

/* ======================================
   CONTINUE BUTTON ✨
====================================== */

const continueButton =
    document.getElementById("continueButton");

const welcome =
    document.getElementById("welcome");

if (continueButton && welcome) {

    continueButton.addEventListener("click", () => {

        welcome.classList.add("hidden");

        setTimeout(() => {

            welcome.style.display = "none";

        }, 1000);

    });

}