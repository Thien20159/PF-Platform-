const canvas = document.getElementById('screen')
const ctx = canvas.getContext('2d')
const screenSize = 500
canvas.width = canvas.height = screenSize 
canvas.style = "border:1px solid red"
const unit = 40
const backGroundColor = "blue"
let x = 0;
let y = 0;
ctx.beginPath()
ctx.fillStyle = backGroundColor
ctx.fillRect(0, 0, 2*unit,2*unit)
ctx.clearRect(2, 2, 1.9*unit, 1.9*unit)
ctx.fill()


for(let i = 1; i <= screenSize; i+= unit){
    x += 2*unit;
    ctx.beginPath()
    ctx.fillStyle = backGroundColor
    ctx.fillRect(x, y, 2 * unit,2 * unit)
    ctx.clearRect(x+2, y+2, 1.9*unit, 1.9   *unit)
    ctx.fill()
}


