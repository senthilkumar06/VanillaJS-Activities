
window.addEventListener('keydown', function(e) {
    const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
    if(!sound) return
    key.classList.add("playing");
    sound.currentTime = 0; //rewind if already playing
    sound.play(); //play the sound
})

window.onload = function(event) {
    const keys = document.querySelectorAll('.key')
    keys.forEach(key => key.addEventListener('transitionend', removeTransition))
}

function removeTransition(event) {
    if(event.propertyName !== 'transform') return //skip if not transformed
    this.classList.remove('playing')
}