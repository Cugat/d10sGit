
// Images 
const goalKeeperUp = new Image()
goalKeeperUp.src = "./images/portero saltando.png"
const goalKeeperDown = new Image()
goalKeeperDown.src = "./images/portero saltando (2).png"
const balldraw = new Image()
balldraw.src = "./images/pelota.png"
const spriteMessiStop = new Image()
spriteMessiStop.src = "./images/spriteMessiStop.png"
const spriteMessiRunning = new Image()
spriteMessiRunning.src = "./images/spriteMessiRunning.png"
const spriteMessiShooting = new Image()
spriteMessiShooting.src = "./images/spriteMessiShooting.png"
const messiCaraScore = new Image()
messiCaraScore.src = "./images/messiCaraScore.png"
const ballScoreUp = new Image()
ballScoreUp.src = "./images/ballScoreUp.png"
const opponentUp = new Image()
opponentUp.src = "./images/opponentUp.png"
const opponentDown = new Image()
opponentDown.src = "./images/opponentDown.png"


// Constants

const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
const buttonStart = document.getElementById('start-button')
const hydeStart = document.querySelector(".startScreen")
const youLost = document.querySelector(".gameOver")
const youWin = document.querySelector(".theWinner")
ctx.imageSmoothingEnabled = false

const finishGame = () =>{
    if(score.haParado <= 0){
        canvas.classList.add("hidden");
        youLost.classList.remove("hidden");
    }else if
    (score.haMetido >= 10){
        canvas.classList.add("hidden");
        youWin.classList.remove("hidden");}

 }

const field = () => {
    ctx.strokeStyle = "black"
    ctx.lineWidth = 2
    ctx.strokeRect(0,0,canvas.width, canvas.height)
    ctx.lineheight = 6
    ctx.stroke()
    
}

const checkCollitions = () => {
    if (portero.contains(pelota)){
        score.haParado--
        pelota.isMoving = false
        pelota.x = 60
     
    }
    else if (porteria.contains(pelota)){
        score.haMetido++
        pelota.isMoving = false
        pelota.x = 60
    
       }        
    else  if (merengue.contains(pelota)){
        score.haParado--
        pelota.isMoving = false
        pelota.x = 60
     
    }

    if (pelota.x <= 0){
        pelota.isMoving = false
        pelota.x = 60
      } 
     
}

