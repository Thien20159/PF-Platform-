// const SCREENSIZE = 600
const BACKGROUND_COLOR = "red"
const canvas = document.getElementById('screen')
// canvas.width = canvas.height = SCREENSIZE
const ctx = canvas.getContext("2d")

class Rectangle{
    constructor(){}
    input(){
        do{
            this.length = parseInt(prompt("Nhap vao chieu dai"))
            this.width = parseInt(prompt("Nhap vao chieu rong"))
        }while(this.length == this.width);
    }
    draw(){
        ctx.fillStyle = BACKGROUND_COLOR
        ctx.fillRect(0, 0, this.length, this.width)
        ctx.fill()
    }
    area(){
        return this.length * this.width;
    }
    perimeter(){
        return ( this.length + this.width ) * 2;
    }
}

let rectangle = new Rectangle()
rectangle.input()
console.log(rectangle);
console.log("AREA = "+rectangle.area());
console.log("PERIMETER = "+rectangle.perimeter());
rectangle.draw()