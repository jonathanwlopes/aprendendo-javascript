const $prev = document.querySelector(".prev");
const $next = document.querySelector(".next");
const $box1 = document.querySelector(".box-new-arrival1");
const $box2 = document.querySelector(".box-new-arrival2");

$prev.addEventListener("click", () => {
    activeDisplay();
});

$next.addEventListener("click", () => {
    activeDisplay();
});

console.log($box2.classList.contains("active"));

const activeDisplay = () => {
    const active = $box2.classList.contains("inactive");
    if (active === true) {
        $box1.classList.add("inactive");
        $box2.classList.remove("inactive");
    } else {
        $box1.classList.remove("inactive");
        $box2.classList.add("inactive");
    }
};