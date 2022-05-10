/*tao canvas
tao ran{
    dau
    than
}
tao food
di chuyen ran
spawn moi
*/

const canvas = document.getElementById('screen')
const ctx = canvas.getContext('2d')
const gameSize = 600
const unit = 30
const gameDelay = 200
const backGroundColor = "black"
const snackColor = "red"

canvas.width = canvas.height = gameSize
ctx.fillStyle = backGroundColor
ctx.fillRect(0, 0, gameSize, gameSize)


const LEFT = 37
const UP = 38
const RIGHT = 39
const DOWN = 40

let currentDirection = new Vector(-1,0)

class Vector{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}
class Snack{
    constructor(){
        this.body = [
            new Vector(6 * unit, 0 * unit),
            new Vector(7 * unit, 0 * unit),
            new Vector(8 * unit, 0 * unit)
        ]

        this.speed = new Vector(-1, 0)
        this.head = this.body[0]
    }
    draw(){
        ctx.fillStyle = 'blue'
        ctx.fillRect(this.body[0].x, this.body[0].y,unit, unit)

        ctx.fillStyle = snackColor
        for(let i = 1; i< this.body.length; i++){
            ctx.fillRect(this.body[i].x, this.body[i].y, unit, unit)
        }
    }
    clear(){
        ctx.fillStyle = backGroundColor
        ctx.fillRect(this.body[0].x, this.body[0].y,unit, unit)

        ctx.fillStyle = backGroundColor
        for(let i = 1; i< this.body.length; i++){
            ctx.fillRect(this.body[i].x, this.body[i].y, unit, unit)
        }
    }
    move(){
        this.clear()
        for(let i =  this.body.length-1 ; i>= 1; i--){
            this.body[i].x = this.body[i-1].x
            this.body[i].y = this.body[i-1].y
        }
        this.body[0].x += this.speed.x * unit
        this.body[0].y += this.speed.y * unit
        this.draw()
    }
}

let snack = new Snack()
snack.draw()

setInterval(() => {
    snack.move()
    
}, gameDelay);

document.onkeydown = function(e){
    switch (e.keyCode) {
        case LEFT:
            if(currentDirection.x === 1) break
            snack.speed = new Vector(-1, 0)
            currentDirection = new Vector(-1, 0)
            break;
    
        case RIGHT:
            if(currentDirection.x === -1) break
            snack.speed = new Vector(1, 0)
            currentDirection = new Vector(1, 0)
            break;
    
        case UP:
            if(currentDirection.y === 1) break
            snack.speed = new Vector(0, -1)
            currentDirection = new Vector(0, -1)
            break;
    
        case DOWN:
            if(currentDirection.y === -1) break
            snack.speed = new Vector(0, 1)
            currentDirection = new Vector(0, 1)
            break;
        default:
            break;
    }
}


