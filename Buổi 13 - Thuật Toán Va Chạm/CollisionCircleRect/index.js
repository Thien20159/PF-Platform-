const canvas = document.getElementById('screen')
const ctx = canvas.getContext('2d')
const SCREEN_SIZE = 700
canvas.width = canvas.height = SCREEN_SIZE
canvas.style = "border: 1px solid red"

class CircleRect{
    constructor(x, y, radius , color, width, height){
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.width = width
        this.height = height
    }
    drawRect(){
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.fill()
    }
    drawCircle(){
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        ctx.fill()
    }
    collision(circle, rect){
        let tempX = circle.x
        let tempY = circle.y

        let rectLeft = rect.x;
        let rectTop = rect.y;
        let rectRight = rect.x + rect.width;
        let rectBottom = rect.y + rect.height;

        // check

        if(circle.x < rectLeft)
            tempX = rectLeft
        else if(circle.x > rectRight)
            tempX = rectRight

        if(circle.y < rectTop)
            tempY = rectTop
        else if(circle.y > rectBottom)
            tempY =rectBottom

        let dx = circle.x - tempX
        let dy = circle.y - tempY

        return (dx * dx + dy * dy) <= (circle.radius * circle.radius)
    }
}
let rect = new CircleRect(100, 100, 0 , "#0600fd", 200, 100)
rect.drawRect()
let circle = new CircleRect(400, 300, 100 , "#fc0000", 0, 0)
circle.drawCircle()
console.log(rect.collision(circle, rect));