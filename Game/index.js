const canvas = document.getElementById('canvas')
const gameSize = 800 //width screen
const unit = 30   //don vi trong game = 40px
const snackColor = "white"
canvas.width = canvas.height = gameSize
const ctx = canvas.getContext('2d')
const backGroundColor = "black"
const gameDelay = 150

// setup point
// run = false

const LEFT = 37
const UP = 38
const RIGHT = 39
const DOWN = 40

// ctx.beginPath()
ctx.fillStyle = backGroundColor
ctx.fillRect(0, 0, gameSize, gameSize)
// ctx.fill



//Vector -> Toa do
class Vector2d{
    constructor(x, y){
        this.x = x
        this.y = y
    }
}

//Khong cho snack doi chieu nguoc co the
let currentDirection = new Vector2d(-1, 0)

//Snack
class Snack{
    constructor(){
        //khoi tao ran
        this.body = [
            new Vector2d(unit * 2, unit * 3),
            new Vector2d(unit * 3, unit * 3),
            new Vector2d(unit * 4, unit * 3)
        ]
        //khoi tao toc do
        this.speed = new Vector2d(-1, 0)
        
        this.head = this.body[0]

    }
    draw(){
        //Vẽ đầu rắn
        ctx.fillStyle = 'red'
        ctx.fillRect(this.body[0].x,this.body[0].y, unit, unit)
        //Vẽ thân rắn
        ctx.fillStyle = snackColor
        for(let i = 1; i < this.body.length; i++){
            ctx.fillRect(this.body[i].x, this.body[i].y, unit, unit)
        }
    }
    clear(){
        //xoa di ve lai
        ctx.fillStyle = backGroundColor

        ctx.fillRect(this.body[0].x,this.body[0].y, unit, unit)

        ctx.fillStyle = backGroundColor

        for(let i = 1; i < this.body.length; i++){
            ctx.fillRect(this.body[i].x, this.body[i].y, unit, unit)
        }
    }

    //di chuyen snake
    move(){
        //xoa
        this.clear()
        //gan gia tri lai
        for(let i = this.body.length - 1; i >= 1; i--){
            this.body[i].x = this.body[i-1].x
            this.body[i].y = this.body[i-1].y
        }
        //ve lai
        this.body[0].x += this.speed.x * unit
        this.body[0].y += this.speed.y * unit
        this.checkBound()
        this.draw()
    }
    //kiem tra va cham giua snake va food
    checkEat(food){
        const head = this.body[0]
        return food.x === head.x && food.y == head.y
    }
    //tang them chieu dai
    grow(){
        //xoa doan cu
        this.clear()
        //them phan moi
        let snackLength = this.body.length
        let mountX = this.body[snackLength - 1].x - this.body[snackLength - 2].x
        let mountY = this.body[snackLength - 1].y - this.body[snackLength - 2].y
        
        //gan vao snake
        let newPart = new Vector2d(
            this.body[snackLength - 1].x + mountX,
            this.body[snackLength - 1].y + mountY,
        )

        this.body.push(newPart)
        //ve doan moi
        this.draw()
    }
    
    checkBound(){
        if(this.head.x < 0){
            this.head.x = gameSize - unit
        }
        if(this.head.x > gameSize - unit){
            this.head.x = 0
        }
        if(this.head.y < 0){
            this.head.y = gameSize - unit
        }
        if(this.head.y > gameSize - unit){
            this.head.y = 0
        }
    }
}

class Food{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    draw(){
        ctx.fillStyle = 'green'
        ctx.fillRect(this.x, this.y, unit, unit)
    }
    clear(){
        ctx.fillStyle = 'green'
        ctx.fillRect(this.x, this.y, unit, unit)
    }
    //lay toa do 
    getRandomNumber(){
        let randomNumber = Math.floor(Math.random() * gameSize)
        randomNumber -= randomNumber % unit
        return randomNumber
    }
    spawn(){
        this.clear()
        this.x = this.getRandomNumber()
        this.y = this.getRandomNumber()
        this.draw()
    }
}

let player = new Snack()
player.draw()

let food = new Food()
food.spawn()

setInterval(() => {
    player.move()
    if(player.checkEat(food)){
        player.grow()
        food.spawn()
    }
}, gameDelay);

document.onkeydown = function(e){
    switch (e.keyCode) {
        case LEFT:
            if(currentDirection.x === 1) break
            player.speed = new Vector2d(-1, 0)
            currentDirection = new Vector2d(-1, 0)
            break;
        case RIGHT:
            if(currentDirection.x === -1) break
            player.speed = new Vector2d(1, 0)
            currentDirection = new Vector2d(1, 0)
            break;
        case UP:
            if(currentDirection.y === 1) break
            player.speed = new Vector2d(0, -1)
            currentDirection = new Vector2d(0, -1)
            break;
        case DOWN:
            if(currentDirection.y === -1) break
            player.speed = new Vector2d(0, 1)
            currentDirection = new Vector2d(0, 1)
            break;
        default:
            break;
    }
}