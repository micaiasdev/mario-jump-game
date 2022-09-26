const mario = document.querySelector(".mario")
const pipe = document.querySelector(".pipe")
const clouds = document.querySelector(".clouds")

function jump() {
    mario.classList.add("animation-mario-jump")
    setTimeout(() => {
        mario.classList.remove("animation-mario-jump")
    }, 500)
}
document.addEventListener("keydown", jump)  
const loop = setInterval(() => {
    const cloudsPosition = clouds.offsetLeft
    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    if(pipePosition <= 100 && pipePosition > 0 && marioPosition <= 80   ) {
        pipe.style.animation = "none"
        pipe.style.left = `${pipePosition}px` 

        mario.style.animation = "none"
        mario.style.bottom = `${marioPosition}px`
        mario.src = 'images/game-over.png'
        mario.style.width = '60px'
        mario.style.marginLeft = '35px'

        clouds.style.animation = 'none'
        clouds.style.left = `${cloudsPosition}px`

        clearInterval(loop)
 
    } 

}, 10)



