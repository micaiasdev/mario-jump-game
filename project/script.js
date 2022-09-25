const mario = document.querySelector(".mario")

function jump() {
    mario.classList.add("animation-mario-jump")

    setTimeout(() => {
        mario.classList.remove("animation-mario-jump")
    }, 500)
}
document.addEventListener("keydown", jump)

