var button = document.querySelector("button");
button.addEventListener("click", switchBG);

function switchBG() {
    document.body.classList.toggle("bg-style");
}
