let fireworks = []
let clicked = false
function setup() {
    createCanvas(window.innerWidth, window.innerHeight)
    rectMode(CENTER);
}

function getCountdownTime() {
    let now = new Date()
    let hours = 23 - now.getHours()
    let minutes = 60 - now.getMinutes()
    let seconds = 60 - now.getSeconds()
    if (hours < 10) hours = `0${hours}`
    if (minutes < 10) minutes = `0${minutes}`
    if (seconds < 10) seconds = `0${seconds}`
    return `${hours}:${minutes}:${seconds}`
}

function draw() {
    background(0,0,0,25)
    if (!clicked) {
        fill(255, 255, 255, 10)
        noStroke()
        textAlign(CENTER, CENTER);
        text("click for fireworks", window.innerWidth / 2, window.innerHeight / 2);
    }else {
        textSize(140);
        fill(255, 255, 255, 10)
        noStroke()
        textAlign(CENTER, CENTER);
        text(getCountdownTime(), window.innerWidth / 2, window.innerHeight / 2);
        textSize(10);
        noStroke()
        
        for (let f of fireworks) f.step()
    }
}

function mouseReleased() {
    clicked = true
    let target = {
        x: mouseX,
        y: mouseY
    }
    fireworks.push(new Firework(target))
}
