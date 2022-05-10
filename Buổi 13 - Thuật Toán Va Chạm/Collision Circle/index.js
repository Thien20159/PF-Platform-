const canvas = document.getElementById("screen")
const ctx = canvas.getContext('2d')
const SCREEN_SIZE = 700
canvas.width = canvas.height = SCREEN_SIZE
canvas.style = "border:1px solid red; background:green"

class Circle{
    constructor(x, y, radius, color){
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }
    getX(){
        return this.x
    }
    getY(){
        return this.y
    }
    getRadius(){
        return this.radius
    }
    drawCircle(){
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.x, this.y, this.radius, 0, 2* Math.PI)
        ctx.fill()
    }
    distance(temp1, temp2){
        return Math.pow((temp1.x - temp2.x), 2) + Math.pow((temp1.y - temp2.y), 2)
    }
    checkCollision(circle1, circle2){
        return (Math.pow((circle1.radius + circle2.radius), 2) >= (this.distance(circle1, circle2)))
    }

}
let circle1 = new Circle(150, 150, 100, "#ff0000")
let circle2 = new Circle(300, 283, 100, "#0600fd")
circle1.drawCircle()
circle2.drawCircle()
if(circle1.checkCollision(circle1, circle2)){
    console.log("true");
}else{
    console.log("false");
}
