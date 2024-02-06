// Animation first section img
function animateTicket() {
  const ticket = document.getElementById("img-tilt");
  document.addEventListener("mousemove", function (e) {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 40;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 40;
    ticket.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    const boxShadowX = (e.pageX - window.innerWidth) / 800;
    const boxShadowY = (e.pageY - window.innerHeight) / 800;
    const boxShadowBlur = Math.abs(xAxis) + Math.abs(yAxis);

    ticket.style.boxShadow = `${boxShadowX}px ${boxShadowY}px ${boxShadowBlur}px #262424`;
  });
}
animateTicket();

// Animation formation section ticket
gsap.to(".formation-contain", {
  duration: 2.5,
  // ease: "steps(6)",
  x: "+105%",
  scrollTrigger: {
    trigger: ".formation-contain",
    start: "top 100%",
    end: "bottom 60%",
    // markers: true,
    // scrub: true,
  },
});
// swiper tickets
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper("#mySwiper", {
    effect: "cards",
    direction: "vertical",
    slidesPerView: 1,
    loop: false,
    spaceBetween: 10,
    mousewheel: {
      forceToAxis: true,
      sensitivity: 1,
      releaseOnEdges: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    cardsEffect: {
      perSlideOffset: 10,
      rotate: false,
      slideShadows: false,
    },
  });
});
// when the last slide is reached
//   swiper.on("reachBeginning", function () {
//     console.log("Reached the top of the slider");
//     window.scrollTo({
//       top: 400,
//       behavior: "smooth",
//     });
//   });
//   swiper.on("reachEnd", function () {
//     console.log("Reached the end of the slider");
//    setTimeout(() => {
//      console.log("Retardée d'une seconde.");
//    }, "15000");
//     window.scrollBy({
//       top: 400,
//       behavior: "smooth",
//     });
//   });
// });

// nav

const button = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-links");

button.addEventListener("click", () => {
  menu.classList.toggle("mobile-navbar-links-open");
});

//cookies
let popup = document.getElementById("cookies");

function declineCookies() {
  popup.style.display = "none";
  document.body.style.overflow = "auto";
}

function acceptCookies() {
  // Enregistrer le consentement de l'utilisateur dans un cookie
  localStorage.setItem("cookieAccepted", "yes");
  popup.style.display = "none";
  const googleAnalyticsLink = document.createElement("script");
  const head = document.querySelector("head");
  const googleAnalyticsScript = document.createElement("script");
  googleAnalyticsScript.setAttribute("src", "./js/analytics.js");
  googleAnalyticsLink.setAttribute("async", "");
  googleAnalyticsLink.setAttribute(
    "src",
    "https://www.googletagmanager.com/gtag/js?id=G-MMCBGZX4DZ"
  );
  head.appendChild(googleAnalyticsLink);
  head.appendChild(googleAnalyticsScript);
  document.body.style.overflow = "auto";
}

// Vérifier si l'utilisateur a déjà consenti aux cookies
function checkCookieConsent() {
  var consentCookie = localStorage.getItem("cookieAccepted");
  if (consentCookie != "yes") {
    setTimeout(function () {
      const popup = document.getElementById("popup");
      popup.style.display = "flex";
      popup.style.flexDirection = "column";
      popup.style.justifyContent = "space-evenly";
    }, 2000);
    document.body.style.overflow = "hidden";
  } else {
    const cookieDiv = document.getElementById("cookies");
    cookieDiv.style.display = "none";
    const googleAnalyticsLink = document.createElement("script");
    const head = document.querySelector("head");
    const googleAnalyticsScript = document.createElement("script");
    googleAnalyticsScript.setAttribute("src", "./js/analytics.js");
    googleAnalyticsLink.setAttribute("async", "");
    googleAnalyticsLink.setAttribute(
      "src",
      "https://www.googletagmanager.com/gtag/js?id=G-MMCBGZX4DZ"
    );
    head.appendChild(googleAnalyticsLink);
    head.appendChild(googleAnalyticsScript);
  }
}

window.addEventListener("load", (event) => {
  checkCookieConsent();
});