const scoreUpdate = () => {   
    if(score.haParado === 3){
        ctx.drawImage(messiCaraScore, 215, 10, 40, 20) 
        ctx.drawImage(messiCaraScore, 255, 10, 40, 20)
        ctx.drawImage(messiCaraScore, 175, 10, 40, 20)
    }
    if(score.haParado === 2){
        ctx.drawImage(messiCaraScore, 215, 10, 40, 20) 
        ctx.drawImage(messiCaraScore, 255, 10, 40, 20)
    }
    
    if(score.haParado === 1){
        ctx.drawImage(messiCaraScore, 255, 10, 40, 20)
       
    }
    if(score.haMetido === 1){
        ctx.drawImage(ballScoreUp, 15, 10, 10, 5) 
        
    }
    if(score.haMetido === 2){
        ctx.drawImage(ballScoreUp, 15, 10, 10, 5) 
        ctx.drawImage(ballScoreUp, 25, 10, 10, 5)
        
    }
    
    if(score.haMetido === 3){
        ctx.drawImage(ballScoreUp, 15, 10, 10, 5) 
        ctx.drawImage(ballScoreUp, 25, 10, 10, 5)
        ctx.drawImage(ballScoreUp, 35, 10, 10, 5)
       
    }
    if(score.haMetido === 4){
        ctx.drawImage(ballScoreUp, 15, 10, 10, 5) 
        ctx.drawImage(ballScoreUp, 25, 10, 10, 5)
        ctx.drawImage(ballScoreUp, 35, 10, 10, 5)
        ctx.drawImage(ballScoreUp, 45, 10, 10, 5)
    }
    if(score.haMetido === 5){
        ctx.drawImage(ballScoreUp, 15, 10, 10, 5) 
        ctx.drawImage(ballScoreUp, 25, 10, 10, 5)
        ctx.drawImage(ballScoreUp, 35, 10, 10, 5)
        ctx.drawImage(ballScoreUp, 45, 10, 10, 5)
        ctx.drawImage(ballScoreUp, 55, 10, 10, 5)
        merengue.draw()
        
    }
    
    if(score.haMetido === 6){
        ctx.drawImage(ballScoreUp, 15, 10, 10, 5) 
        ctx.drawImage(ballScoreUp, 25, 10, 10, 5)
        ctx.drawImage(ballScoreUp, 35, 10, 10, 5)
        ctx.drawImage(ballScoreUp, 45, 10, 10, 5)
        ctx.drawImage(ballScoreUp, 55, 10, 10, 5)
        ctx.drawImage(ballScoreUp, 15, 20, 10, 5)
        merengue.draw()
    }

    if(score.haMetido === 7){
        ctx.drawImage(ballScoreUp, 15, 10, 10, 5) 
        ctx.drawImage(ballScoreUp, 25, 10, 10, 5)
        ctx.drawImage(ballScoreUp, 35, 10, 10, 5)
        ctx.drawImage(ballScoreUp, 45, 10, 10, 5)
        ctx.drawImage(ballScoreUp, 55, 10, 10, 5)
        ctx.drawImage(ballScoreUp, 15, 20, 10, 5)
        ctx.drawImage(ballScoreUp, 25, 20, 10, 5)
        merengue.draw()
    }
    
    if(score.haMetido === 8){
        ctx.drawImage(ballScoreUp, 15, 10, 10, 5) 
        ctx.drawImage(ballScoreUp, 25, 10, 10, 5)
        ctx.drawImage(ballScoreUp, 35, 10, 10, 5)
        ctx.drawImage(ballScoreUp, 45, 10, 10, 5)
        ctx.drawImage(ballScoreUp, 55, 10, 10, 5)
        ctx.drawImage(ballScoreUp, 15, 20, 10, 5)
        ctx.drawImage(ballScoreUp, 25, 20, 10, 5)
        ctx.drawImage(ballScoreUp, 35, 20, 10, 5)
        merengue.draw()
    }

    if(score.haMetido === 9){
        ctx.drawImage(ballScoreUp, 15, 10, 10, 5) 
        ctx.drawImage(ballScoreUp, 25, 10, 10, 5)
        ctx.drawImage(ballScoreUp, 35, 10, 10, 5)
        ctx.drawImage(ballScoreUp, 45, 10, 10, 5)
        ctx.drawImage(ballScoreUp, 55, 10, 10, 5)
        ctx.drawImage(ballScoreUp, 15, 20, 10, 5)
        ctx.drawImage(ballScoreUp, 25, 20, 10, 5)
        ctx.drawImage(ballScoreUp, 35, 20, 10, 5)
        ctx.drawImage(ballScoreUp, 45, 20, 10, 5)
        merengue.draw()
    
    }
    





    // ctx.fillStyle = "black"
    // ctx.font = "20px Arial"
    // ctx.fillText(score.haMetido, 70, 20)
    // ctx.fillText(score.haParado, 215, 20)
    // ctx.drawImage(messiCaraScore, 215, 60)
    // if(haParado = 2){
    // return messiCaraScore *2
    // }if(haParado = 1){
    // return messiCaraScore *1
    // }if(haParado = 0){
    // return messiCaraScore = 0
    // }
    // }

}    

const update = () => {
    ctx.clearRect(0,0,canvas.width, canvas.height)
    field()
    messi.draw()
    portero.draw()
    pelota.draw()
    porteria.draw()
    checkCollitions()
    scoreUpdate()
    finishGame()
    console.log(portero.contains(pelota))

    requestAnimationFrame(update)
}

const score = {
    haMetido: 0,
    haParado: 3
  }


// Classes


class Player {
    constructor(x, color){
        this.x = x + 40,
        this.y = canvas.height/2 -15,
        this.w = 10,
        this.h = 20,
        this.color = color,
        this.speed = 15
        this.shotting = false
}
    draw() {
        if(this.shooting){ 
        ctx.drawImage(spriteMessiShooting, this.x, this.y, this.w, this.h)
    }else{
        ctx.drawImage(spriteMessiStop, this.x, this.y, this.w, this.h)
    }
    }
}

