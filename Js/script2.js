// Animation
function animateTicket() {
  const ticket = document.getElementById("img-tilt");
  document.addEventListener("mousemove", function (e) {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 40;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 40;
    ticket.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    const boxShadowX = (e.pageX - window.innerWidth) / 800;
    const boxShadowY = (e.pageY - window.innerHeight) / 800;
    const boxShadowBlur = Math.abs(xAxis) + Math.abs(yAxis);

    ticket.style.boxShadow = `${boxShadowX}px ${boxShadowY}px ${boxShadowBlur}px white`;
  });
}
animateTicket();

// const imageImp = document.querySelector(".img-imp");

// imageImp.addEventListener("mouseenter", () => {
//   TweenMax.to(".img-imp", 3, {
//     x: "+60%",
//     ease: "steps(6)",
//     opacity: 1,
//     // scrollTrigger: {
//     //   trigger: ".formation",
//     //   start: "top 90%",
//     //   end: "bottom 20%",
//     //   markers: true,
//     // },
//   });
// });
gsap.to(".formation-contain", {
  duration: 2.5,
  ease: "steps(6)",
  x: "+105%",
  scrollTrigger: {
    trigger: ".formation-contain",
    start: "top 100%",
    end: "bottom 60%",
    // markers: true,
    // scrub: true,
  },
});

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper("#mySwiper", {
    effect: "cards",
    direction: "vertical",
    slidesPerView: 1,
    loop: true,
    spaceBetween: 10,
    mousewheel: true,
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

function toggleMenu() {
  var navbar = document.getElementById("mobile-navbar");
  if (navbar.className === "navbar") {
    navbar.className += " responsive";
  } else {
    navbar.className = "navbar";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var popup = document.getElementById("popup");

  popup.style.display = "block";
});
