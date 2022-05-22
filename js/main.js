console.log("JavaScript er forbundet")

//adgang til hamburger og nav-menu class
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const _navLinks = document.querySelectorAll("nav a");

//add en event lisenter til hamburger
hamburger.addEventListener("click", () => {
    //activer classen der ændre mine bar til et X og den class der viser menuen
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

//Søger for at nav lukker sig og bliver "normal" når man klikker på et link.
document.querySelectorAll(".nav-link").forEach(link =>
    //add en eventlistener
    link.addEventListener("click", () => {
        //click event, der vil fjerne active class
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    })
);

/* highligter den nuværende side i navigationen */
function setActiveTab(path) {
    for (const link of _navLinks) {
        if (path === link.getAttribute("href")) {
            link.classList.add("current");
        } else {
            link.classList.remove("current");
        }
    }
}

// fremviser content til lille stander 
function fremvisLilleStander() {
    const content = document.getElementById("lille-stander-content");
    const nonContent = document.getElementById("stor-stander-content");
    if (content.style.display === "none") {
        content.style.display = "block";

        (nonContent.style.display === "block") 
            nonContent.style.display = "none";
        }
    else {
        content.style.display = "none";
        nonContent.style.display = "none";
    }
}

// fremviser content til stor stander 
function fremvisStorStander() {
    const content = document.getElementById("stor-stander-content");
    const nonContent = document.getElementById("lille-stander-content");
    if (content.style.display === "none") {
        content.style.display = "block";

        (nonContent.style.display === "block") 
            nonContent.style.display = "none";
    } else {
        content.style.display = "none";
        nonContent.style.display = "none";
    }
}

// nedsætter hastigheden på videoen 
const vid = document.getElementById("storDesignHero");
vid.playbackRate = 0.7;

// nedsætter hastigheden på videoen 
const lilvid = document.getElementById("lilleDesignHero");
lilvid.playbackRate = 0.7;

//til top knap
const topButton = document.getElementById("tilTop");
window.onscroll = function() {scrollFunction()};

// skjuler til top knappen til der scrolles
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none"
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
