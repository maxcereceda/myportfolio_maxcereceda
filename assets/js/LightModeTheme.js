const ball = document.querySelector(".ball");
const body = document.body;

ball.addEventListener("click", function () {
    ball.classList.toggle("ball__active");
    body.classList.toggle("LightMode");
});



