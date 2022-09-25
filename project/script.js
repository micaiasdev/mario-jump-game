const mario = document.querySelector(".mario")
const pipe = document.querySelector(".pipe")

function jump() {
    mario.classList.add("animation-mario-jump")
    setTimeout(() => {
        mario.classList.remove("animation-mario-jump")
    }, 500)
}
document.addEventListener("keydown", jump)

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft
    if(pipePosition <= 100) {
        pipe.style.animation = "none"
        pipe.style.left = "100px"
    }

}, Infinity)


