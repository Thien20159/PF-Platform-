class Circle {
    constructor(radius, x, y, color) {
        this.canvas = document.getElementById('screen')
        this.ctx = this.canvas.getContext('2d')

        this.radius = radius
        this.x = x
        this.y = y
        this.color = color
    }
    getRadius() {
        return this.radius
    }
    getArea() {
        return Math.pow(this.radius, 2) * Math.PI
    }
    getDraw(ctx) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        ctx.fillStyle = this.color
        ctx.fill()
    }

}