const SCREEN_SIZE = 600
const canvas = document.getElementById('screen')
const ctx = canvas.getContext('2d')
canvas.width = canvas.height = SCREEN_SIZE
const BACKGROUND_COLOR = "red"
canvas.style = "border: 1px solid red" 
class Rect{
    constructor(x, y, width, height, color){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.color = color
    }
    getX(){
        return this.x
    }
    getY(){
        return this.y
    }
    getWidth(){
        return this.width
    }
    getHeight(){
        return this.height
    }
    draw(){
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fill()
    }
    collision(rect1, rect2){
        let disX = (rect1.x +(rect1.width/2) - (rect2.x+(rect2.width/2)))
        disX = Math.abs(disX);
        let disY = (rect1.y +(rect1.height/2) - (rect2.y+(rect2.height/2)))
        disY = Math.abs(disY);
        const disW = (rect1.width+rect2.width)/2;
        const disH = (rect1.height+rect2.height)/2;
        return (disX <= disW && disY <= disH);
    }
}

let rect1 = new Rect(100, 100, 200, 100, "#ff0000")
let rect2 = new Rect(300, 300, 200, 100, "#0100ec")
rect1.draw()
rect2.draw()
console.log(rect1.collision(rect1, rect2));