const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
// ctx.fillStyle = "blue";
// ctx.fillRect(0,0, canvas.width,canvas.height);


class Player {
    constructor(x, color){
        this.x = x + 20,
        this.y = canvas.height/2 - 5,
        this.w = 20,
        this.h = 10,
        this.color = color,
        this.speed = 15
}
    draw() {
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.w, this.h)
    }
}

let messi = new Player(0, "blue")

class Goalkeeper {
    constructor(x, color){
        this.x = x + 270,
        this.y = canvas.height/2 -5,
        this.w = 20,
        this.h = 10,
        this.color = color,
        this.speed = 0.5
        this.move = false
        this.direction = "up"
}
    draw() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.w, this.h)
        this.goalkeeperMove()
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

let portero = new Goalkeeper(0, "pink")


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
        ctx.fillRect(this.x, this.y, this.w, this.h)
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

let porteria = new Goal (0, "red")

const field = () => {
    ctx.strokeStyle = "black"
    ctx.lineWidth = 2
    ctx.strokeRect(0,0,canvas.width, canvas.height)
    ctx.lineheight = 6
    ctx.stroke()
    
}

const checkCollitions = () => {
    if (portero.contains(pelota)){
        score.left--
        pelota.isMoving = false
        pelota.x = 60
     
    }
    else if (porteria.contains(pelota)){
        score.left++
        pelota.isMoving = false
        pelota.x = 60
    
       }        

    if (pelota.x <= 0){
        pelota.isMoving = false
        pelota.x = 60
      } 

      

}

const score = {
    left: 0
  }

const scoreUpdate = () => {   
    ctx.fillStyle = "black"
    ctx.font = "20px Arial"
    ctx.fillText(score.left, 70, 20)
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
    console.log(portero.contains(pelota))

    requestAnimationFrame(update)
}

document.addEventListener("keydown", (e) => {
     if (e.keyCode === 32) {
        pelota.isMoving = true
     }

})


requestAnimationFrame(update)