// Animation
function animateCard() {
  const card = document.getElementById("img-tilt");
  document.addEventListener("mousemove", function (e) {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });
}
animateCard();

const imageImp = document.querySelector(".img-imp");

imageImp.addEventListener("mouseenter", () => {
  // TweenMax.to(imageImp, 0.3, { x: "30%" });
  TweenMax.to(imageImp,3, {
    x: "+60%",
    ease: "steps(6)",
    opacity: 1,
  });
});