let messi = new Player(0, "blue")

class Goalkeeper {
    constructor(x){
        this.x = x,
        this.y = canvas.height/2 -5,
        this.w = 20,
        this.h = 10,
        this.speed = 0.5
        this.move = false
        this.direction = "up"
}
    draw() {
        // ctx.fillStyle = this.color
        // ctx.fillRect(this.x, this.y, this.w, this.h)
        // 
        if(this.direction === "up"){
        ctx.drawImage(goalKeeperUp, this.x, this.y, this.w, this.h)
        this.goalkeeperMove() 
        }else if (this.direction === "down"){
        ctx.drawImage(goalKeeperDown, this.x, this.y, this.w, this.h)
        this.goalkeeperMove()
        
        }
    }

    goalkeeperMove(){
        if(this.direction === "up"){
            this.y -= this.speed
        } else if (this.direction === "down") {
            this.y += this.speed
        }

        if ( this.y <= 45){
            this.direction = "down" 
        } else if (this.y >= 100){ 
            this.direction = "up"
        }      
    }
    

    contains(b){
        return (this.x < b.x + b.w) &&
          (this.x + this.w > b.x) &&
          (this.y < b.y + b.h) &&
          (this.y + this.h > b.y)
      } 

}

let portero = new Goalkeeper(270)



class Ball {
    constructor(x, color){
        this.x = x + 60,
        this.y = canvas.height/2 - 2.5,
        this.w = 10,
        this.h = 5,
        this.color = color,
        this.speed = 1,
        this.directionX = "left"
        this.directionY = "up",
        this.friction = 0.7,
        this.speedX = 1,
        this.speedY = 1,

        this.isMoving = false
    }

    ballMove(){
        if (this.isMoving) {
            this.x += this.speed
        } else {
            return
        }
    }

    draw() {
        ctx.fillStyle = this.color
        ctx.drawImage(balldraw, this.x, this.y, this.w, this.h)
        this.ballMove()
    }
}

let pelota = new Ball (0, "red")

class Goal{
    constructor(x, color){
        this.x = x + 295,
        this.y = 45,
        this.w = 5,
        this.h = 65,
        this.color = color, 
        this.speed = 0.5
        this.move = false
        this.direction = "up"
        
    }
    draw() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.w, this.h)
    }

    contains(b){
        return (this.x < b.x + b.w) &&
          (this.x + this.w > b.x) &&
          (this.y < b.y + b.h) &&
          (this.y + this.h > b.y)
      } 

}

let porteria = new Goal (0, "white")


class Opponent {
    constructor(x){
        this.x = x,
        this.y = canvas.height/2 -45,
        this.w = 20,
        this.h = 10,
        this.speed = 0.2
        this.move = false
        this.direction = "up"
}
    draw() {
        // ctx.fillStyle = this.color
        // ctx.fillRect(this.x, this.y, this.w, this.h)
        // 
        if(this.direction === "up"){
        ctx.drawImage(opponentUp, this.x, this.y, this.w, this.h)
        this.opponentMove() 
        }else if (this.direction === "down"){
        ctx.drawImage(opponentDown, this.x, this.y, this.w, this.h)
        this.opponentMove()
        
        }
    }

    opponentMove(){
        if(this.direction === "up"){
            this.y -= this.speed
        } else if (this.direction === "down") {
            this.y += this.speed
        }

        if ( this.y <= 45){
            this.direction = "down" 
        } else if (this.y >= 100){ 
            this.direction = "up"
        }      
    }
    

    contains(b){
        return (this.x < b.x + b.w) &&
          (this.x + this.w > b.x) &&
          (this.y < b.y + b.h) &&
          (this.y + this.h > b.y)
      } 

}

let merengue = new Opponent (170)


// Buttons

  buttonStart.addEventListener("click", (e) => {
    console.log("clicking")
    canvas.classList.remove("hidden");
    hydeStart.classList.add("hidden");
});

document.addEventListener("keydown", (e) => {
     if (e.keyCode === 32) {
        pelota.isMoving = true
        messi.shooting = true
     }

})

document.addEventListener("keyup", (e) => {
    if (e.keyCode === 32) {
       messi.shooting = false
    }

})


requestAnimationFrame(update)